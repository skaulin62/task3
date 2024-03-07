import React from "react";
import styles from "./styles.module.sass";
import Icon from "@/shared/ui/icon";
import clsx from "clsx";

interface Props {
  className?: string;
  onClick: () => void;
  label: string;
  icon: React.ReactNode;
}

const MenuItem: React.FC<Props> = ({ className, onClick, label, icon }) => {
  return (
    <div onClick={onClick} className={clsx(className, styles.menuItem)}>
      <Icon width={24} height={24}>
        {icon}
      </Icon>
      {label}
    </div>
  );
};

export default MenuItem;
