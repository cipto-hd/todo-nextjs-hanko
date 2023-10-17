"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Hanko } from "@teamhanko/hanko-elements";

const Account = () => {
  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements")
      .then(({ Hanko }) => {
        setHanko(new Hanko(process.env.NEXT_PUBLIC_HANKO_API_URL ?? ""));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    (async () => {
      const user = await hanko?.user.getCurrent();
      console.log(user);
    })();
  }, [hanko]);

  return (
    <div className="flex items-center justify-center p-4 gap-x-4">
      Hello <Button>Check ShadCN-UI</Button>
    </div>
  );
};
export default Account;
