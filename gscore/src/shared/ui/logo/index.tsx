import React, { FC } from "react";
import styles from "./styles.module.sass";
import LogoIcon from "@/shared/assets/icons/logo.svg";
import Image from "next/image";
import clsx from "clsx";

interface Props {
  className?: string;
  text?: string;
}

const Logo: FC<Props> = ({ className, text = "gscore" }) => {
  return (
    <div className={clsx(className, styles.logo)}>
      <LogoIcon width={42} height={42} />
      <span>{text}</span>
    </div>
  );
};

export default Logo;
