"use client";

import { Venda } from "@/@types";
import { getVendas } from "@/services/Vendas/getVendas";
import React, {
  useContext,
  ReactNode,
  createContext,
  useMemo,
  useEffect,
  useState,
  useCallback,
} from "react";

interface VendasProviderProps {
  children: ReactNode;
}

interface EntradaVendas {
  mes: string;
  total: number;
  [produto: string]: string | number;
}

interface VendasContextType {
  data: Venda[];
  dadoFormatado: EntradaVendas[];
  nomeProdutos: string[];
  melhorMes: EntradaVendas;
  quantidadeVendas: number;
  handleChangeFilter: (value: string) => void;
  mediaVendas: number;
  loading: boolean;
  error: string | null;
  filtroProduto: string;
  chartConfig: {
    [k: string]: {
      label: string;
      color: string;
    };
  };
}

const VendasContext = createContext<VendasContextType>({} as VendasContextType);

export const VendasProvider = ({ children }: VendasProviderProps) => {
  const [data, setData] = useState<Venda[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filtroProduto, setFiltroProduto] = useState("all");

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const vendas = await getVendas();
        setData(vendas);
      } catch (err) {
        setError("Erro ao buscar vendas.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const nomeProdutos = useMemo(
    () => data.map(({ produto }) => produto.toLowerCase()),
    [data]
  );

  const mesesVendas = useMemo(() => {
    const meses: string[] = [];
    const monthController: Record<string, string> = {};

    data.forEach((dado) => {
      dado.vendas.forEach(({ mes }) => {
        if (!monthController[mes]) {
          monthController[mes] = mes;
          meses.push(mes);
        }
      });
    });

    return meses;
  }, [data]);

  const dadoFormatado = useMemo(() => {
    return mesesVendas.map((mes) => {
      const entrada: EntradaVendas = { mes, total: 0 };

      data.forEach(({ vendas, produto }) => {
        const produtoKey = produto.toLowerCase();
        if (filtroProduto !== "all" && filtroProduto !== produtoKey) return;

        const vendaDoMes = vendas.find((venda) => venda.mes === mes);
        const quantidadeVendida = vendaDoMes?.quantidade ?? 0;

        entrada[produtoKey] = quantidadeVendida;
        entrada.total += quantidadeVendida;
      });

      return entrada;
    });
  }, [data, mesesVendas, filtroProduto]);

  const melhorMes = useMemo(() => {
    if (dadoFormatado.length === 0)
      return { mes: "Nenhum - sem vendas", total: 0 };

    return dadoFormatado.reduce((melhor, atual) =>
      atual.total > melhor.total ? atual : melhor
    );
  }, [dadoFormatado]);

  const quantidadeVendas = useMemo(() => {
    return dadoFormatado.reduce((acc, { total }) => acc + total, 0);
  }, [dadoFormatado]);

  const mediaVendas = useMemo(() => {
    return dadoFormatado.length
      ? Math.round(quantidadeVendas / dadoFormatado.length)
      : 0;
  }, [quantidadeVendas, dadoFormatado.length]);

  const handleChangeFilter = useCallback((value: string) => {
    setFiltroProduto(value);
  }, []);

  const chartConfig = useMemo(() => {
    const produtosFiltrados =
      filtroProduto === "all" ? nomeProdutos : [filtroProduto];

    return Object.fromEntries(
      produtosFiltrados.map((nomeProduto, index) => [
        nomeProduto,
        {
          label: nomeProduto.charAt(0).toUpperCase() + nomeProduto.slice(1),
          color: `var(--chart-${index + 1})`,
        },
      ])
    );
  }, [nomeProdutos, filtroProduto]);

  return (
    <VendasContext.Provider
      value={{
        data,
        dadoFormatado,
        nomeProdutos,
        melhorMes,
        quantidadeVendas,
        mediaVendas,
        loading,
        error,
        filtroProduto,
        handleChangeFilter,
        chartConfig,
      }}
    >
      {children}
    </VendasContext.Provider>
  );
};

export const useVendasContext = (): VendasContextType => {
  const context = useContext(VendasContext);
  if (!context) {
    throw new Error("useVendasContext must be used within a VendasProvider");
  }
  return context;
};
