"use client";
import React, { useState } from "react";
import styles from "./styles.module.sass";
import GSLink from "@/shared/ui/link";
import { Direction, Link } from "../model/types/types";
import clsx from "clsx";
import { usePathname } from "next/navigation";

interface Props {
  dir?: Direction;
  links: Link[];
  className?: string;
}

const Navbar: React.FC<Props> = ({ dir = "horizontal", links, className }) => {
  const pathName = usePathname();

  return (
    <nav className={styles.navbar}>
      <ul
        className={clsx(
          styles.navList,
          { ["vertical"]: styles.vertical, ["horizontal"]: styles.horizontal }[
            dir
          ]
        )}
      >
        {links.map((link) => (
          <li key={link.href}>
            <GSLink
              className={clsx(className, {
                [styles.selectedItem]: link.href === pathName,
              })}
              href={link.href}
            >
              {link.title}
            </GSLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
