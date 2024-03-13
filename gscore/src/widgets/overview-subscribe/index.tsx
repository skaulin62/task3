import SubscriptionCard from "@/entities/subscriptions/ui/subscription-card";
import Heading from "@/shared/ui/heading";
import React from "react";
import styles from "./styles.module.sass";
import Button from "@/shared/ui/button";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/constants";

const OverviewSubscribe = () => {
  const router = useRouter();
  return (
    <div className={styles.overview}>
      <Heading
        title="Start your subscription"
        subTitle="We have sent you a payment receipt by e-mail and a link to download the plugin with a license key."
      />
      <SubscriptionCard type="template" />
      <Button
        variant="primary"
        scale="biggest"
        onClick={() => router.push(ROUTES.SETTINGS_SUB)}
      >
        Go to my subscriptions
      </Button>
    </div>
  );
};

export default OverviewSubscribe;
