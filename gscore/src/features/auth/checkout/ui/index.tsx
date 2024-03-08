import React, { useState } from "react";
import styles from "./styles.module.sass";

import FormLayout from "@/shared/ui/form-layout";

import Heading from "@/shared/ui/heading";
import SubscriptionCard from "@/entities/subscriptions/ui/subscription-card";

const Checkout = ({ action }: { action?: () => void }) => {
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      alert("checout");
      action && action();
      setLoading(false);
    }, 500);
  };
  let bodyContent = (
    <>
      <div className={styles.body}>
        <SubscriptionCard type="template" onRemove={() => {}} />
        <div className={styles.totalBlock}>
          <span className={styles.labelBlock}>Total:</span>
          <span className={styles.labelBlock}>${77}</span>
        </div>
      </div>
    </>
  );
  return (
    <FormLayout
      className={styles["margin-b"]}
      header={<Heading title="Checkout" />}
      loading={loading}
      body={bodyContent}
      onSubmit={onSubmit}
      actiotLabel="Purchase"
    />
  );
};

export default Checkout;
