"use client";
import React, { useState } from "react";
import styles from "./styles.module.sass";

import SubscriptionCard from "@/entities/subscriptions/ui/subscription-card";
import SwitchSlider from "@/features/subscriptions/switch-slider";

const SliderSubscription = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = 8;

  const getOffsetSlide = (index: number, activeIndex: number) => {
    if (index < activeIndex) {
      return -1 * (activeIndex - index) * 100;
    }
    if (index > activeIndex) {
      return (index - activeIndex) * 100;
    }
    if (index === activeIndex) {
      return 0;
    }
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        {Array.from({ length: 8 }).map((_, index) => {
          return (
            <div
              style={{
                left: `calc(${getOffsetSlide(index, activeIndex)}%)`,
              }}
              className={styles.slideWrapper}
            >
              <SubscriptionCard
                key={index}
                className={styles.slide}
                type="default"
                action={() => {}}
                actionLabel="View"
                disabled={index !== activeIndex}
              />
              <div className={styles.split}></div>
            </div>
          );
        })}
      </div>
      <SwitchSlider
        className={styles.switchSlider}
        length={maxIndex}
        value={activeIndex}
        onChange={(value) => setActiveIndex(value)}
      />
    </div>
  );
};

export default SliderSubscription;
