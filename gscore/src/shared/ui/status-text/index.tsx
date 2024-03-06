import React, { FC } from "react";
import styles from "./styles.module.sass";
import clsx from "clsx";

type Status = "Active" | "Hold" | "Inactive";

interface Props {
  className?: string;
  status: Status;
}

const StatusText: FC<Props> = ({ className, status }) => {
  return (
    <span
      className={clsx(
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
