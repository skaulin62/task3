import React from "react";
import styles from "./styles.module.sass";
interface Props {
  title: string;
  subTitle?: string;
}

const Heading: React.FC<Props> = ({ title, subTitle }) => {
  return (
    <div className={styles.heading}>
      <h2 className={styles.title}>{title}</h2>
      {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
    </div>
  );
};

export default Heading;
