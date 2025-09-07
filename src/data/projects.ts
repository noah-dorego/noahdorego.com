import bookerImage from "../assets/images/projects/booker.png";
import onedayImage from "../assets/images/projects/oneday.png";
import personalWebsiteImage from "../assets/images/projects/personal-website.jpg";
import unityImage from "../assets/images/projects/unity-art-2023.jpg";
import pyFileConvImage from "../assets/images/projects/py-file-convert-thumbnail.png";
import sidelineImage from "../assets/images/projects/sideline.png";

const projectsData = [
  {
    title: "Sideline",
    image: sidelineImage,
    desc: "A program that automatically generates sports highlight videos",
    link: "https://github.com/noah-dorego/Sideline",
  },
  {
    title: "Python File Converter",
    image: pyFileConvImage,
    desc: "A python program for converting file formats using ffmpeg",
    link: "https://github.com/noah-dorego/python-file-converter",
  },
  {
    title: "Personal Website",
    image: personalWebsiteImage,
    desc: "My personal website (yes, this one!) made with Vite + React, Tailwind CSS",
    link: "https://noahdorego.com",
  },
  {
    title: "OneDay",
    image: onedayImage,
    desc: "A minimalist, simplified daily planner app made with React Native",
    link: "https://play.google.com/store/apps/details?id=com.expo.oneday",
  },
  {
    title: "Booker",
    image: bookerImage,
    desc: "A fullstack application for booking hotels made in a university group project",
    link: "https://github.com/noah-dorego/Booker",
  },
  {
    title: "Unity Games",
    image: unityImage,
    desc: "All of the games I've made in Unity (programmed in C#)",
    link: "https://itsdeego.itch.io/",
  },
];

export default projectsData;
