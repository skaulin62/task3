"use client";
import React from "react";
import styles from "./styles.module.sass";
import { Status } from "@/shared/types/types";
import CheckBox from "@/shared/ui/checkbox";
import InputIcon from "@/shared/ui/input-icon";
import Copy from "@/shared/assets/icons/copy.svg";
import clsx from "clsx";
import StatusText from "@/shared/ui/status-text";
import Button from "@/shared/ui/button";
interface Props {
  className?: string;
  code: string;
  domain: string;
  status: Status;
  actionLabel?: string;
  action?: () => void;
}

const LicenseCode: React.FC<Props> = ({
  className,
  code,
  domain,
  status,
  action,
  actionLabel,
}) => {
  return (
    <div className={styles.code}>
      <CheckBox className={styles.checkbox} checked={false} />

      <div className={styles.rowData}>
        <div className={clsx(styles.row, styles.row1)}>
          <span className={styles.columnTitle}>License code</span>
          <InputIcon
            value={code}
            icon={<Copy />}
            onClick={(value) => navigator.clipboard.writeText(value)}
          />
        </div>
        <div className={clsx(styles.row, styles.row2)}>
          <span className={styles.columnTitle}>Domain</span>
          <div className={styles.row2Inner}>
            <InputIcon value={code} />
            {action && (
              <Button
                className={styles.btnActive}
                variant="secondary"
                onClick={action}
              >
                {actionLabel}
              </Button>
            )}
          </div>
        </div>
        <div className={clsx(styles.row, styles.row3)}>
          <span className={clsx(styles.statusTitle, styles.columnTitle)}>
            Status
          </span>
          <StatusText className={styles.statusText} status={status} />
        </div>
      </div>
    </div>
  );
};

export default LicenseCode;
