import type { TooltipProps } from "recharts";
import { ValueType } from "recharts/types/component/DefaultTooltipContent";

const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<ValueType, string>) => {
  if (!active || !payload || !payload.length) return null;

  const dados = payload[0].payload;

  const processData = Object.entries(dados).filter(
    ([key]) => key !== "mes"
  ) as [string, string][];

  return (
    <div className="rounded-md border bg-background p-2 shadow-sm">
      <div className="text-sm font-medium">{label}</div>
      <div className="mt-1 space-y-1 text-sm text-muted-foreground">
        {processData.map(([produto, quantidade]) => (
          <div key={produto} className="flex justify-between gap-4">
            <span className="capitalize">{produto}</span>
            <span>{quantidade}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomTooltip;
