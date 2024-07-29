import React, { useEffect, useState } from "react";
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";
// import * as Scroll from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
// import cv from "../assets/CV-Daka.pdf";
// import useNavigate from "react-router-dom";
// import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

function Navbar() {
  // let scroller = Scroll.animateScroll;
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
    // window.scrollToTop(() => {
    //   scroller.scrollToTop();
    // });
  }, []);
  
  AOS.init();

  return (
    <div
      id="navbar"
      data-aos="fade-down"
      className={
        scroll
          ? "w-full fixed border-slate-500 top-0 bg-slate-500 bg-opacity-5 shadow-lg backdrop-blur-sm z-50"
          : "w-full fixed border-slate-500 top-0 border-b-[1px]"
      }
    >
      <div className="max-w-[1240px] h-[70px] flex justify-between mx-auto px-4 items-center text-slate-500">
        <div className="text-2xl sm:text-3xl font-extrabold">Daka</div>
        <div>
          <ul className="flex md:hidden">
            <li className="mx-2">
              <a
                href="https://www.instagram.com/kang_piscokk/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineInstagram size={25} />
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://github.com/wamandaka"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub size={25} />
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://www.linkedin.com/in/wamandaka/"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLinkedin size={25} />
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://drive.google.com/file/d/1tq2nnzqtpk9LOpqQMBiKnFY-M_of51Jt/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <h1 className=" font-bold">CV</h1>
              </a>
            </li>
          </ul>
          <ul className="md:flex hidden">
            <li className="px-4">
              <a
                href="https://www.instagram.com/kang_piscokk/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                Instagram
              </a>
            </li>
            <li className="text-white cursor-default">/</li>
            <li className="px-4">
              <a
                href="https://github.com/wamandaka"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                Github
              </a>
            </li>
            <li className="text-white cursor-default">/</li>
            <li className="px-4 ">
              <a
                href="https://www.linkedin.com/in/wamandaka/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-cyan-400"
              >
                LinkedIn
              </a>
            </li>
            <li className="px-4 ">
              <a
                href="https://drive.google.com/file/d/1tq2nnzqtpk9LOpqQMBiKnFY-M_of51Jt/view?usp=sharing"
                target={"_blank"}
                // download="./assets/CV-Daka.pdf"
                rel="noreferrer"
                className="bg-slate-500 py-3 px-6 text-white rounded-md hover:text-cyan-400 hover:bg-slate-700 transition"
              >
                CV
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <a onClick={this.scrollToTop()} className="cursor-pointer">
        To the top!
      </a> */}
    </div>
  );
}

export default Navbar;
