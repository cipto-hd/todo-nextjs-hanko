"use client";

import { useEffect, useState } from "react";

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

  return <div>Hello </div>;
};
export default Account;
