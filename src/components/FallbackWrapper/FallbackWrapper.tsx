"use client";

import { useVendasContext } from "@/context/VendasContext";
import Loading from "../Loading/Loading";

const FallbackWrapper = ({ children }: { children: React.ReactNode }) => {
  const { loading, error } = useVendasContext();

  if (loading) {
    return (
      <div className="h-screen flex items-center m-auto">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div className="p-4">Erro inesperado: {error}</div>;
  }

  return <>{children}</>;
};

export default FallbackWrapper;
