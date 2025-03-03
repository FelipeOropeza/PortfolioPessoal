import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="bg-[#1D1A1A] text-white h-screen flex flex-col justify-center items-start px-10 md:px-20">
      <div className="max-w-3xl">
        <h3 className="text-sm text-gray-400 mb-2">HI THERE, I'M FELIPE OROPEZA</h3>
        <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 leading-tight">
          This is my personal portfolio
        </h1>
        <p className="text-gray-300 mt-4 text-lg">
          I'm a student and a front-end and back-end developer. I'm always looking
          for new challenges and opportunities to learn in the world of software
          development.
        </p>
      </div>
    </section>
  );
};

export default Banner;
