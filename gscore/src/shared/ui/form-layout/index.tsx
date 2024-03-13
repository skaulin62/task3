"use client";
import React from "react";
import styles from "./styles.module.sass";
import Button from "@/shared/ui/button";
import clsx from "clsx";

interface Props {
  className?: string;
  header: React.ReactElement;
  body: React.ReactElement;
  footer?: React.ReactElement;
  onSubmit: () => void;
  actiotLabel: string;
  loading?: boolean;
}

const FormLayout: React.FC<Props> = ({
  header,
  body,
  footer,
  loading,
  onSubmit,
  actiotLabel,
  className,
}) => {
  return (
    <form className={clsx(className, styles.form)}>
      <div className={styles.header}>{header}</div>
      <div className={styles.body}>{body}</div>
      <Button
        loading={loading}
        disabled={loading}
        className={styles.button}
        variant="primary"
        onClick={onSubmit}
      >
        {actiotLabel}
      </Button>
      <div className={styles.footer}>{footer}</div>
    </form>
  );
};

export default FormLayout;
