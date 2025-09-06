import { LuSun, LuMoon } from "react-icons/lu";

import { useTheme } from "@/components/ThemeProvider";

export function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme("light" === theme ? "dark" : "light");
  };

  return (
    <div
      onClick={toggleTheme}
      className="cursor-pointer justify-center items-center p-3"
    >
      {theme === "light" ? (
        <LuSun className="text-foreground md:h-7 md:w-7 h-6 w-6" />
      ) : (
        <LuMoon className="text-foreground h-[2vw] w-[2vw]" />
      )}
    </div>
  );
}
