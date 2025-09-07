import { FiGithub } from "react-icons/fi";
import { FaMediumM, FaItchIo, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

function ContactIcons() {
  return (
    <div className="flex justify-between" style={{ gap: "2vw" }}>
      <a href="https://github.com/noah-dorego" target="_blank">
        <div className="rounded-full w-[4.5vw] h-[4.5vw] bg-[#000000] flex justify-center items-center">
          <FiGithub className="h-[2vw] w-[2vw] text-white" />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/noah-do-rego/" target="_blank">
        <div className="rounded-full w-[4.5vw] h-[4.5vw] bg-[#3f7bdd] flex justify-center items-center">
          <FaLinkedinIn className="h-[2vw] w-[2vw] text-white" />
        </div>
      </a>
      <a href="https://noah-dorego.medium.com/" target="_blank">
        <div className="rounded-full w-[4.5vw] h-[4.5vw] bg-[#000000] flex justify-center items-center">
          <FaMediumM className="h-[2vw] w-[2vw] text-white" />
        </div>
      </a>
      <a href="mailto:noah.dorego@gmail.com" target="_blank">
        <div className="rounded-full w-[4.5vw] h-[4.5vw] bg-[#6080ca] flex justify-center items-center">
          <FaEnvelope className="h-[2vw] w-[2vw] text-white" />
        </div>
      </a>
      <a href="https://itsdeego.itch.io/" target="_blank">
        <div className="rounded-full w-[4.5vw] h-[4.5vw] bg-[#d1604c] flex justify-center items-center">
          <FaItchIo className="h-[2vw] w-[2vw] text-white" />
        </div>
      </a>
    </div>
  );
}

export default ContactIcons;
