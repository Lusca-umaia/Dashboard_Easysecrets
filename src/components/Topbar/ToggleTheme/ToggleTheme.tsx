"use client";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { LuSun, LuMoon } from "react-icons/lu";

const ToggleTheme = () => {
  const { setTheme } = useTheme();

  const handleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, [setTheme]);

  return (
    <Button variant="outline" size="icon" onClick={handleTheme}>
      <LuSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <LuMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </Button>
  );
};

export default ToggleTheme;
