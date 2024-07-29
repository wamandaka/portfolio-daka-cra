import React from "react";
import Profil from "../assets/Foto 3x4.jpg";
// import { BsFillReplyFill } from "react-icons/bs";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useEffect } from "react";

function Hero() {
  AOS.init();
  // useEffect(() => {
  //   AOS.init();
  // });
  return (
    <div className="mt-40 w-full mx-auto container px-4">
      <div
        className="rounded-full w-36 h-36 overflow-hidden mx-auto"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <img src={Profil} alt="" className="" />
      </div>

      <h2
        className="text-slate-300 text-center pt-7 text-sm md:text-lg"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        Hi, I'm Waman Daka Wardani 👋
      </h2>

      <h1
        className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-700 text-center text-xl pt-5 md:text-2xl lg:text-4xl lg:px-36 pb-10 mb-20"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        I'm a fresh graduate informatic engineering. I have experience
        developing website using{" "}
        <a
          href="https://codeigniter.com/"
          target={"_blank"}
          rel="noreferrer"
          className="italic text-orange-300 underline cursor-pointer hover:text-orange-400"
        >
          Codeigniter
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com/"
          target={"_blank"}
          rel="noreferrer"
          className="italic text-sky-300 underline cursor-pointer hover:text-sky-400"
        >
          Tailwindcss
        </a>{" "}
        and{" "}
        <a
          href="https://react.dev/"
          target={"_blank"}
          rel="noreferrer"
          className="italic text-sky-400 underline cursor-pointer hover:text-sky-500"
        >
          ReactJS
        </a>
        . I have interest to be a Front-end web developer. I took online course
        in{" "}
        <a
          href="https://progate.com/"
          target={"_blank"}
          rel="noreferrer"
          className="italic text-purple-400 underline cursor-pointer hover:text-purple-500"
        >
          Progate
        </a>{" "}
        such as Intro to Front-end Web Developer.
      </h1>

      {/* <div
        className="md:pt-5 mb-28 flex justify-center"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <a
          className="px-7 py-4 bg-black bg-opacity-25 ring-1 ring-slate-600 hover:scale-90 transition ease-in-out duration-300 rounded flex items-center text-slate-400"
          href="mailto:contact@wamandaka.xyz"
        >
          Contact me
        </a>
      </div> */}
      {/* <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-700 text-center text-xl pt-5 md:text-2xl lg:text-4xl lg:px-36 pb-28'>Seorang <span className='italic'>Fresh Graduate</span> Teknik Informatika di salah satu kampus swasta di Jakarta. Yang logonya api biru. Tertarik dengan dunia Pemrograman khususnya <span className='italic'>Front End Web Development.</span></h1> */}
      {/* <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-700 text-center text-xl pt-5 md:text-2xl lg:text-4xl lg:px-36'>Saya seorang <span className='italic'>Fresh Graduate</span>  Teknik Informatika di Universitas Mercu Buana.</h1> */}

      {/* <div className="pt-5 pb-16 flex justify-center">
            <button className='px-7 py-4 bg-black bg-opacity-25 ring-1 ring-slate-600 hover:scale-90 transition ease-in-out duration-300 rounded flex items-center text-slate-400'>Hubungi saya</button>
        </div> */}
    </div>
  );
}

export default Hero;
