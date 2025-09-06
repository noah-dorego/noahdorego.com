import { useTheme } from "@/components/ThemeProvider.tsx";
import { CardGrid } from "../index.ts";
import { projectsData } from "../index.ts";

function Projects() {
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
      <div className="mt-18"><CardGrid data={projectsData} /></div>
    </div>
  );
}

export default Projects;
