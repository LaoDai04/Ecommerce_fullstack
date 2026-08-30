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
    
    <div className="flex flex-col flex-1 bg-green-300">
           <div className="flex gap-10 justify-center items-center bg-amber-300 border-amber-700 border-2">
           {navBar.map((item) => (
             <Link key={item.name} href={item.href} className="font-medium text-3xl text-zinc-950 dark:text-zinc-50">
               {item.name}
             </Link>
           ))}
           </div>
        
    </div>
  );
}
