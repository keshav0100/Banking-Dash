import {
  Cell,
  Legend,
  Pie,
  PieChart,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { formatPercentage } from "@/lib/utils";
import { Ultra } from "next/font/google";
import { CategoryTooltip } from "./category-tooltip";

const COLORS = ["#FF6633", "#FFB399", "#FF33FF", "#03f"];

type Props = {
  data?: {
    name: string;
    value: number;
  }[];
};

export const PieVariant = ({ data = [] }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Legend 
        layout="horizontal"
        verticalAlign="bottom"
        align="right"
        iconType="circle"
        
        />
        <Tooltip content={CategoryTooltip}/>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={1}
          fill="#8884d8"
          dataKey="value"
          labelLine={false}
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />

          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
