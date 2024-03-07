"use client";
import Input from "@/shared/ui/input";
import styles from "./styles.module.sass";

import Button from "@/shared/ui/button";
import CheckBox from "@/shared/ui/checkbox";
import React from "react";
import StatusText from "@/shared/ui/status-text";
import Logo from "@/shared/ui/logo";
import Accordion from "@/shared/ui/accordion";
import TabsPages from "@/shared/ui/tab-pages";

import TabProgress from "@/shared/ui/tab-progress";
import GSLink from "@/shared/ui/link";

export default function Home() {
  const [isChecked, setIsChecked] = React.useState(true);
  const [selectedTab, setSelectedTab] = React.useState<number>(0);

  const handleChange = (index: number) => {
    setSelectedTab(index);
  };
  return (
    <main className="container">
      <Button variant="primary">Default</Button>
      <Button loading variant="primary">
        Default
      </Button>
      <Button disabled variant="primary">
        Default
      </Button>
      <Button variant="secondary">Default</Button>
      <Button loading variant="secondary">
        Default
      </Button>
      <Button disabled variant="secondary">
        Default
      </Button>
      <Button shadow={false} variant="text">
        Default
      </Button>
      <Button disabled shadow={false} loading variant="text">
        Default
      </Button>
      <Button shadow={false} disabled variant="text">
        Default
      </Button>

      <Input inputProps={{ placeholder: "Placeholder" }} />
      <Input inputProps={{ disabled: true, placeholder: "Placeholder" }} />
      <Input isSuccess={true} inputProps={{ placeholder: "Placeholder" }} />
      <Input isError={true} inputProps={{ placeholder: "Placeholder" }} />

      <CheckBox checked={isChecked} onClick={() => setIsChecked(!isChecked)} />
      <CheckBox checked />
      <CheckBox checked={false} />
      <CheckBox disabled checked={true} />
      <CheckBox disabled checked={false} />

      <StatusText status="Active" />
      <StatusText status="Hold" />
      <StatusText status="Inactive" />

      <Logo />

      <Accordion title="Lorem ipsum dolor sit amet consectur">
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis
          pretium risus euismod dictum egestas orci netus feugiat ut egestas ut
          sagittis tincidunt phasellus elit etiam cursus orci in. Id sed montes.
        </span>
      </Accordion>

      {/* <TabsPages
        tabs={[
          { text: "Profile", onClick: () => {} },
          { text: "Subscriptions", onClick: () => {} },
          { text: "ChangePassword", onClick: () => {} },
        ]}
      /> */}
      <TabsPages activeTab={selectedTab}>
        <TabsPages.List onChange={handleChange}>
          <TabsPages.Item text="Profile" index={0} />
          <TabsPages.Item text="Subscriptions" index={1} />
          <TabsPages.Item
            text="ChangePassword"
            index={2}
            onClick={() => console.log(2)}
          />
        </TabsPages.List>
      </TabsPages>

      <div style={{ width: "620px" }}>
        <TabProgress
          step={1}
          tabs={[
            { title: "Create account" },
            { title: "Log in" },
            {
              title: "Checkout",
              onClick: () => {
                alert(2);
              },
            },
          ]}
        />
      </div>
      <GSLink href="/312312">My subscriptions</GSLink>
      <GSLink variant="secondary" href="/312312">
        My subscriptions
      </GSLink>
    </main>
  );
}
