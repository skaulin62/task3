"use client";
import React, { FC } from "react";
import styles from "./styles.module.sass";
import clsx from "clsx";
import { Status } from "@/shared/types/types";

interface Props {
  className?: string;
  status: Status;
}

const StatusText: FC<Props> = ({ className, status }) => {
  return (
    <span
      className={clsx(
        className,
        styles.status,
        {
          ["Active"]: styles.active,
          ["Hold"]: styles.hold,
          ["Inactive"]: styles.inactive,
        }[status]
      )}
    >
      {status}
    </span>
  );
};

export default StatusText;
