"use client";
import React, { useCallback, useRef, useState } from "react";
import styles from "./styles.module.sass";
import Icon from "@/shared/ui/icon";
import Arrow from "@/shared/assets/icons/chevron-down.svg";
import MenuItem from "../user-menu-item";
import Settings from "@/shared/assets/icons/settings.svg";
import Logout from "@/shared/assets/icons/logout.svg";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/constants";
import { useOnClickOutside } from "@/shared/hooks/use-click-outside";

const UserHeaderMenu = () => {
  const router = useRouter();
  const refPopup = useRef<HTMLDivElement | null>(null);
  const refCanClickOuside = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const user = "Alex";

  const toggle = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  useOnClickOutside(
    refPopup,
    () => {
      setIsOpen(false);
    },
    refCanClickOuside
  );

  return (
    <div className={styles.userMenu}>
      <div
        ref={refCanClickOuside}
        onClick={toggle}
        className={styles.handlePopup}
      >
        <span className={styles.userLabel}>{user}</span>
        <Icon
          className={clsx(styles.closed, { [styles.opened]: isOpen })}
          width={24}
          height={24}
        >
          <Arrow />
        </Icon>
      </div>
      {isOpen && (
        <div ref={refPopup} className={styles.popup}>
          <MenuItem
            onClick={() => {
              router.push(ROUTES.SETTINGS_PRO);
              toggle();
            }}
            label="Settings"
            icon={<Settings />}
          />
          <MenuItem onClick={toggle} label="Logout" icon={<Logout />} />
        </div>
      )}
    </div>
  );
};

export default UserHeaderMenu;
