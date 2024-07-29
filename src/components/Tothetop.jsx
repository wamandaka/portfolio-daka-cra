import React, { useEffect } from "react";

function Tothetop() {
  useEffect(() => {
    window.onscroll = () => {
      const navbar = document.getElementById("navbar");
      const myBtn = document.getElementById("myBtn");
      const fixedNav = navbar.offsetTop;

      if (window.pageYOffset > fixedNav) {
        myBtn.style.display = "block";
      } else {
        myBtn.style.display = "none";
      }
    };

    function topFunction() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, []);

  return (
    <div>
      <div class="container">
        <div class="flex flex-wrap relative">
          <a
            onClick={}
            href=""
            id="myBtn"
            title="Go to top"
            className="text-base font-semibold text-white bg-primary w-16 h-16 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out fixed bottom-20 right-5 hidden"
          >
            <img src="dist/img/icon/arrow-up-white.png"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Tothetop;
