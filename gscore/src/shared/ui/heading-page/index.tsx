"use client";
import Button from "@/shared/ui/button";
import React from "react";
import styles from "./styles.module.sass";
import clsx from "clsx";

interface Props {
  className?: string;
  title: string;
  action?: () => void;
  actionLabel?: string;
}

const HeadingPage: React.FC<Props> = ({
  title,
  className,
  action,
  actionLabel,
}) => {
  return (
    <div className={clsx(className, styles.headingPage)}>
      <h1 className={styles.headingTitle}>{title}</h1>
      {action && (
        <div className={styles.headingActions}>
          <Button
            onClick={action}
            className={styles.actionMediaOne}
            variant="primary"
            scale="biggest"
          >
            {actionLabel}
          </Button>
          <Button
            shadow={false}
            onClick={action}
            className={styles.actionMediaTwo}
            variant="text"
            scale="smallest"
          >
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
};

export default HeadingPage;
