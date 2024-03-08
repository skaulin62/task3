import React, { useState } from "react";
import styles from "./styles.module.sass";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import FormLayout from "@/shared/ui/form-layout";
import Input from "@/shared/ui/input";
import Heading from "@/shared/ui/heading";

const SignIn = ({ action }: { action?: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
  } = useForm<FieldValues>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
    setTimeout(() => {
      alert("sign in");
      action && action();
      setLoading(false);
    }, 500);
  };

  let bodyContent = (
    <>
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

  return (
    <FormLayout
      className={styles["margin-b"]}
      header={<Heading title="Log in" />}
      loading={loading}
      body={bodyContent}
      onSubmit={handleSubmit(onSubmit)}
      actiotLabel="Log in"
    />
  );
};

export default SignIn;
