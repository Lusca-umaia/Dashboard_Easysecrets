import { BiSolidBarChartAlt2 } from "react-icons/bi";
import ToggleTheme from "./ToggleTheme/ToggleTheme";

const Topbar = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BiSolidBarChartAlt2 className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Dashboard Analytics</h1>
        </div>
        <ToggleTheme />
      </div>
    </header>
  );
};

export default Topbar;
