"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer, ChartTooltip } from "@/components/ui/chart";
import { useVendasContext } from "@/context/VendasContext";
import ChartHeader from "../ChartHeader/ChartHeader";
import CustomTooltip from "../CustomTooltip/CustomTooltip";

const ChartRadar = () => {
  const { dadoFormatado, chartConfig } = useVendasContext();

  return (
    <Card className="py-4 sm:py-0">
      <ChartHeader title="Gráfico Radar" />
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="w-full h-[250px] [&_.recharts-polar-angle-axis-tick-value]:fill-foreground"
        >
          <ResponsiveContainer>
            <RadarChart
              data={dadoFormatado}
              margin={{ top: 20, left: 12, right: 12 }}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="mes" />
              <ChartTooltip cursor={false} content={<CustomTooltip />} />
              {Object.keys(chartConfig).map((chave) => (
                <Radar
                  key={chave}
                  dataKey={chave}
                  stroke={chartConfig[chave].color}
                  fill={chartConfig[chave].color}
                  fillOpacity={0.4}
                />
              ))}
            </RadarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default ChartRadar;
