import React from "react";
// import Project1 from "../assets/Futsal.png";
import Project2 from "../assets/portfolio-tailwindcss.png";
import Project3 from "../assets/progate-kalkulator.png";
import Project4 from "../assets/landing-page.png";
import Project5 from "../assets/prakiraan-cuaca.png";

const Portfolio = () => {
  return (
    <div className="w-full px-4 mx-auto items-center">
      {/* <h1 className='text-slate-400 text-center text-5xl font-bold p-10'>Portfolio</h1> */}
      <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-700 font-bold py-2 text-3xl md:text-4xl lg:text-5xl lg:mx-96">
        Lates Project
      </h1>
      <div className="flex flex-wrap justify-center pt-10 pb-20">
        {/* Portfolio */}
        <a href="https://wamandaka.github.io/" target="_blank" rel="noreferrer">
          <div className="w-72 h-72 mx-2 py-4 rounded-md px-4 bg-gray-800 hover:-translate-y-2 transition duration-500 cursor-pointer bg-opacity-80 mt-7 relative">
            <img
              className="rounded grayscale hover:grayscale-0"
              src={Project2}
              alt="Project1"
            />
            <a
              href="https://wamandaka.github.io/"
              target="_blank"
              rel="noreferrer"
              className=" text-slate-400 md:text-md pt-2 hover:text-cyan-400 inline-block md:mb-9"
            >
              Portfolio
            </a>
            <div className="absolute inset-y-auto bottom-4 grid grid-flow-col gap-2">
              <span className="text-slate-300 text-sm">HTML</span>
              <span className="text-slate-300 text-sm">JS</span>
              <span className="text-slate-300 text-sm">Tailwindcss</span>
            </div>
          </div>
        </a>

        {/* Kalkulator */}
        <a
          href="https://wamandaka.github.io/progate-kalkulator/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-72 h-72 mx-2 py-4 rounded-md px-4 bg-gray-800 hover:-translate-y-2 transition duration-500 cursor-pointer bg-opacity-80 mt-7 relative">
            <img
              className="rounded grayscale hover:grayscale-0"
              src={Project3}
              alt="Project1"
            />
            <a
              href="https://wamandaka.github.io/progate-kalkulator/"
              target="_blank"
              rel="noreferrer"
              className=" text-slate-400 md:text-md pt-2 hover:text-cyan-400 inline-block md:mb-9"
            >
              Kalkulator Sederhana
            </a>
            <div className="absolute inset-y-auto bottom-4 grid grid-flow-col gap-2">
              <span className="text-slate-300 text-sm">HTML</span>
              <span className="text-slate-300 text-sm">CSS</span>
              <span className="text-slate-300 text-sm">JS</span>
            </div>
          </div>
        </a>

        {/* Landing Page */}
        <a
          href="https://wamandaka.github.io/react-app-landingpage/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="w-72 h-72 mx-2 py-4 rounded-md px-4 bg-gray-800 hover:-translate-y-2 transition duration-500 cursor-pointer bg-opacity-80 mt-7 relative">
            <img
              className="rounded grayscale hover:grayscale-0"
              src={Project4}
              alt="Project1"
            />
            <a
              href="https://wamandaka.github.io/react-app-landingpage/"
              target="_blank"
              rel="noreferrer"
              className=" text-slate-400 md:text-md pt-2 hover:text-cyan-400 inline-block md:mb-9"
            >
              Landing Page
            </a>
            <div className="absolute inset-y-auto bottom-4 grid grid-flow-col gap-2">
              <span className="text-slate-300 text-sm">ReactJS</span>
              <span className="text-slate-300 text-sm">Tailwindcss</span>
            </div>
          </div>
        </a>

        {/* Weather App */}
        <a
          href="https://wamandaka.github.io/react-app-weatherapp/"
          target="_blank"
          rel="noreferrer"
          className="hover:grayscale-0"
        >
          <div className="w-72 h-72 mx-2 py-4 rounded-md px-4 bg-gray-800 hover:-translate-y-2 transition duration-500 cursor-pointer bg-opacity-80 mt-7 relative">
            <img
              className="rounded grayscale hover:grayscale-0"
              src={Project5}
              alt="Project1"
            />
            <a
              href="https://wamandaka.github.io/react-app-weatherapp/"
              target="_blank"
              rel="noreferrer"
              className=" text-slate-400 md:text-md pt-2 hover:text-cyan-400 inline-block md:mb-9"
            >
              Aplikasi Prakiraan Cuaca Sederhana
            </a>
            {/* <hr className="mb-5" /> */}
            <div className="absolute inset-y-auto bottom-4 grid grid-flow-col gap-2">
              {/* <hr className="w-auto" /> */}
              <span className="text-slate-300 text-sm">ReactJS</span>
              <span className="text-slate-300 text-sm">Tailwindcss</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
