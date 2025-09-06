import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TypeAnimation } from "react-type-animation";
import {
  BsChevronCompactDown,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import headshotImage from "../assets/images/misc/headshot.png";
import project1Image from "../assets/images/misc/sideline_background.png";
import project2Image from "../assets/images/games/terrible-taxi.png";
import solaceLogo from "../assets/logos/solace.jpg";
import kinaxisLogo from "../assets/logos/kinaxis.jpg";
import nokiaLogo from "../assets/logos/nokia.png";
import fieldEffectLogo from "../assets/logos/field_effect_software.jpg";

// Components
import { ContactIcons, ExperienceCard } from "../index.ts";
import { useTheme } from "@/components/ThemeProvider.tsx";

function Home() {
  const { theme } = useTheme();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    const container = document.getElementById("experience-container");
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = document.getElementById("experience-container");
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);

      // Add keyboard navigation
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          scrollLeft();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          scrollRight();
        }
      };

      // Add mouse wheel navigation
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        if (e.deltaY > 0) {
          scrollRight();
        } else {
          scrollLeft();
        }
      };

      // Add resize listener to update scroll behavior
      const handleResize = () => {
        checkScrollPosition();
      };

      document.addEventListener("keydown", handleKeyDown);
      container.addEventListener("wheel", handleWheel, { passive: false });
      window.addEventListener("resize", handleResize);

      return () => {
        container.removeEventListener("scroll", checkScrollPosition);
        document.removeEventListener("keydown", handleKeyDown);
        container.removeEventListener("wheel", handleWheel);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const scrollLeft = () => {
    const container = document.getElementById("experience-container");
    if (container) {
      // Calculate card width + gap based on screen size
      const isMobile = window.innerWidth < 768; // md breakpoint
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024; // lg breakpoint

      let cardWidth;
      if (isMobile) {
        // 1 card: 100% width + gap
        cardWidth = container.clientWidth + 16; // 4px gap on each side
      } else if (isTablet) {
        // 2 cards: 50% width + gap
        cardWidth = container.clientWidth * 0.5 + 24; // 6px gap on each side
      } else {
        // 3+ cards: 33.333% width + gap
        cardWidth = container.clientWidth * 0.333333 + 24; // 6px gap on each side
      }

      container.scrollBy({ left: -cardWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const container = document.getElementById("experience-container");
    if (container) {
      // Calculate card width + gap based on screen size
      const isMobile = window.innerWidth < 768; // md breakpoint
      const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024; // lg breakpoint

      let cardWidth;
      if (isMobile) {
        // 1 card: 100% width + gap
        cardWidth = container.clientWidth + 16; // 4px gap on each side
      } else if (isTablet) {
        // 2 cards: 50% width + gap
        cardWidth = container.clientWidth * 0.5 + 24; // 6px gap on each side
      } else {
        // 3+ cards: 33.333% width + gap
        cardWidth = container.clientWidth * 0.333333 + 24; // 6px gap on each side
      }

      container.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  return (
    <div
      className="md:snap-y md:snap-mandatory overflow-y-auto overflow-x-hidden max-h-screen text-foreground"
      style={{
        backgroundImage:
          theme === "light"
            ? "radial-gradient(125% 125% at 50% 0%, transparent 50%, grey)"
            : "radial-gradient(125% 125% at 50% 0%, #333333, black)",
        scrollbarWidth: "none",
      }}
      id="container"
    >
      <div className="inline md:flex md:h-[90vh] h-[600px] mt-8 md:mt-0 items-center justify-center snap-start">
        {/* PHOTO */}
        <div className="w-1/2 md:w-1/4 max-w-md ml-auto md:ml-0 mr-auto md:mr-0 mt-[10vh]">
          <img
            className="rounded-full object-center"
            src={headshotImage}
            alt="headshot image"
          />
        </div>
        {/* SPACER */}
        <span style={{ width: "3vw" }} />
        {/* TITLE */}
        <div className="min-w-fit max-w-fit ml-auto md:ml-0 mr-auto md:mr-0 mt-0 md:mt-[8vh] mb-[50px] md:mb-0">
          <h1 className="mt-5 font-extrabold text-[36px] sm:text-[44px] md:text-[6vw] text-foreground">
            Noah do Régo
          </h1>
          <h1 className="text-md font-light text-[22px] md:text-[3vw] text-center md:text-start text-foreground">
            <TypeAnimation
              sequence={[
                "University Student ",
                1500,
                "Developer ",
                1500,
                "Creator ",
                1500,
                "Writer ",
                1500,
                "Self-proclaimed dingus ",
                1500,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <div className="flex items-center gap-3 sm:gap-8 max-w-full justify-center md:justify-start mt-[2vw]">
            <ContactIcons />
          </div>
        </div>
      </div>
      <div className="md:flex left-auto bottom-0 w-screen h-[10vh] hidden justify-center">
        <motion.div
          style={{ cursor: "pointer" }}
          animate={{
            y: [null, -10, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <BsChevronCompactDown
            className="h-[4vw] w-[4vw] text-foreground"
            onClick={() => {
              const bio_div = document.getElementById("bio");
              const container = document.getElementById("container");
              container?.scrollTo({
                top: bio_div?.offsetTop,
                behavior: "smooth",
              });
            }}
          />
        </motion.div>
      </div>
      <div className="flex md:h-[90vh] h-[20vh] snap-start">
        <div id="bio" className="flex items-center justify-center">
          <p className="sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] w-4/5 lg:w-3/5 font-light text-justify text-foreground">
            Hey! 👋🏽 I'm Noah- a
            <b className="font-extrabold"> computer science student</b> 👨🏽‍💻
            currently studying at the <i>University of Ottawa</i> 🏛️. I have
            experience in{" "}
            <b className="font-extrabold">full-stack development</b> 💻,{" "}
            <b className="font-extrabold">game development</b> 🎮 and more. I'm
            interested in <b className="font-extrabold">AI</b> 🧠,{" "}
            <b className="font-extrabold">robotics</b> 🦾, and{" "}
            <b className="font-extrabold">modern technology</b> 💡 in general.
            I'll always be working on one project or another, feel free to reach
            out!
          </p>
        </div>
      </div>
      <div className="md:flex hidden left-auto bottom-0 w-screen h-[10vh] justify-center">
        <motion.div
          style={{ cursor: "pointer" }}
          animate={{
            y: [null, -10, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <BsChevronCompactDown
            className="h-[4vw] w-[4vw] text-foreground"
            onClick={() => {
              const experience_div = document.getElementById("experience");
              const container = document.getElementById("container");
              container?.scrollTo({
                top: experience_div?.offsetTop,
                behavior: "smooth",
              });
            }}
          />
        </motion.div>
      </div>
      <div className="flex-col md:h-[90vh] snap-start px-2 pt-8">
        <h1
          className="font-extrabold text-center text-foreground"
          style={{ fontSize: "3.5vw" }}
        >
          Experience
        </h1>
        <hr className="w-24 mb-7 rounded border-border mx-auto" />
        <div
          id="experience"
          className="flex items-center justify-center w-full"
        >
          <button
            className={`bg-card rounded-full p-3 mr-2 shadow-lg transition-all duration-200 ${
              canScrollLeft
                ? "hover:bg-muted opacity-100"
                : "opacity-50 cursor-not-allowed"
            }`}
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <BsChevronLeft className="w-2 h-2 sm:w-4 sm:h-4 md:w-6 md:h-6 text-muted-foreground" />
          </button>

          <div
            id="experience-container"
            className="flex gap-4 md:gap-6 w-[84vw] overflow-x-auto scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex-shrink-0 snap-start w-[calc(100%-8px)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <ExperienceCard
                logo={solaceLogo}
                jobTitle="Fullstack Developer Intern"
                companyName="Solace"
                bulletPoints={[
                  "Worked on bugs and stories involving developing React components and Springboot logic",
                  "Implemented and demoed feature for AI EDA-designer to provision operational event brokers",
                  "Built an agentic Jira sprint planner using SAM framework and custom RAG agents during company hackathon",
                ]}
              />
            </div>

            <div className="flex-shrink-0 snap-start w-[calc(100%-8px)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <ExperienceCard
                logo={kinaxisLogo}
                jobTitle="Software Developer Intern"
                companyName="Kinaxis"
                bulletPoints={[
                  "Worked on web client and development of the calendar component fixing critical bugs and developing tests",
                  "Built RAG-based AI chatbot  using OpenAI + Chroma DB to retrieve Jira ticket insights through MS Teams",
                  "Improved hierarchy selection performance from O(n*m) to O(n) by refactoring intensive code",
                ]}
              />
            </div>

            <div className="flex-shrink-0 snap-start w-[calc(100%-8px)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <ExperienceCard
                logo={nokiaLogo}
                jobTitle="Software Developer Intern"
                companyName="Nokia"
                bulletPoints={[
                  "Worked as a member of the frontend scrum team, worked on issues and developed features of the test case management system (UI improvements, endpoint integration, new functionality)",
                  "Implemented new feature involving the management of test bench elements",
                  "Delivered and recorded internal multipart demos of the entire product",
                ]}
              />
            </div>

            <div className="flex-shrink-0 snap-start w-[calc(100%-8px)] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <ExperienceCard
                logo={fieldEffectLogo}
                jobTitle="Frontend Developer Intern + Software Developer Intern"
                companyName="Field Effect Software"
                bulletPoints={[
                  "Researched and recommended learning management systems (LMS) integration standards and created a prototype using MERN stack",
                  "Added LMS integration to the platform's cyber range and delivered a company-wide demo of the MVP",
                  "Refactored websocket implementation using custom React hooks",
                  "Updated settings page UI with new REST API endpoints and implemented custom WYSIWYG editor",
                ]}
              />
            </div>
          </div>

          <button
            className={`bg-card rounded-full p-3 ml-2 shadow-lg transition-all duration-200 ${
              canScrollRight
                ? "hover:bg-muted opacity-100"
                : "opacity-50 cursor-not-allowed"
            }`}
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <BsChevronRight className="w-2 h-2 sm:w-4 sm:h-4 md:w-6 md:h-6 text-muted-foreground" />
          </button>
        </div>
      </div>
      <div className="md:flex hidden left-auto bottom-0 w-screen h-[10vh] justify-center">
        <motion.div
          style={{ cursor: "pointer" }}
          animate={{
            y: [null, -10, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.5, 1],
            repeat: Infinity,
            repeatDelay: 0,
          }}
        >
          <BsChevronCompactDown
            className="h-[4vw] w-[4vw] text-foreground"
            onClick={() => {
              const projects_div = document.getElementById("project-gallery");
              const container = document.getElementById("container");
              container?.scrollTo({
                top: projects_div?.offsetTop,
                behavior: "smooth",
              });
            }}
          />
        </motion.div>
      </div>
      <div className="md:h-screen h-[50vh] flex items-center justify-center snap-start">
        <div>
          <h1
            className="font-extrabold text-center text-foreground"
            style={{ fontSize: "3.5vw" }}
          >
            Featured Projects
          </h1>
          <hr className="mx-[50vw] w-24 mb-7 rounded border-border" />
          <div
            id="project-gallery"
            className="flex items-center justify-center w-full"
          >
            <Carousel className="rounded-xl w-[80vw] lg:w-[60vw] md:h-[400px] lg:h-[600px] h-[300px]">
              <CarouselContent>
                <CarouselItem>
                  <a href="https://github.com/noah-dorego/Sideline">
                    <figure className="relative h-full w-full">
                      <img
                        src={project1Image}
                        alt="image 1"
                        className="h-full w-full object-cover"
                      />
                      <figcaption className="absolute bottom-0 left-2/4 flex w-full -translate-x-2/4 justify-center text-center bg-gray-900/50 py-4 px-6 pb-10 shadow-lg saturate-200 backdrop-blur-sm">
                        <div>
                          <h2 className="text-white">Sideline</h2>
                          <p className="mt-2 font-normal" color="white">
                            A program that automatically generates sports
                            highlight videos
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </CarouselItem>
                <CarouselItem>
                  <a href="https://itsdeego.itch.io/terrible-taxi">
                    <figure className="relative h-full w-full">
                      <img
                        src={project2Image}
                        alt="image 2"
                        className="h-full w-full object-cover"
                      />
                      <figcaption className="absolute bottom-0 left-2/4 flex w-full -translate-x-2/4 justify-center text-center bg-gray-900/50 py-4 px-6 pb-10 shadow-lg saturate-200 backdrop-blur-sm">
                        <div>
                          <h2 className="text-white">Terrible Taxi</h2>
                          <p className="mt-2 font-normal" color="white">
                            A low-poly cartoonish game about being an abysmal
                            taxi driver
                          </p>
                        </div>
                      </figcaption>
                    </figure>
                  </a>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
