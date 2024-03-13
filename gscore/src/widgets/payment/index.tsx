"use client";
import React, { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.sass";
import TabProgress from "@/shared/ui/tab-progress";
import { SignUp } from "@/features/auth/sign-up";
import { SignIn } from "@/features/auth/sign-in";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { ROUTES } from "@/shared/constants";
import { Checkout } from "@/features/auth/checkout";
const Payment = () => {
  const [step, setStep] = useState(0);
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const updatedQuery: any = {
      step: step,
    };

    const url = qs.stringifyUrl({
      url: ROUTES.HOME_AUTH,
      query: updatedQuery,
    });
    router.push(url);
  }, [step]);

  useEffect(() => {
    if (params?.get("step")) {
      const value = Number(params?.get("step")) || 0;
      if (value >= 0 && value <= 2) setStep(value);
    }
  }, [params]);

  const renderStep = () => {
    if (step === 0) return <SignUp action={() => setStep(1)} />;
    if (step === 1) return <SignIn action={() => setStep(2)} />;
    if (step === 2)
      return <Checkout action={() => router.push(ROUTES.HOME_START)} />;
    return null;
  };

  return (
    <div className={styles.paymentProgress}>
      <TabProgress
        step={step}
        tabs={[
          {
            title: "Create account",
            onClick: () => {
              setStep(0);
            },
          },
          {
            title: "Log in",
            onClick: () => {
              setStep(1);
            },
          },
          {
            title: "Checkout",
            onClick: () => {
              setStep(2);
            },
          },
        ]}
      />
      {renderStep()}
    </div>
  );
};

export default Payment;
