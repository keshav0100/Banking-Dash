"use client";

import { useUser } from "@clerk/nextjs";
export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-2xl lg:text-4xl text-[#22303d] font-medium  ">
        Welcome{isLoaded ? ": " : ""}
        {user?.firstName} {user?.lastName}
      </h2>
      <p className="text-sm lg:text-base text-[#484f86]">
        Here is your Financial Overview Report
      </p>
    </div>
  );
};
