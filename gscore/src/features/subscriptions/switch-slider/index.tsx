"use client";
import React from "react";
import styles from "./styles.module.sass";
import clsx from "clsx";
import Icon from "@/shared/ui/icon";
import ArrowRight from "@/shared/assets/icons/arrow-right.svg";
import ArrowLeft from "@/shared/assets/icons/arrow-left.svg";

interface Props {
  className?: string;
  value: number;
  onChange: (value: number) => void;
  length: number;
}

const SwitchSlider: React.FC<Props> = ({
  className,
  value,
  length,
  onChange,
}) => {
  return (
    <div className={clsx(className, styles.switchSlider)}>
      <button
        onClick={() => onChange(Math.max(value - 1, 0))}
        disabled={value === 0}
        className={styles.buttonIcon}
      >
        <Icon width={24} height={24} className={styles.icon}>
          <ArrowLeft />
        </Icon>
      </button>
      <span className={styles.currentValue}>
        {value + 1}
        <span className={styles.maxValue}>/{length}</span>
      </span>
      <button
        onClick={() => onChange(Math.min(value + 1, length - 1))}
        disabled={value === length - 1}
        className={styles.buttonIcon}
      >
        <Icon width={24} height={24} className={styles.icon}>
          <ArrowRight />
        </Icon>
      </button>
    </div>
  );
};

export default SwitchSlider;
