import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaChartBar } from "react-icons/fa";
import { LuActivity, LuTrendingUp, LuRadar } from "react-icons/lu";

import {
  ChartArea,
  ChartBar,
  ChartLine,
  ChartRadar,
} from "@/components/Charts";
import { useMemo } from "react";

const ChartsGuide = () => {
  const chartInformation = useMemo(
    () => [
      {
        label: "Linha",
        icon: LuActivity,
        value: "line",
        component: ChartLine,
      },
      {
        label: "Barras",
        icon: FaChartBar,
        value: "bar",
        component: ChartBar,
      },
      {
        label: "Área",
        icon: LuTrendingUp,
        value: "area",
        component: ChartArea,
      },
      {
        label: "Radar",
        icon: LuRadar,
        value: "radar",
        component: ChartRadar,
      },
    ],
    []
  );

  return (
    <Tabs defaultValue="line" className="space-y-4">
      <TabsList className="grid w-full grid-cols-4">
        {chartInformation.map(({ icon: Icon, label, value }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="flex items-center gap-2"
          >
            <Icon className="h-4 w-4" />
            {label}
          </TabsTrigger>
        ))}
      </TabsList>
      {chartInformation.map(({ value, component: Chart }) => (
        <TabsContent key={value} value={value}>
          <Chart />
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ChartsGuide;
