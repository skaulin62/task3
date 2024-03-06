import styles from "./styles.module.sass";
import clsx from "clsx";
import React, { ButtonHTMLAttributes, FC } from "react";
import Loading from "@/shared/assets/icons/loader.svg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: string;
  className?: string;
  loading?: boolean;
  scale?: "smallest" | "biggest";
  shadow?: boolean;
}

const Button: FC<Props> = ({
  children,
  variant,
  className,
  loading,
  scale = "smallest",
  shadow = true,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        styles.button,
        { [styles.shadow]: shadow },
        className,
        {
          primary: styles.primary,
          secondary: styles.secondary,
          text: styles.text,
        }[variant],
        {
          smallest: styles.smallest,
          biggest: styles.biggest,
        }[scale],
        { [styles.locked]: loading }
      )}
    >
      <div className={clsx({ [styles.hideText]: loading })}>{children}</div>
      {loading && (
        <div className={styles.loading}>
          <Loading width={24} height={24} />
        </div>
      )}
    </button>
  );
};

export default Button;
