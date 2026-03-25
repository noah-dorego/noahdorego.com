import { RiReactjsLine } from "react-icons/ri";
import { TbBrandVercel, TbBrandVite } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="w-full bottom-0 px-10 py-4">
      <div className="flex flex-row flex-wrap items-center justify-end">
        <p className="text-center font-light flex items-center p-2 bg-secondary rounded-lg text-foreground">
          Noah do Régo - 2023 - Made with
          <a href="https://react.dev/" target="_blank" className="ml-2">
            <RiReactjsLine size={30} className="text-foreground" />
          </a>
          <a href="https://vitejs.dev/" target="_blank" className="ml-1">
            <TbBrandVite size={28} className="text-foreground" />
          </a>
          <a href="https://vercel.com/" target="_blank" className="ml-1">
            <TbBrandVercel size={30} className="text-foreground mt-[3px]" />
          </a>
        </p>
      </div>
    </footer>
  );
}
