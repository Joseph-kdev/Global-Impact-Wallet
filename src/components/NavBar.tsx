import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/news", icon: "/th-large.svg", label: "News" },
    { href: "/videos", icon: "/video.svg", label: "Videos" },
    { href: "/dashboard", icon: "/wallet.svg", label: "Wallet" },
    { href: "/stores", icon: "/shopping-bag.svg", label: "Stores" },
    { href: "/profile", icon: "/user.svg", label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 md:hidden rounded-2xl">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center w-16 h-full text-gray-600 ${
              pathname === item.href ? "text-blue-500" : ""
            }`}
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={6}
              height={6}
              className={`w-6 h-6 ${
                pathname === item.href
                  ? "text-primary-500"
                  : "text-secondary-500"
              }`}
            />
            <span
              className={`text-[10px] font-medium ${
                pathname === item.href
                  ? "text-primary-500"
                  : "text-secondary-300"
              }`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
