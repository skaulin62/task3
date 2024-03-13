"use client";
import React from "react";
import styles from "./styles.module.sass";
import HeadingPage from "@/shared/ui/heading-page";
import SliderSubscription from "@/features/subscriptions/slider-subscriptions";

import ListLicenseCode from "@/widgets/list-license-code";
import ConfirmCode from "@/widgets/confirm-code";

const Subcriptions = () => {
  return (
    <section>
      <div className={styles.subscriptions}>
        <div className="container">
          <HeadingPage
            className={styles.heading}
            title="My subscriptions"
            actionLabel="Upgrade"
            action={() => {}}
          />

          <SliderSubscription />

          <ListLicenseCode />
          <ConfirmCode />
        </div>
      </div>
    </section>
  );
};

export default Subcriptions;
