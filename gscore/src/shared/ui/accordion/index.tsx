"use client";

import React, { FC, useEffect } from "react";
import styles from "./styles.module.sass";
import clsx from "clsx";
import Icon from "@/shared/ui/icon";
import ArrowRight from "@/shared/assets/icons/chevron-right.svg";
import ArrowDown from "@/shared/assets/icons/chevron-down.svg";
interface Props {
  className?: string;
  children: React.ReactNode;
  title: string;
  isActive?: boolean;
}

const Accordion: FC<Props> = ({
  className,
  children,
  title,
  isActive = false,
}) => {
  const [active, setActive] = React.useState<boolean>(isActive);
  useEffect(() => {
    setActive(isActive);
  }, [isActive]);
  return (
    <div
      className={clsx(styles.accordion, className, {
        [styles.accordionActive]: active,
      })}
    >
      <div onClick={() => setActive(!active)} className={styles.header}>
        <span className={styles.headerTitle}>{title}</span>
        <Icon className={styles.headerIcon} width={36} height={36}>
          {!active ? <ArrowRight /> : <ArrowDown />}
        </Icon>
      </div>
      {active && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default Accordion;
