"use client";
import HeadingPage from "@/shared/ui/heading-page";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.sass";
import TabsPages from "@/shared/ui/tab-pages";
import ChangePersonalInfo from "@/features/user/change-personal-info";
import ChangePassword from "@/features/user/change-password";
import ChangeFullInfo from "@/features/user/change-full-info";
import { useRouter, useSearchParams } from "next/navigation";
import { ROUTES } from "@/shared/constants";
import qs from "query-string";

const ProfileSettings = () => {
  const [currentTab, setCurrentTab] = useState(-1);
  const router = useRouter();
  const params = useSearchParams();

  useEffect(() => {
    if (params?.get("fullInfo")) {
      let value = params?.get("fullInfo")?.toString();
      let url: any = {};

      if (value === "yes") setCurrentTab(-1);
      if (value === "no") setCurrentTab(0);
      if (value === "no" || value === "yes") {
      } else {
        setCurrentTab(-1);
        value = "yes";
      }

      url = qs.stringifyUrl({
        url: ROUTES.SETTINGS_PRO,
        query: { fullInfo: value },
      });
      router.push(url);
    }
  }, [params, router]);
  return (
    <section className="container">
      <div className={styles.profile}>
        <HeadingPage className={styles.heading} title="Settings" />
        {currentTab >= 0 && (
          <TabsPages activeTab={currentTab} className={styles.tabs}>
            <TabsPages.List
              onChange={(value) => {
                setCurrentTab(value);
              }}
            >
              <TabsPages.Item
                text="Personal info"
                onClick={() => {}}
                index={0}
              />
              <TabsPages.Item
                text="Change password"
                onClick={() => {}}
                index={1}
              />
            </TabsPages.List>
          </TabsPages>
        )}
        {currentTab === 0 && <ChangePersonalInfo />}
        {currentTab === 1 && <ChangePassword />}
        {currentTab < 0 && <ChangeFullInfo />}
      </div>
    </section>
  );
};

export default ProfileSettings;
