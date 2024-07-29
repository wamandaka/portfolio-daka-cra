import React from "react";
import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    document.getElementById("year").innerHTML = new Date().getFullYear();
  }, []);
  return (
    <>
      <div className="w-full bg-transparent border-t p-5 text-white border-slate-600">
        <div className="mx-auto container text-slate-400 max-w-[1240px]">
          <span>&copy; </span>
          <span id="year"></span>
          <span> All rights reserved.</span>
        </div>
      </div>
    </>
  );
}

export default Footer;
