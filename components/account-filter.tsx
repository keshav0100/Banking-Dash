"use client";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";
import qs from "query-string";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useGetSummary } from "@/features/summary/api/use-get-summary";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { on } from "events";
import { Rotate3D } from "lucide-react";
export const AccountFilters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const accountId = params.get("accountId") || "all";
  const from = params.get("from") || "";
  const to = params.get("to") || "";
  const { isLoading: isLoadingSummary } = useGetSummary();
  const { data: accounts, isLoading: isLoadingaccounts } = useGetAccounts();
  const onChange = (newValue: string) => {
    const query = {
      accountId: newValue,
      from,
      to,
    };
    if (newValue === "all") {
      query.accountId = "";
    }
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query,
      },
      {
        skipNull: true,
        skipEmptyString: true,
      }
    );
    router.push(url);
  };
  return (
    <Select
      value={accountId}
      onValueChange={onChange}
      disabled={isLoadingaccounts || isLoadingSummary}
    >
      <SelectTrigger className="w-full lg:w-auto justify-between font-semibold hover:bg-red/20 hover:text-black border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-[ ] focus:bg-white/30 transition">
        <SelectValue placeholder="Select Account " />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All accounts</SelectItem>
        {accounts?.map((account) => (
          <SelectItem key={account.id} value={account.id}>
            {account.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
