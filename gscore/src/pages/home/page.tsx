"use client";
import styles from "./styles.module.sass";
import React from "react";
import LicenceCard from "@/entities/subscriptions/ui/license-card";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <section>
      <div className="container">
        <h1 className={styles.title}>Get started with Gscore today!</h1>

        <div className={styles.listLicenses}>
          <LicenceCard
            price={117}
            title="3 Site license"
            actionTitle="Get Gscore"
            action={() => {}}
            subtitle="Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price"
            features={[
              "All features for 3 sites",
              "Special introductory pricing",
              "Unlimited Pages and Keywords",
              "Billed annually",
            ]}
          />
          <LicenceCard
            price={117}
            title="3 Site license"
            actionTitle="Get Gscore"
            action={() => {
              router.push("/home/auth");
            }}
            subtitle="Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price"
            features={[
              "All features for 3 sites",
              "Special introductory pricing",
              "Unlimited Pages and Keywords",
              "Billed annually",
            ]}
          />
          <LicenceCard
            price={117}
            title="3 Site license"
            actionTitle="Get Gscore"
            action={() => {}}
            subtitle="Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price"
            features={[
              "All features for 3 sites",
              "Special introductory pricing",
              "Unlimited Pages and Keywords",
              "Billed annually",
            ]}
          />
        </div>
        <div className={styles.contact}>
          <span className={styles.contactQuestion}>
            Have more than 10 sites?
          </span>
          <Link className={styles.contactLink} href="#">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
