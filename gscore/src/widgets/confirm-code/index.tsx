import React from "react";
import styles from "./styles.module.sass";
import Button from "@/shared/ui/button";
const ConfirmCode = () => {
  return (
    <div className={styles.blockConfirm}>
      <span className={styles.select}>Select the domains you want to keep</span>
      <Button className={styles.btnConfirm} variant="primary" scale="biggest">
        Сonfirm
      </Button>
    </div>
  );
};

export default ConfirmCode;
