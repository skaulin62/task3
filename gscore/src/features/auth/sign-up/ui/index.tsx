"use client";
import React, { useState } from "react";
import styles from "./styles.module.sass";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import FormLayout from "@/shared/ui/form-layout";
import Input from "@/shared/ui/input";
import Heading from "@/shared/ui/heading";
import Button from "@/shared/ui/button";

const SignUp = ({ action }: { action?: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FieldValues>({
    mode: "onChange",
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
    setTimeout(() => {
      alert("sign up");
      action && action();
      setLoading(false);
    }, 500);
  };

  let bodyContent = (
    <>
      <Input
        id="username"
        type="text"
        disabled={loading}
        placeHolder="Username"
        register={register}
        errors={errors}
        dirtyFields={dirtyFields}
      />
      <Input
        id="email"
        type="text"
        disabled={loading}
        placeHolder="Email"
        register={register}
        errors={errors}
        dirtyFields={dirtyFields}
      />
      <Input
        id="password"
        type="password"
        disabled={loading}
        placeHolder="Password"
        register={register}
        errors={errors}
        dirtyFields={dirtyFields}
      />
    </>
  );
  let footerContent = (
    <>
      <div className={styles.footerContent}>
        <span>Have an account?</span>
        <Button
          type="button"
          onClick={() => action && action()}
          className={styles.footerBtn}
          shadow={false}
          variant="text"
        >
          Go to next step
        </Button>
      </div>
    </>
  );
  return (
    <FormLayout
      header={
        <Heading
          title="Create account"
          subTitle="You need to enter your name and email. We will send you a temporary password by email"
        />
      }
      footer={footerContent}
      loading={loading}
      body={bodyContent}
      onSubmit={handleSubmit(onSubmit)}
      actiotLabel="Send Password"
    />
  );
};

export default SignUp;
