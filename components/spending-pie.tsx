import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

import { FileSearch, Loader2, PieChart, Radar, Target } from "lucide-react";
import { useState } from "react";
import { PieVariant } from "@/components/pie-variant";
import { Skeleton } from "./ui/skeleton";

type Props = {
  data?: {
    name: string;
    value: number;
  }[];
};

export const SpendingPie = ({ data = [] }: Props) => {
  const [chartType, setChartType] = useState("pie");
  const onTypeChange = (type: string) => {
    setChartType(type);
  };
  return (
    <Card className="border-none drop-shadow-lg">
      <CardHeader className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between">
        <CardTitle className="text-xl line-clamp-1">Categories</CardTitle>

        {/* <Select defaultValue={chartType} onValueChange={onTypeChange}>
          <SelectTrigger className="lg:w-auto h-9 rounded-mb px-3">
            <SelectValue placeholder="Chart Type" />
          </SelectTrigger> */}
          {/* <SelectContent> */}
            {/* <SelectItem value="pie">
              <div className="flex items-center">
                <PieChart className="size-4 mr-2 shrink-0" />
                <p className="line-clamp-1">Pie Chart</p>
              </div>
            </SelectItem> */}
          {/* </SelectContent> */}
        {/* </Select> */}
      </CardHeader>
      <CardContent>
        {data.length === 0 ? (
          <div className="flex flex-col gap-y-4 items-center justify-between h-[350px] w-full">
            <FileSearch className="size-6 text-muted-foreground " />
            <p className="text-muted-foreground text-sm">
              No data for this period!
            </p>
          </div>
        ) : (
          <>{chartType === "pie" && <PieVariant data={data} />}</>
        )}
      </CardContent>
    </Card>
  );
};

export const SpendingPieLoading = () => {
  return (
    <Card className="border-none drop-shadow-sm">
      <CardHeader className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-8 lg:w-[120px] w-full" />
      </CardHeader>
      <CardContent>
        <div className="h-[350px] w-full flex items-center justify-center">
          <Loader2 className="h-6 w-6 text-slate-400 animate-spin" />
        </div>
      </CardContent>
    </Card>
  );
};
