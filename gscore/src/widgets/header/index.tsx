"use client";
import React from "react";
import styles from "./styles.module.sass";
import Logo from "@/shared/ui/logo";
import Navbar from "@/features/navbar/ui";
import { UserHeaderMenu } from "@/features/user/user-menu";
import { ROUTES } from "@/shared/constants";
import Icon from "@/shared/ui/icon";
import Burger from "@/shared/assets/icons/burger.svg";
import { useSidebar } from "@/shared/hooks/use-sidebar";

const Header = () => {
  const sidebar = useSidebar();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <Logo />
          <div className={styles.rightHeader}>
            <Navbar
              links={[{ href: ROUTES.SETTINGS_SUB, title: "My subscriptions" }]}
            />
            <UserHeaderMenu />
          </div>
          <Icon
            onClick={sidebar.onOpen}
            className={styles.burgerMenu}
            width={44}
            height={44}
          >
            <Burger />
          </Icon>
        </div>
      </div>
    </header>
  );
};

export default Header;
