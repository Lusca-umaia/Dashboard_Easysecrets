export interface Venda {
  mes: string;
  quantidade: number;
}

export interface Venda {
  produto: string;
  vendas: Venda[];
}
