import { useTheme } from "@/components/ThemeProvider.tsx";
import { CardGrid } from "../index.ts";
import { gameData } from "../index.ts";

function Games() {
  const { theme } = useTheme();

  return (
    <div
      className="overflow-y-auto max-h-screen text-foreground"
      style={{
        backgroundImage:
          theme === "light"
            ? "radial-gradient(125% 125% at 50% 0%, transparent 50%, grey)"
            : "radial-gradient(125% 125% at 50% 0%, #333333, black)",
        scrollbarWidth: "none",
      }}
      id="container"
    >
      <div className="mt-18">
        <CardGrid data={gameData} />
      </div>
    </div>
  );
}

export default Games;
