"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { useVendasContext } from "@/context/VendasContext";
import ChartHeader from "../ChartHeader/ChartHeader";
import CustomTooltip from "../CustomTooltip/CustomTooltip";

const ChartArea = () => {
  const { dadoFormatado, chartConfig } = useVendasContext();

  return (
    <Card className="py-4 sm:py-0">
      <ChartHeader title="Gráfico de Área" />
      <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartConfig} className="w-full h-[250px]">
          <ResponsiveContainer>
            <AreaChart
              data={dadoFormatado}
              margin={{ top: 20, left: 12, right: 12 }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="mes"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickCount={3}
              />
              <ChartTooltip cursor={false} content={<CustomTooltip />} />
              <Area
                type="natural"
                dataKey={"total"}
                stroke={"var(--color-chart-1)"}
                fill={"var(--color-chart-1)"}
                fillOpacity={0.4}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ChartArea;
