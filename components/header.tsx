import { HeaderLogo } from "@/components/header-logo";
import { Navigation } from "@/components/navigation";
import { UserButton, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import { Children } from "react";
import { WelcomeMsg } from "@/components/welcome-msg";
import {Filters} from "@/components/filters";

export const Header = () => {
  return (
    <div className="bg-gradient-to-b from-[#26aab8] to blue-500 px-4 py-8 lg:px-14 pb-36">
      {/* // <div className="bg-gradient-to-b from-[#12a7c2] to-[#0d7d8e] px-4 py-8 lg:px-14 pb-36"> */}

      <div className="max-w-screen-2xl mx-auto ">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <UserButton afterSignOutUrl="/" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-9 animate-spin text-slate-200" />
          </ClerkLoading>
        </div>
        <WelcomeMsg />
        {/* <Filters /> */}
      </div>
    </div>
  );
};
