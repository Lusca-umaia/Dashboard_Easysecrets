# Desafio técnico - Easysecrets

Este repositório contém um painel de visualização de dados de vendas, desenvolvido para o desafio técnico da Easysecrets. O projeto é um **dashboard moderno**, construído com **Next.js**, **React 19**, **Tailwind CSS**, **Recharts** e **ShadCN UI**, que exibe múltiplos gráficos interativos e estatísticas detalhadas, com suporte a tema claro/escuro e filtro dinâmico.

---

## Tecnologias Principais

- **Next.js 15** – Framework moderno para React, com suporte a rotas App Router, SSR e Server Actions.
- **React 19** – Biblioteca de construção de interfaces declarativas e performáticas.
- **Tailwind CSS 4** – Framework utilitário de estilização moderna e responsiva.
- **Recharts** – Biblioteca de gráficos reativos com suporte SVG altamente customizável.
- **ShadCN UI** – Coleção de componentes acessíveis, baseados em Radix UI + Tailwind, com integração ao tema e design consistente.
- **Axios** – Cliente HTTP para requisições (utilizado na simulação da API de vendas).
- **TypeScript** – Superset do JavaScript com tipagem estática, utilizado em todo o projeto.

---

## Estrutura de Pastas

```bash
chart-dashboard
├── public/
│   └── vendas.json                      # Fonte de dados estática
├── src/
│   ├── @types/                          # Tipagens globais
│   ├── app/                             # App Router e arquivos globais
│   │   ├── api/vendas/route.ts         # Endpoint para retorno das vendas
│   │   ├── layout.tsx                  # Layout base com providers
│   │   ├── page.tsx                    # Página principal do dashboard
│   │   ├── themeProvider.tsx           # Configuração de temas
│   │   └── globals.css                 # Tailwind e animações
│   ├── components/                     # Componentes reutilizáveis
│   │   ├── Charts/                     # Gráficos individuais
│   │   ├── TopProducts/                # Ranking dos 3 produtos
│   │   ├── StatCard/                   # Cartões de estatísticas
│   │   ├── Topbar/                     # Barra superior com tema
│   │   ├── ui/                         # Componentes ShadCN personalizados
│   ├── context/
│   │   └── VendasContext/              # Lógica central de vendas, filtros e estatísticas
│   ├── hooks/
│   │   └── useTopProducts/             # Hook para calcular top 3 produtos
│   ├── lib/
│   │   └── utils.ts                    # Funções auxiliares
│   └── services/
│       └── Vendas/getVendas.ts        # Simulação de chamada à API
```

---

## Funcionalidades

- Gráficos interativos (linha, barra, radar, área)
- Cálculo de estatísticas como:
  - Total de vendas
  - Média de vendas por mês
  - Melhor mês em desempenho
- Ranking dos 3 produtos mais vendidos
- Alternância entre tema claro e escuro com persistência
- Filtro por produto com atualização instantânea
- Componentização modular e tipada

---

## Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Lusca-umaia/Dashboard_Easysecrets.git
cd Dashboard_Easysecrets
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## Decisões Técnicas

### Context API para controle global de vendas

A escolha do `VendasContext` visa evitar prop-drilling, mantendo todos os dados processados acessíveis para qualquer componente, com lógica de formatação encapsulada.

### `dadoFormatado` e `dadoCompleto`

Foram criados dois formatos:

- `dadoFormatado`: aplica o filtro selecionado (exibido nos gráficos)
- `dadoCompleto`: não aplica filtro (usado no Top 3 e cálculos gerais)

Isso garante que rankings e totais sejam precisos, independentemente do filtro.

### Separação clara de responsabilidades

- Gráficos individualizados por tipo
- Componentes de UI separados (ShadCN)
- Hooks para lógica específica (ex: `useTopProducts`)
- Serviços separados para simulação da API

### Tema via `next-themes`

A alternância de temas é gerenciada pelo `ThemeProvider`, e os componentes reagem automaticamente ao modo claro/escuro.

---

## Diferenciais implementados

- Arquitetura modular, escalável e com tipagem forte
- Suporte completo a tema dark/light com persistência
- Processamento eficiente com `useMemo` e `useCallback`
- Gráficos com tooltips customizados e layout adaptável
- Hook exclusivo para cálculo do Top 3 produtos
- UI responsiva com componentes ShadCN

---
