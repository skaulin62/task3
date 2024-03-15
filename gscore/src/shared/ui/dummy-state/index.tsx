"use client";

import { useRouter } from "next/navigation";
import styles from "./styles.module.sass";
import Button from "@/shared/ui/button";
import Icon from "@/shared/ui/icon";
import clsx from "clsx";
import Close from "@/shared/assets/icons/close.svg";

interface Props {
  className?: string;
  title?: string;
  subTitle?: string;
  actionLabel?: string;
  link?: string;
  icon?: React.ReactNode;
}

const DummyState: React.FC<Props> = ({
  title = "No active subscriptions",
  subTitle = "You can subscribe right now by clicking on the button below",
  actionLabel,
  link,
  icon = <Close />,
  className,
}) => {
  const router = useRouter();

  return (
    <div className={clsx(className, styles.dummyState)}>
      <div className={styles.dummyIcon}>
        <Icon width={24} height={24}>
          {icon}
        </Icon>
      </div>
      <h1 className={styles.dummyTitle}>{title}</h1>
      <p className={styles.dummySubtitle}>{subTitle}</p>
      {actionLabel && (
        <Button
          className={styles.dummyBtn}
          scale="biggest"
          variant="primary"
          onClick={() => router.push(link || "/")}
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
};

export default DummyState;
