"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award, TrendingUp } from "lucide-react";
import { useTopProducts } from "@/hooks/useTopProducts";
import { useCallback } from "react";

export default function TopProducts() {
  const { topProducts, totalGeral } = useTopProducts(3);

  const getPositionIcon = useCallback((index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="h-5 w-5 text-yellow-500" />;
      case 1:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 2:
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return null;
    }
  }, []);

  const getPositionColor = useCallback((index: number) => {
    switch (index) {
      case 0:
        return "bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-200 dark:border-yellow-800";
      case 1:
        return "bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900/20 dark:to-gray-800/20 border-gray-200 dark:border-gray-800";
      case 2:
        return "bg-gradient-to-r from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 border-amber-200 dark:border-amber-800";
      default:
        return "";
    }
  }, []);

  const getPositionLabel = (index: number) => `${index + 1}º Lugar`;

  if (topProducts.length === 0) return null;

  const totalTop = topProducts.reduce((sum, p) => sum + p.total, 0);
  const percentTop = totalGeral > 0 ? (totalTop / totalGeral) * 100 : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Top 3 Produtos Mais Vendidos
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {topProducts.map((product, index) => (
          <div
            key={product.name}
            className={`p-4 rounded-lg border-2 ${getPositionColor(index)}`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {getPositionIcon(index)}
                <span className="font-semibold text-lg capitalize">
                  {product.name}
                </span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {getPositionLabel(index)}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Total Vendido</p>
                <p className="text-2xl font-bold text-primary">
                  {product.total.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Participação</p>
                <p className="text-2xl font-bold text-primary">
                  {product.percentage.toFixed(1)}%
                </p>
              </div>
            </div>

            <div className="mt-3 pt-3 border-t border-current/10">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Média por período: {product.average.toFixed(0)}</span>
                <span>{product.count} registros</span>
              </div>
            </div>

            <div className="mt-2">
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${product.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}

        <div className="mt-6 pt-4 border-t">
          <div className="flex justify-between items-center text-sm">
            <span className="text-muted-foreground">Total dos Top 3:</span>
            <span className="font-semibold">{totalTop.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center text-sm mt-1">
            <span className="text-muted-foreground">Representam:</span>
            <span className="font-semibold text-primary">
              {percentTop.toFixed(1)}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
