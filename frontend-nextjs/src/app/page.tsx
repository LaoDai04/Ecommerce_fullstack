import Link from "next/link";
type NavItem = {
  name: string;
  href: string;
};

const navBar: NavItem[] = [
    { name: "Products", href: "/products" },
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Cart", href: "/cart" },
];

export default function Home() {
  return (
     <main className="min-h-screen bg-white">
    <header className="relative h-[250px] bg-green-500">

  <nav className="relative z-30 ...">
    ...
  </nav>

  <div className="absolute inset-x-0 bottom-0 z-20">
  <svg
    viewBox="0 0 1440 260"
    preserveAspectRatio="none"
    className="block h-[180px] w-full"
  >
    <path
      fill="white"
      d="
        M0 220
        C70 220 75 195 105 135
        C140 65 220 50 350 50
        C520 50 650 45 800 48
        C980 50 1110 65 1210 55
        C1320 45 1400 15 1440 0
        L1440 260
        L0 260
        Z
      "
    />

    <path
      d="
        M0 220
        C70 220 75 195 105 135
        C140 65 220 50 350 50
        C520 50 650 45 800 48
        C980 50 1110 65 1210 55
        C1320 45 1400 15 1440 0
      "
      fill="none"
      stroke="rgba(0,0,0,0.15)"
      strokeWidth="10"
      className="drop-shadow-[0_-5px_8px_rgba(0,0,0,7.15)]"
    />
  </svg>
</div>

</header>

    </main>
  );
}
