import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "vendas.json");
  const fileContent = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(fileContent);

  return NextResponse.json(data);
}
