"use client";
import React from "react";
import LicenseCode from "@/entities/subscriptions/ui/license-code";
import styles from "./styles.module.sass";

const ListLicenseCode = () => {
  return (
    <div>
      <span className={styles.select}>Select the domains you want to keep</span>
      <div className={styles.listLicenseCode}>
        <LicenseCode code="dasda" domain="22" status="Active" />

        <LicenseCode
          code="ui.min.js?rev=898ef40397cd01e862d28445227805da:4435 
        GET https://mediasave.ru/api/Subscription/Get/?rnd=0.34296108752496046 net::ERR_CONNECTION_REFUSED"
          domain="22"
          status="Active"
        />

        <LicenseCode
          code="ui.min.js?rev=898ef40397cd01e862d28445227805da:4435 
        GET https://mediasave.ru/api/Subscription/Get/?rnd=0.34296108752496046 net::ERR_CONNECTION_REFUSED"
          domain="ui.min.js?rev=898ef40397cd01e862d28445227805da:4435 
          GET https://mediasave.ru/api/Subscription/Get/?rnd=0.342"
          status="Inactive"
        />

        <LicenseCode code="dasda" domain="22" status="Hold" />

        <LicenseCode
          code="dasda"
          domain="ui.min.js?rev=898ef40397cd01e862d28445227805da:4435 
          GET https://mediasave.ru/api/Subscript=898ef40397cd01e862d2844522780=898ef40397cd01e862d2844522780=898ef40397cd01e862d2844522780=898ef40397cd01e862d2844522780=898ef40397cd01e862d2844522780=898ef40397cd01e862d2844522780=898ef40397cd01e862d2844522780=898ef40397cd01e862d2844522780ion/Get/?rnd=0.342"
          actionLabel="Activate"
          action={() => {}}
          status="Active"
        />
      </div>
    </div>
  );
};

export default ListLicenseCode;
