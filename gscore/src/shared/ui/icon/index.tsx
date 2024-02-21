import React, { FC } from "react";
import styles from "./styles.module.sass";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  width: number;
  height: number;
  children: React.ReactNode | string;
  className?: string;
}

const Icon: FC<Props> = ({ width, height, children, className, ...props }) => {
  const style = {
    width: width,
    height: height,
  };
  return (
    <div {...props} style={style} className={clsx(styles.main, className)}>
      {children}
    </div>
  );
};

export default Icon;
