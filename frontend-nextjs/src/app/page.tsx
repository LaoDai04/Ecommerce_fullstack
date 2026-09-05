import ImageLoader from "@/components/imageLoader";

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
  return <p> </p>;
}
