import { Venda } from "@/@types";
import axios from "axios";

export async function getVendas(): Promise<Venda[]> {
  const response = await axios.get<Venda[]>("/api/vendas");
  return response.data;
}
