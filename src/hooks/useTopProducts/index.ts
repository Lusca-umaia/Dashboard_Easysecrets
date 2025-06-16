import { useVendasContext } from "@/context/VendasContext";

export interface TopProduct {
  name: string;
  total: number;
  count: number;
  percentage: number;
  average: number;
}

export function useTopProducts(limit = 3): {
  topProducts: TopProduct[];
  totalGeral: number;
} {
  const { dadoCompleto, nomeProdutos } = useVendasContext();

  if (!dadoCompleto.length || !nomeProdutos.length) {
    return { topProducts: [], totalGeral: 0 };
  }

  const productTotals = nomeProdutos.reduce((acc, produto) => {
    let total = 0;
    let count = 0;

    dadoCompleto.forEach((entrada) => {
      const quantidade = Number(entrada[produto]) || 0;
      if (quantidade > 0) {
        total += quantidade;
        count++;
      }
    });

    acc[produto] = { name: produto, total, count };
    return acc;
  }, {} as Record<string, { name: string; total: number; count: number }>);

  const totalGeral = Object.values(productTotals).reduce(
    (sum, p) => sum + p.total,
    0
  );

  const topProducts = Object.values(productTotals)
    .sort((a, b) => b.total - a.total)
    .slice(0, limit)
    .map((product) => ({
      ...product,
      percentage: totalGeral > 0 ? (product.total / totalGeral) * 100 : 0,
      average: product.count ? product.total / product.count : 0,
    }));

  return { topProducts, totalGeral };
}
