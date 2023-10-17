"use client";

import { useEffect, useState } from "react";

import { useHanko } from "@/components/HankoProvider";
import { Button } from "@/components/ui/button";

const Account = () => {
  const hanko = useHanko();

  useEffect(() => {
    (async () => {
      if (hanko) {
        const user = await hanko?.user.getCurrent();
        console.log(user);
      }
    })();
  }, [hanko]);

  return (
    <div className="flex items-center justify-center p-4 gap-x-4">
      Hello <Button>Check ShadCN-UI</Button>
    </div>
  );
};
export default Account;
