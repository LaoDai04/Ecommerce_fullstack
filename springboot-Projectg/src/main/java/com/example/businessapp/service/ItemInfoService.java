package com.example.businessapp.service;

import org.springframework.stereotype.Service;

@Service
public class ItemInfoService {
    public String getItemInfo(String item){
        return "Information about item: " + item;
    }
}
