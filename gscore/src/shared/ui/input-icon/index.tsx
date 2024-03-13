"use client";
import React from "react";
import styles from "./styles.module.sass";

import Icon from "@/shared/ui/icon";
import clsx from "clsx";

interface Props {
  className?: string;
  value: string;
  onClick?: (value: string) => void;
  icon?: React.ReactNode;
}

const InputIcon: React.FC<Props> = ({ className, value, onClick, icon }) => {
  return (
    <div
      className={clsx(className, styles.inputIcon, { [styles.notIcon]: !icon })}
    >
      <span>{value}</span>
      {icon && (
        <Icon
          className={styles.actionIcon}
          onClick={() => onClick?.(value)}
          width={32}
          height={32}
        >
          {icon}
        </Icon>
      )}
    </div>
  );
};

export default InputIcon;
