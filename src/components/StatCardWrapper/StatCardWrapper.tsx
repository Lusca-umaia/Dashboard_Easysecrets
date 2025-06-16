"use client";

import { useVendasContext } from "@/context/VendasContext";
import StatCard from "../StatCard/StatCard";

const StatCardWrapper = () => {
  const { melhorMes, quantidadeVendas, mediaVendas } = useVendasContext();

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
      <StatCard
        title="Total de vendas"
        value={quantidadeVendas}
        extraInformation={[
          { label: "Média de vendas p/mês", value: mediaVendas },
        ]}
      />
      <StatCard
        title="Melhor mês"
        value={melhorMes.mes}
        extraInformation={[
          { label: "Quantidade de vendas", value: melhorMes.total },
        ]}
      />
    </div>
  );
};

export default StatCardWrapper;
