'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkPropType = {
  href: string;
  classList: string;
  children: React.ReactNode;
};
const NavLink = ({ href, classList, children }: NavLinkPropType) => {
    const path = usePathname();

  return (
    <Link href={href} className={href===path ? classList+" active": classList}>
      {children}
    </Link>
  );
};

export default NavLink;
