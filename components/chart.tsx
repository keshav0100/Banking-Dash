import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { FileSearch } from "lucide-react";
import { AreaVariant } from "@/components/area-variant";
import { BarVariant } from "@/components/bar-variant";

type Props = {
  data?: {
    date: string;
    income: number;
    expenses: number;
  }[];
};

export const Chart = ({ data = [] }: Props) => {
  return (
    <Card className="border-none drop-shadow-lg">
      <CardHeader className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between">
        <CardTitle className="text-xl line-clamp-1">Transactions</CardTitle>
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
          // <AreaVariant data={data} />
          <BarVariant data={data}/>
        )}
      </CardContent>
    </Card>
  );
};
