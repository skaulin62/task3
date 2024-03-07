"use client";
import React, { FC } from "react";
import styles from "./styles.module.sass";
import Link, { LinkProps } from "next/link";
import clsx from "clsx";

type LinkType = "primary" | "secondary";

interface Props {
  className?: string;
  children: React.ReactNode;
  variant?: string;
}

const GSLink: FC<Props & LinkProps> = ({
  className,
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <Link
      className={clsx(
        styles.link,
        className,
        { primary: styles.primary, secondary: styles.primary }[variant]
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default GSLink;
