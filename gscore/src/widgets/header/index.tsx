"use client";
import React from "react";
import styles from "./styles.module.sass";
import Logo from "@/shared/ui/logo";
import Navbar from "@/features/navbar/ui";
import { UserHeaderMenu } from "@/features/user/user-menu";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
          <div className={styles.rightHeader}>
            <Navbar
              links={[
                { href: "/home", title: "Home" },
                { href: "/notFound", title: "About" },
              ]}
            />
            <UserHeaderMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
