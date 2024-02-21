import React, { FC } from "react";
import styles from "./styles.module.sass";
import clsx from "clsx";

type Tab = {
  title: string;
  onClick?: () => void;
};

interface Props {
  className?: string;
  tabs: Tab[];
  step: number;
}

const TabProgress: FC<Props> = ({ className, tabs, step = 0 }) => {
  return (
    <div dir="rtl" className={clsx(styles.tabs, className)}>
      {tabs
        .map((tab: Tab, index: number) => (
          <div
            className={clsx(styles.tab, {
              [styles.tillTabCurrent]: index === step,
            })}
            key={index}
            onClick={() => {
              if (tab?.onClick) tab.onClick();
            }}
          >
            <span className={styles.title}>{tab.title}</span>
            <div className={styles.progress}></div>
          </div>
        ))
        .reverse()}
    </div>
  );
};

export default TabProgress;
