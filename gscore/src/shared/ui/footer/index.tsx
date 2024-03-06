import React from "react";
import styles from "./styles.module.sass";
import Logo from "@/shared/ui/logo";
import Icon from "@/shared/ui/icon";
import Facebook from "@/shared/assets/icons/facebook.svg";
import Twitter from "@/shared/assets/icons/twitter.svg";
import LinkedIn from "@/shared/assets/icons/linkedin.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.description}>
          <Logo className={styles.logo} />
          <p className={styles.subtitle}>
            Ut enim ad minim veniam quis nostrud exercitation ea commodo
          </p>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            Copyright © 2022 GScore | All Rights Reserved |{" "}
            <Link className={styles.link} href="">
              Cookies
            </Link>{" "}
            |{" "}
            <Link className={styles.link} href="">
              Privacy Policy
            </Link>
          </p>
          <div className={styles.socialMedia}>
            <Icon className={styles.iconMedia} width={36} height={37}>
              <Facebook />
            </Icon>
            <Icon className={styles.iconMedia} width={36} height={37}>
              <Twitter />
            </Icon>
            <Icon className={styles.iconMedia} width={36} height={37}>
              <LinkedIn />
            </Icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
