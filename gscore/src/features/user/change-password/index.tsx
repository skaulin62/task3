import React from "react";
import styles from "./styles.module.sass";
import ProfileLayout from "@/shared/ui/profile-layout";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const ChangePassword = () => {
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
    alert("changed personal info");
  };

  const bodyContent = (
    <div className={styles.bodyContent}>
      <h2 className={styles.title}>Change password</h2>
      <Input
        errors={errors}
        id="currentPassword"
        register={register}
        placeHolder="Current Password"
      />
      <Input
        errors={errors}
        id="newPassword"
        register={register}
        placeHolder="New Password"
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

export default ChangePassword;
