"use client";
import React, { FC } from "react";
import styles from "./styles.module.sass";
import clsx from "clsx";

type TabProps = {
  text: string;
  onClick?: () => void;
  index: number;
};

interface TabsProps {
  className?: string;
  activeTab?: number;
  children: React.ReactNode;
}

const TabsPagesContext = React.createContext({
  activeIndex: 0,
  setActiveIndex: (index: number) => {},
});

const TabsPages = ({ className, children, activeTab = 0 }: TabsProps) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(activeTab);

  return (
    <TabsPagesContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className={clsx(styles.tabs, className)}>{children}</div>
    </TabsPagesContext.Provider>
  );
};

const List = ({
  children,
  onChange,
}: {
  children: React.ReactNode;
  onChange: (index: number) => void;
}) => {
  const { activeIndex } = React.useContext(TabsPagesContext);
  React.useEffect(() => {
    onChange(activeIndex);
  }, [activeIndex]);
  return <ul className={styles.listTabs}>{children}</ul>;
};

const Item = ({ text, onClick, index }: TabProps) => {
  const { activeIndex, setActiveIndex } = React.useContext(TabsPagesContext);
  return (
    <li
      key={index}
      className={clsx(styles.tab, {
        [styles.activeTab]: index === activeIndex,
      })}
      onClick={() => {
        setActiveIndex(index);
        if (onClick) onClick();
      }}
    >
      {text}
    </li>
  );
};
TabsPages.List = List;
TabsPages.Item = Item;

export default TabsPages;
