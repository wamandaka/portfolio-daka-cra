import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import {
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiCss3,
  SiReact,
  SiGit,
  SiFigma,
  SiAdobephotoshop,
  SiBootstrap,
  SiCodeigniter,
} from "react-icons/si";

import "swiper/css";
import "swiper/css/autoplay";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

const Slide = () => {
  return (
    <div className="w-full py-10 px-4 bg-black/40 text-slate-400 text-center ">
      <div className=" md:hidden flex">
        <Swiper
          spaceBetween={0}
          centeredSlides={false}
          slidesPerView={4}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className=""
        >
          <SwiperSlide className="">
            <SiTailwindcss size={40} className="m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SiHtml5 size={40} className="m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SiJavascript size={40} className="m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SiCss3 size={40} className="m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SiReact size={40} className="m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SiGit size={40} className="m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SiFigma size={40} className="m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SiAdobephotoshop size={40} className="m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SiBootstrap size={40} className="m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SiCodeigniter size={40} className="m-auto" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hidden md:flex">
        <Swiper
          spaceBetween={0}
          centeredSlides={false}
          slidesPerView={5}
          grabCursor={false}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className=""
        >
          <SwiperSlide className="">
            <SiTailwindcss size={50} className="m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SiHtml5 size={50} className="m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SiJavascript size={50} className="m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SiCss3 size={50} className="m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SiReact size={50} className="m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SiGit size={50} className="m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SiFigma size={50} className="m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SiAdobephotoshop size={50} className="m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SiBootstrap size={50} className="m-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <SiCodeigniter size={50} className="m-auto" />
          </SwiperSlide>
          {/* <SwiperSlide>COMPANY</SwiperSlide>
                <SwiperSlide>COMPANY</SwiperSlide>
                <SwiperSlide>COMPANY</SwiperSlide>
                <SwiperSlide>COMPANY</SwiperSlide> */}
        </Swiper>
      </div>

      {/* <div className="sm:flex md:hidden hidden">
            <Swiper 
            spaceBetween={0}
            centeredSlides={false}
            slidesPerView={3}
            grabCursor={true}
            loop={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            
            className="">
                <SwiperSlide>COMPANY</SwiperSlide>
                <SwiperSlide>COMPANY</SwiperSlide>
                <SwiperSlide>COMPANY</SwiperSlide>
                <SwiperSlide>COMPANY</SwiperSlide>
                <SwiperSlide>COMPANY</SwiperSlide>
                <SwiperSlide>COMPANY</SwiperSlide>
                <SwiperSlide>COMPANY</SwiperSlide>
            </Swiper>
        </div> */}
    </div>
  );
};

export default Slide;
