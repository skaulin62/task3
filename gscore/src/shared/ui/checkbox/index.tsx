import React, { ChangeEvent, FC, InputHTMLAttributes } from "react";
import styles from "./styles.module.sass";
import Check from "@/shared/assets/icons/check.svg";
import Icon from "@/shared/ui/icon";
import clsx from "clsx";
interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  checked: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: FC<Props> = ({
  className,
  checked,
  onChange,
  ...inputProps
}) => {
  return (
    <label className={clsx(className, styles.checkBlock)}>
      <input
        onChange={() => onChange}
        {...inputProps}
        checked={checked}
        type="checkbox"
      />
      <span className={styles.checkmark}></span>
      {checked && (
        <Icon width={16} height={16} className={styles.checkIcon}>
          <Check />
        </Icon>
      )}
    </label>
  );
};

export default CheckBox;
