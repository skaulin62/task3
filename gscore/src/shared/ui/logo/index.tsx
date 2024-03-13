"use client";
import React, { FC } from "react";
import styles from "./styles.module.sass";
import LogoIcon from "@/shared/assets/icons/logo.svg";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/constants";
import Icon from "@/shared/ui/icon";

interface Props {
  className?: string;
  text?: string;
}

const Logo: FC<Props> = ({ className, text = "gscore" }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(ROUTES.HOME)}
      className={clsx(className, styles.logo)}
    >
      <Icon className={styles.logoInner} width={43} height={42}>
        <LogoIcon />
      </Icon>

      <span>{text}</span>
    </div>
  );
};

export default Logo;
