package com.example.businessapp.auth;

import com.example.businessapp.security.JwtService;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.businessapp.customer.Customer;
import com.example.businessapp.customer.CustomerRepository;
import com.example.businessapp.dto.AuthResponse;
import com.example.businessapp.dto.LoginRequest;
import com.example.businessapp.dto.MeResponse;
import com.example.businessapp.dto.RegisterRequest;

@Service
public class AuthService {

    private final JwtService jwtService;
    private final CustomerRepository customerRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    public AuthService(CustomerRepository customerRepository, PasswordEncoder passwordEncoder,
            AuthenticationManager authenticationManager, JwtService jwtService) {
        this.customerRepository = customerRepository;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
    }

    public Customer register(RegisterRequest request) {

        if (customerRepository.findByEmail(request.email()).isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Email already registered");
        }

        Customer customer = new Customer(request.customerName(), request.email());
        customer.setPasswordHash(passwordEncoder.encode(request.password()));
        try {
            return customerRepository.save(customer);
        } catch (DataIntegrityViolationException e) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Email already registered");
        }
    }

    public AuthResponse login(LoginRequest request) {

        Authentication auth = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.email(), request.password()));

        String role = auth.getAuthorities().iterator().next().getAuthority();

        return new AuthResponse(jwtService.generateToken(request.email(), role));
    }

    public MeResponse me(String email) {
        Customer c = customerRepository.findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        return new MeResponse(c.getCustomerId(), c.getCustomerName(), c.getEmail(), c.getRole().name());
    }
}