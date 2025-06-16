import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { useVendasContext } from "@/context/VendasContext";
import { useCallback } from "react";

interface ChartHeaderProps {
  title: string;
}

const ChartHeader: React.FC<ChartHeaderProps> = ({ title }) => {
  const { nomeProdutos, filtroProduto, handleChangeFilter } =
    useVendasContext();

  const formatLabel = useCallback((value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }, []);

  return (
    <CardHeader className="flex flex-col items-stretch border-b !p-0 sm:flex-row">
      <div className="flex flex-col gap-4 md:flex-row lg:items-center justify-between w-full p-6">
        <div className="flex flex-1 flex-col justify-center gap-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            Total de vendas e detalhes estão presentes no Tooltip
          </CardDescription>
        </div>
        <div className="md:w-72 space-y-2">
          <Label>Filtrar por produto</Label>
          <Select value={filtroProduto} onValueChange={handleChangeFilter}>
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              {nomeProdutos.map((nomeProduto) => (
                <SelectItem key={nomeProduto} value={nomeProduto}>
                  {formatLabel(nomeProduto)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </CardHeader>
  );
};

export default ChartHeader;
