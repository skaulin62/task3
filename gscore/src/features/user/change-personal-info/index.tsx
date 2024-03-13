import React from "react";
import styles from "./styles.module.sass";
import ProfileLayout from "@/shared/ui/profile-layout";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const ChangePersonalInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      username: "",
      email: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    alert("changed personal info");
  };

  const bodyContent = (
    <div className={styles.bodyContent}>
      <h2 className={styles.title}>Personal Info</h2>
      <Input
        errors={errors}
        id="username"
        register={register}
        placeHolder="Username"
      />
      <Input
        errors={errors}
        id="email"
        register={register}
        placeHolder="Email"
      />
    </div>
  );

  return (
    <ProfileLayout
      body={bodyContent}
      btnSubmit={
        <Button
          onClick={handleSubmit(onSubmit)}
          className={styles.btnAction}
          variant="primary"
        >
          Save
        </Button>
      }
    />
  );
};

export default ChangePersonalInfo;
