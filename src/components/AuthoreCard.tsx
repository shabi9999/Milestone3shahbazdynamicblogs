import React from "react";

export default function AuthoreCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn ">
        <img
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500"
          src="../images/shabi.JPG"
          alt=" Author Image"
        />

        <div>
          <h3 className="text-xl font-bold">SHABI SHAIKH</h3>
          <p className="text-slate-500 ">
            Full Stack Developer  | SEO Expert | Web Developer
          </p>
        </div>
      </div>

      <p className="mt-4 text-black leading-relaxed">
        Shaikh Shahbaz is an experienced electronic engineer with a passion for
        web development and sharing knowledge through articles
      </p>
      <div className="mt-4 flex space-x-3">
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/shabi-shaikh-1b74162ba/"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
         LinkedIn
        </a>
        <a
          href="https://github.com/shabi9999"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
         GitHub
        </a>
      </div>
    </div>
  );
}
