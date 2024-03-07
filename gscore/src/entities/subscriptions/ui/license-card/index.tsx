import React from "react";
import styles from "./styles.module.sass";
import Icon from "@/shared/ui/icon";
import Complete from "@/shared/assets/icons/check.svg";
import Button from "@/shared/ui/button";

interface Props {
  price: number;
  title: string;
  subtitle: string;
  features: string[];
  actionTitle: string;
  action: () => void;
}

const LicenceCard: React.FC<Props> = ({
  price,
  title,
  subtitle,
  features,
  actionTitle,
  action,
}) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.price}>${price}</h2>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
      <hr className={styles.split} />
      <ol className={styles.listFeatures}>
        {features.map((feature, index) => (
          <li key={index} className={styles.feature}>
            <Icon className={styles.iconFeature} width={26} height={26}>
              <Complete />
            </Icon>
            <span className={styles.titleFeature}>{feature}</span>
          </li>
        ))}
      </ol>
      <Button
        shadow={false}
        className={styles.button}
        variant="secondary"
        scale="biggest"
        onClick={action}
      >
        {actionTitle}
      </Button>
    </div>
  );
};

export default LicenceCard;
