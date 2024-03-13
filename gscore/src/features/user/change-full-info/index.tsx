import React from "react";
import styles from "./styles.module.sass";
import ProfileLayout from "@/shared/ui/profile-layout";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const ChangeFullInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      currentPassword: "",
      newPassword: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    alert("changed password");
  };

  const bodyContent = (
    <div className={styles.bodyContent}>
      <div className={styles.column}>
        <h2 className={styles.title}>Personal Info</h2>
        <Input
          className={styles.input}
          errors={errors}
          id="username"
          register={register}
          placeHolder="Username"
        />
        <Input
          className={styles.input}
          errors={errors}
          id="email"
          register={register}
          placeHolder="Email"
        />
      </div>
      <div className={styles.column}>
        <h2 className={styles.title}>Change passwords</h2>
        <Input
          className={styles.input}
          errors={errors}
          id="currentPassword"
          register={register}
          placeHolder="Current Password"
        />
        <Input
          className={styles.input}
          errors={errors}
          id="newPassword"
          register={register}
          placeHolder="New Password"
        />
      </div>
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
          scale="biggest"
        >
          Save all changes
        </Button>
      }
    />
  );
};

export default ChangeFullInfo;
