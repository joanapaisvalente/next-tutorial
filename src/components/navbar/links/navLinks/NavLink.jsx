"use client";

import Link from "next/link";
import styles from "./navlink.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ item }) => {
  const path = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${path === item.path && styles.active}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
