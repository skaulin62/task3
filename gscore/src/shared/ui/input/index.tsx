import React, { FC, InputHTMLAttributes, PropsWithRef } from "react";
import styles from "./styles.module.sass";
import clsx from "clsx";
import Success from "@/shared/assets/icons/check.svg";
import Error from "@/shared/assets/icons/close.svg";

interface Props {
  className?: string;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
}

const Input: FC<Props> = ({
  className,
  isSuccess = false,
  errorMessage = "Error text",
  isError = false,
  inputProps,
}) => {
  return (
    <div className={styles.field}>
      <div
        className={clsx(
          className,
          styles.inputBlock,
          { [styles.success]: isSuccess },
          { [styles.error]: isError },
          { [styles.disabledBlock]: inputProps?.disabled }
        )}
      >
        <input
          {...inputProps}
          className={clsx(styles.input, inputProps?.className)}
        />
        <div className={styles.icon}>
          {isError && (
            <Error width={24} height={24} className={styles.errorIcon} />
          )}

          {isSuccess && (
            <Success width={24} height={24} className={styles.successIcon} />
          )}
        </div>
      </div>
      <span
        className={clsx(styles.errorMessage, {
          [styles.hideErrorMessage]: isError,
        })}
      >
        {errorMessage}
      </span>
    </div>
  );
};

export default Input;
