"use client";
import React, { useRef } from "react";
import styles from "./styles.module.sass";
import Logo from "@/shared/ui/logo";
import { useSidebar } from "@/shared/hooks/use-sidebar";
import clsx from "clsx";
import Icon from "@/shared/ui/icon";
import Close from "@/shared/assets/icons/close.svg";
import MenuItem from "@/features/user/user-menu/ui/user-menu-item";
import GSLink from "@/shared/ui/link";
import { ROUTES } from "@/shared/constants";
import Accordion from "@/shared/ui/accordion";
import Settings from "@/shared/assets/icons/settings.svg";
import Logout from "@/shared/assets/icons/logout.svg";
import ArrowTop from "@/shared/assets/icons/arrow-top.svg";
import ArrowDown from "@/shared/assets/icons/chevron-down.svg";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const sidebar = useSidebar();
  const router = useRouter();

  return (
    <aside
      onClick={sidebar.onClose}
      className={clsx(styles.sidebarOverlay, {
        [styles.sidebarOpen]: sidebar.isOpen,
        [styles.sidebarClose]: !sidebar.isOpen,
      })}
    >
      <div onClick={(e) => e.stopPropagation()} className={styles.sidebar}>
        <div className={styles.header}>
          <Icon
            className={styles.closeSidebar}
            onClick={sidebar.onClose}
            width={24}
            height={24}
          >
            <Close />
          </Icon>
          <Logo className={styles.logo} />
        </div>
        <div className={styles.body}>
          <GSLink className={styles.navItem} href={ROUTES.SETTINGS_SUB}>
            My subscriptions
          </GSLink>

          <Accordion
            iconActive={<ArrowDown />}
            iconInActive={<ArrowTop />}
            className={styles.accordion}
            title="Alex"
            widthIcon={24}
            classNameHeader={styles.headerAccord}
            classNameContent={styles.contentAccord}
          >
            <MenuItem
              className={styles.item}
              onClick={() => router.push(ROUTES.SETTINGS_PRO)}
              label="Settings"
              icon={<Settings />}
            />
            <MenuItem
              className={styles.item}
              onClick={() => {}}
              label="Logout"
              icon={<Logout />}
            />
          </Accordion>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
