"use client";

import { useEffect, useState } from "react";

export const Profile = () => {
  const [openState, setOpenState] = useState(false);

  const openProfile = () => {
    setOpenState(!openState);
  };

  return (
    <>
      <button className="text-gray-50" type="button" onClick={openProfile}>
        Profile
      </button>
      {openState && (
        <div className=" absolute top-14 ">
          <section className=" w-[450px] h-auto rounded-2xl bg-white p-5">
            <hanko-profile />
          </section>
        </div>
      )}
    </>
  );
};
