"use client";
import React from "react";
import styles from "./styles.module.sass";

import clsx from "clsx";

interface Props {
  className?: string;
  body: React.ReactElement;
  btnSubmit: React.ReactElement;
}

const ProfileLayout: React.FC<Props> = ({ className, body, btnSubmit }) => {
  return (
    <>
      <div className={clsx(className, styles.body)}>{body}</div>
      {btnSubmit}
    </>
  );
};

export default ProfileLayout;
