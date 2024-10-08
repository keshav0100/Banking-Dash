"use client";
import qs from "query-string";
import { DateRange } from "react-day-picker";
import { ChevronDown } from "lucide-react";
import { format, set, subDays } from "date-fns";
import { useGetSummary } from "@/features/summary/api/use-get-summary";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn, formatDateRange } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { useState } from "react";
export const DateFilter = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const accountId = params.get("accountId");
  const from = params.get("from") || "";
  const to = params.get("to") || "";
  const defaultTo = new Date();
  const defaultfrom = subDays(defaultTo, 30);
  const paramState = {
    from: from ? new Date(from) : defaultfrom,
    to: to ? new Date(to) : defaultTo,
  };
  const [date, setDate] = useState<DateRange | undefined>(paramState);
  const pushToUrl = (dateRange: DateRange | undefined) => {
    const query = {
      from: format(dateRange?.from || defaultfrom, "yyyy-MM-dd"),
      to: format(dateRange?.to || defaultTo, "yyyy-MM-dd"),
      accountId,
    };
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query,
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );
    router.push(url);
  };
  const onReset = () => {
    setDate(undefined);
    pushToUrl(undefined);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          disabled={false}
          size="sm"
          variant="outline"
          className="w-full lg:w-auto justify-between font-semibold hover:bg-red/20 hover:text-black border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-[ ] focus:bg-white/30 transition"
        >
          <span>{formatDateRange(paramState)}</span>
          <ChevronDown className="ml-2 size-4 opacity-50"></ChevronDown>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="lg:w-auto w-full p-0" align="start">
        <Calendar
          disabled={false}
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
        />
        <div className="p-4 w-full items-center gap-x-2">
          <PopoverClose asChild>
            <Button
              onClick={onReset}
              disabled={!date?.from || !date?.to}
              className="w-full"
              variant="outline"
            >
              Reset
            </Button>
          </PopoverClose>
          <PopoverClose asChild>
            <Button
              onClick={() => pushToUrl(date)}
              disabled={!date?.from || !date?.to}
              className="w-full"
            >
              Apply
            </Button>
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  );
};
