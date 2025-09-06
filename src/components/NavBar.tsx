import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  BookOpenIcon,
  WrenchIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { LuGamepad2 } from "react-icons/lu";
import { DarkModeToggle } from "./DarkModeToggle";
import { useTheme } from "./ThemeProvider";

function NavList() {
  return (
    <div className="flex items-start gap-2 sm:gap-5 max-w-full overflow-x-auto p-3">
      <motion.a
        href="/"
        className="text-sm md:text-md font-semibold flex items-center gap-2 text-foreground"
        whileHover={{
          y: -2,
          transition: { duration: 0.1 },
        }}
      >
        <HomeIcon className="h-[14x] sm:h-[18px] w-[14px] sm:w-[18px]" />
        Home
      </motion.a>
      <div className="h-6 rounded-full border-r-[1px] border-current"></div>
      <motion.a
        href="projects"
        className="text-sm md:text-md font-semibold flex items-center gap-2 text-foreground"
        whileHover={{
          y: -2,
          transition: { duration: 0.1 },
        }}
      >
        <WrenchIcon className="h-[14x] sm:h-[18px] w-[14px] sm:w-[18px]" />
        Projects
      </motion.a>
      <div className="h-6 rounded-full border-r-[1px] border-current"></div>
      <motion.a
        href="games"
        className="text-sm md:text-md font-semibold flex items-center gap-2 text-foreground"
        whileHover={{
          y: -2,
          transition: { duration: 0.1 },
        }}
      >
        <LuGamepad2 className="h-[14x] sm:h-[18px] w-[14px] sm:w-[18px]" />
        Games
      </motion.a>
      <div className="h-6 rounded-full border-r-[1px] border-current"></div>
      <motion.a
        href="blog"
        className="text-sm md:text-md font-semibold flex items-center gap-2 text-foreground"
        whileHover={{
          y: -2,
          transition: { duration: 0.1 },
        }}
      >
        <BookOpenIcon className="h-[14x] sm:h-[18px] w-[14px] sm:w-[18px]" />
        Blog
      </motion.a>
    </div>
  );
}

export default function MainNavBar() {
  const [openNav, setOpenNav] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 720 && setOpenNav(false)
    );
  }, []);

  const backgroundClasses = theme === "dark" ? "bg-[#313131]" : "bg-white";

  return (
    <div
      className={`fixed top-0 z-50 flex items-center justify-between w-screen text-foreground backdrop-blur-sm ${backgroundClasses} shadow-md`}
    >
      <div className="hidden md:block">
        <NavList />
      </div>
      <div
        className="md:hidden text-foreground cursor-pointer p-2"
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <XMarkIcon className="h-6 w-6" strokeWidth={2} />
        ) : (
          <Bars3Icon className="h-6 w-6" strokeWidth={2} />
        )}
      </div>
      <div className="justify-end flex">
        <DarkModeToggle />
      </div>
      <div
        className={`md:hidden ${
          openNav ? "block" : "hidden"
        } absolute top-full left-0 right-0 bg-background shadow-lg`}
      >
        <div className="flex justify-center p-4">
          <NavList />
        </div>
      </div>
      <Outlet />
    </div>
  );
}
