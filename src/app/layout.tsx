import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { VendasProvider } from "@/context/VendasContext";
import FallbackWrapper from "@/components/FallbackWrapper/FallbackWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard Analytics",
  description:
    "Aplicativo interativo em React e TypeScript que transforma dados JSON em gráficos dinâmicos e informativos com foco em experiência do usuário.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased`}>
        <ThemeProvider>
          <VendasProvider>
            <FallbackWrapper>{children}</FallbackWrapper>
          </VendasProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
