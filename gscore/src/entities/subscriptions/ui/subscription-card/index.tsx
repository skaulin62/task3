import React from "react";
import styles from "./styles.module.sass";
import clsx from "clsx";
import StatusText from "@/shared/ui/status-text";
import { Status } from "@/shared/types/types";
import Button from "@/shared/ui/button";
import Icon from "@/shared/ui/icon";
import Trash from "@/shared/assets/icons/trash.svg";

type Type = "default" | "template";

interface Props {
  className?: string;
  data?: { name: string; active: Status; price: number; date: string };
  action?: () => void;
  actionLabel?: string;
  onRemove?: () => void;
  type: Type;
  disabled?: boolean;
}

const SubscriptionCard: React.FC<Props> = ({
  className,
  data,
  actionLabel,
  action,
  disabled,
  onRemove,
  type,
}) => {
  return (
    <div
      className={clsx(
        className,
        styles.card,
        type &&
          { default: styles.defaultCard, template: styles.templateCard }[type],
        { [styles.disabled]: disabled }
      )}
    >
      <div className={styles.header}>
        {type === "default" ? (
          <>
            <span className={styles.titleOne}>Gscore</span>

            <StatusText
              className={styles.rightTitle}
              status={data?.active || "Active"}
            />
          </>
        ) : (
          <>
            <span className={styles.titleTwo}>Package Name</span>
            <span className={clsx(styles.titleTwo, styles.rightTitle)}>
              Price
            </span>
          </>
        )}
      </div>

      <div className={styles.body}>
        <div className={styles.wrapperBody}>
          <div className={styles.info}>
            <span className={styles.nameInfo}>Single site license</span>
            {type === "default" && (
              <span className={styles.dateInfo}>valid until 21.10.2022</span>
            )}
          </div>
          <div className={styles.infoPrice}>
            <span className={styles.price}>$77</span>
            {onRemove && (
              <Icon
                className={styles.iconTrash}
                onClick={onRemove}
                aria-disabled={disabled}
                width={20}
                height={21}
              >
                <Trash />
              </Icon>
            )}
          </div>
        </div>
        {action && (
          <Button
            disabled
            className={styles.actionBtn}
            variant="secondary"
            onClick={onRemove}
          >
            {actionLabel}
          </Button>
        )}
      </div>
    </div>
  );
};

export default SubscriptionCard;
