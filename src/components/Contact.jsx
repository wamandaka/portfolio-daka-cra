import React from "react";

function Contact() {
  return (
    <div>
      {/* <h1 className="text-5xl text-slate-400 text-center p-10 font-bold">
        Contact
      </h1> */}
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-700 text-center text-xl md:text-4xl lg:text-5xl lg:mx-96 lg:pb-3 pt-20">
        Tell me about your next project
      </h1>
      <div className="pt-12 pb-12 flex justify-center">
        <a
          className="px-7 py-4 bg-black bg-opacity-25 ring-1 ring-slate-600 hover:scale-90 transition ease-in-out duration-300 rounded flex items-center text-slate-400"
          href="mailto:contact@wamandaka.xyz"
        >
          Contact me
        </a>
      </div>
      {/* <div className="flex justify-center w-full"> */}
      {/* <form action="">
        <div className="w-full md:w-[70%] lg:w-2/3 lg:mx-auto md:mx-auto">
          <div className="w-full px-4 mb-8">
            <label for="name" className="text-base font-bold text-slate-400">
              Nama
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-slate4text-slate-400 focus:ring-1 focus-within:border-slate4text-slate-400"
            />
          </div>
          <div class="w-full px-4 mb-8">
            <label for="email" className="text-base font-bold text-slate-400">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-slate4text-slate-400 focus:ring-1 focus-within:border-slate4text-slate-400"
            />
          </div>
          <div class="w-full px-4 mb-8">
            <label for="message" className="text-base font-bold text-slate-400">
              Pesan
            </label>
            <textarea
              type="text"
              name="email"
              id="email"
              className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-slate4text-slate-400 focus:ring-1 focus-within:border-slate4text-slate-400 h-32"
            ></textarea>
          </div>
          <div className="w-full px-4">
            <button className="text-base font-semibold text-white bg-slate-400 py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500 mb-20">
              Kirim
            </button>
          </div>
        </div>
      </form> */}
    </div>
    // </div>
  );
}

export default Contact;
