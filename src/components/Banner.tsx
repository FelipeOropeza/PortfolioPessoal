import React from "react";

const Banner: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between text-white px-6 sm:px-10 mt-20">
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h3 className="text-sm sm:text-base text-gray-400 mb-4">
          HI THERE, I'M FELIPE OROPEZA
        </h3>
        <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-7xl font-bold text-cyan-400 leading-tight whitespace-normal max-w-full">
          This is my personal portfolio
        </h1>
        <p className="text-gray-300 mt-6 text-base sm:text-lg md:text-xl">
          I'm a student and a front-end and back-end developer. I'm always looking
          for new challenges and opportunities to learn in the world of software
          development.
        </p>
      </div>

      <div className="w-80 h-80 md:w-[420px] md:h-[420px] lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-cyan-400 mt-10 md:mt-0 transition-all duration-300">
        <img
          src="/images/FelipeCarvalho.jpeg"
          alt="Felipe Oropeza"
        />
      </div>
    </section>
  );
};

export default Banner;
