"use client";
import React, { FC } from "react";
import styles from "./styles.module.sass";
import clsx from "clsx";
import Success from "@/shared/assets/icons/check.svg";
import Error from "@/shared/assets/icons/close.svg";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { useFirstRender } from "@/shared/hooks/use-first-render";

interface Props {
  className?: string;
  id: string;
  errors: FieldErrors;
  disabled?: boolean;
  type?: string;
  placeHolder: string;
  required?: string;
  dirtyFields?: any;
  register: UseFormRegister<FieldValues>;
}

const Input: FC<Props> = ({
  className,
  id,
  type,
  register,
  required = "Field is required!",
  disabled,
  placeHolder,
  errors,
}) => {
  const isFirstRender = useFirstRender();
  const isSuccess = !isFirstRender && !errors[id];

  return (
    <div className={styles.field}>
      <div
        className={clsx(
          className,
          styles.inputBlock,
          { [styles.success]: isSuccess },
          { [styles.error]: errors[id] },
          { [styles.disabledBlock]: disabled }
        )}
      >
        <input
          id={id}
          type={type}
          disabled={disabled}
          placeholder={placeHolder}
          className={clsx(styles.input)}
          {...register(id, { required: "Field is required!" })}
        />
        <div className={styles.icon}>
          {errors[id] && (
            <Error width={24} height={24} className={styles.errorIcon} />
          )}

          {isSuccess && (
            <Success width={24} height={24} className={styles.successIcon} />
          )}
        </div>
      </div>
      <span
        className={clsx(styles.errorMessage, {
          [styles.hideErrorMessage]: errors[id],
        })}
      >
        {errors[id]?.message?.toString()}
      </span>
    </div>
  );
};

export default Input;
