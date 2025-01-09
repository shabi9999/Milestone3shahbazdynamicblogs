import React from 'react';

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-50 mb-40">
        <h2 
          className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all 
          transform hover:translate-y-[-5px] hover:text-black text-slate-600"
        >
          SHAHBAZ SHAIKH : Navigating The Secrets Of Technology In Tech 
          Chronicles Blog!
        </h2>
        <p className="text-center mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          Joining me on the journey of web development can be an exciting and 
          rewarding experience. I can guide you through the fundamentals of 
          HTML, CSS, and JavaScript, helping you build a solid foundation for 
          creating interactive and engaging web experiences. We&#39;ll explore the 
          latest technologies and frameworks, such as React, Angular, and 
          Vue.js, enabling you to develop dynamic and user-friendly web 
          applications. I can also provide valuable insights into best 
          practices, coding standards, and professional development strategies 
          to help you succeed in the ever-evolving world of web development. 
          Together, we can navigate the challenges and celebrate the triumphs of 
          this exciting field, unlocking your potential to create impactful and 
          innovative web solutions.
        </p>

        <div className="mx-auto max-w-7xl px-5"> 
          <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
            Exploring Our Categories
          </h1>

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100"> 
            {[
              "Technology",
              "Artificial Intelligence",
              "HTML",
              "Virtual Reality",
              "Next Js",
              "Web Development",
            ].map((category, index) => (
              <div 
                key={index} 
                className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600"
              >
                <p className="text-center text-lg font-semibold">{category}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>
 <p className="text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10">
          Dive into our diverse range of categories, where you&#39;ll discover a 
          wealth of knowledge and insights tailored to your interest. Each 
          category features carefully curated blogs that explore the latest 
          trends, innovative technologies, and essential skills in the world of 
          web development and beyond. Whether you&#39;re a budding developer, an 
          experienced tech enthusiast, or simply curious about the digital 
          landscape, there&#39;s something here for everyone. Explore the categories 
          below and expand your understanding of the dynamic tech frontier.
        </p>
      </section>
    </div>
  );
}