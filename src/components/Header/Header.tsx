const Header = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">
          Dashboard de Dados
        </h2>
        <p className="text-muted-foreground">Visualizando registros</p>
      </div>
    </div>
  );
};

export default Header;
