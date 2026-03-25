import { Suspense } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Card, CardContent, CardTitle, CardDescription } from "./ui/card";

function CardGrid(props: {
  data: {
    title: string;
    desc: string | undefined;
    image: string;
    link: string | undefined;
  }[];
}) {
  return (
    <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-8 mb-10">
      {props.data.map((card, index) => {
        return (
          <a key={index} href={card.link} target="_blank">
            <Card
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
              style={{
                backgroundImage:
                  "radial-gradient(125% 125% at 50% 50%, transparent 0%, grey)",
              }}
            >
              <div className="relative m-0 rounded-none min-h-[20vh]">
                <Suspense
                  fallback={
                    <div className="object-cover aspect-[16/9] bg-gray-700"></div>
                  }
                >
                  <img
                    className="object-cover aspect-[16/9] w-full"
                    src={card.image}
                    alt="img-blur-shadow"
                  />
                </Suspense>
              </div>
              <CardContent className="h-[180px] p-4">
                <CardTitle className="mb-2 line-clamp-2 max-h-[72px] text-xl">
                  {card.title}
                </CardTitle>
                <CardDescription className="text-lg xl:text-xl line-clamp-2">
                  {card.desc}
                </CardDescription>
              </CardContent>
            </Card>
          </a>
        );
      })}
    </div>
  );
}

export default CardGrid;
