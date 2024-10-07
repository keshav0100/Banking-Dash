"use client";

import { useUser } from "@clerk/nextjs";
export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();
  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-2xl lg:text-4xl text-[#000000] font-medium  ">
        Welcome{isLoaded ? ": " : ""}
        <span className="text-[#4632a5]">
          {user?.firstName} {user?.lastName}
        </span>
      </h2>
      <p className="text-sm lg:text-base text-#34495e font-semibold">
        Your Financial Overview Report
      </p>
    </div>
  );
};
