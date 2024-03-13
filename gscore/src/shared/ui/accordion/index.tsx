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
  iconActive?: React.ReactNode;
  iconInActive?: React.ReactNode;
  widthIcon?: number;
  classNameContent?: string;
  classNameHeader?: string;
}

const Accordion: FC<Props> = ({
  className,
  children,
  title,
  isActive = false,
  iconActive,
  iconInActive,
  widthIcon = 36,
  classNameContent,
  classNameHeader,
}) => {
  const [active, setActive] = React.useState<boolean>(isActive);
  useEffect(() => {
    setActive(isActive);
  }, [isActive]);
  return (
    <div
      className={clsx(className, styles.accordion, {
        [styles.accordionActive]: active,
      })}
    >
      <div
        onClick={() => setActive(!active)}
        className={clsx(classNameHeader, styles.header)}
      >
        <span className={styles.headerTitle}>{title}</span>
        <Icon
          className={styles.headerIcon}
          width={widthIcon}
          height={widthIcon}
        >
          {!active ? (
            iconInActive ? (
              iconInActive
            ) : (
              <ArrowRight />
            )
          ) : iconActive ? (
            iconActive
          ) : (
            <ArrowDown />
          )}
        </Icon>
      </div>
      {active && (
        <div className={clsx(classNameContent, styles.content)}>{children}</div>
      )}
    </div>
  );
};

export default Accordion;
