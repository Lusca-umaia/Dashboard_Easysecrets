"use client";

import * as React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { useVendasContext } from "@/context/VendasContext";
import ChartHeader from "../ChartHeader/ChartHeader";
import CustomTooltip from "../CustomTooltip/CustomTooltip";

const ChartLine = () => {
  const { dadoFormatado, chartConfig } = useVendasContext();

  return (
    <Card className="py-4 sm:py-0">
      <ChartHeader title="Gráfico linear" />
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <ResponsiveContainer height={250}>
            <LineChart
              accessibilityLayer
              data={dadoFormatado}
              margin={{
                top: 20,
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="mes"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<CustomTooltip />} />
              <Line
                dataKey="total"
                type="natural"
                stroke="var(--color-chart-1)"
                strokeWidth={2}
                dot={{
                  fill: "var(--color-chart-1)",
                }}
                activeDot={{
                  r: 6,
                }}
              >
                <LabelList
                  position="top"
                  offset={12}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Line>
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ChartLine;
