"use client";
import React, { useCallback, useState } from "react";
import styles from "./styles.module.sass";
import Icon from "@/shared/ui/icon";
import Arrow from "@/shared/assets/icons/chevron-down.svg";
import MenuItem from "../user-menu-item";
import Settings from "@/shared/assets/icons/settings.svg";
import Logout from "@/shared/assets/icons/logout.svg";
import clsx from "clsx";

const UserHeaderMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = "Alex";

  const toggle = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className={styles.userMenu}>
      <div onClick={toggle} className={styles.handlePopup}>
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
        <div className={styles.popup}>
          <MenuItem onClick={() => {}} label="Settings" icon={<Settings />} />
          <MenuItem onClick={() => {}} label="Logout" icon={<Logout />} />
        </div>
      )}
    </div>
  );
};

export default UserHeaderMenu;
