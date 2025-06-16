"use client";

import {
  Bar,
  BarChart,
  YAxis,
  XAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { useVendasContext } from "@/context/VendasContext";
import ChartHeader from "../ChartHeader/ChartHeader";
import CustomTooltip from "../CustomTooltip/CustomTooltip";

const ChartBar = () => {
  const { dadoFormatado, chartConfig } = useVendasContext();

  return (
    <Card className="py-4 sm:py-0">
      <ChartHeader title="Gráfico de Barras Horizontal" />
      <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartConfig} className="w-full h-[250px]">
          <ResponsiveContainer>
            <BarChart
              data={dadoFormatado}
              layout="vertical"
              margin={{ top: 20, left: 12, right: 12 }}
            >
              <CartesianGrid horizontal={false} />
              <YAxis
                dataKey="mes"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) =>
                  chartConfig[value as keyof typeof chartConfig]?.label ?? value
                }
              />
              <XAxis type="number" />
              <ChartTooltip cursor={false} content={<CustomTooltip />} />
              <Bar
                dataKey="total"
                fill="var(--color-chart-1)"
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ChartBar;
