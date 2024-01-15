"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLinks/NavLink";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Blog", path: "/blog" },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  const mappedLinks = links.map((link, index) => (
    <NavLink item={link} key={index} />
  ));

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {mappedLinks}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "login" }} />
        )}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {open && <div className={styles.mobileLinks}>{mappedLinks}</div>}
    </div>
  );
};

export default Links;
