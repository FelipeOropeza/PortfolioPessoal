import React from "react";
import { useTranslation } from "react-i18next";

const Banner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="banner"
      className="min-h-screen py-16 flex flex-col md:flex-row items-center justify-center text-white px-4 sm:px-6 md:px-10"
    >
      <div className="w-full md:w-2/3 text-center md:text-left">
        <h3 className="text-sm sm:text-base text-gray-400 mb-4">
          {t("banner.greeting")}
        </h3>
        <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl font-bold text-cyan-400 leading-tight whitespace-normal max-w-full">
          {t("banner.title")}
        </h1>
        <p className="text-gray-300 mt-6 text-base sm:text-lg md:text-xl">
          {t("banner.description")}
        </p>
      </div>

      <div
        className="hidden md:flex w-[280px] lg:w-[380px] aspect-square rounded-full overflow-hidden border-4 border-cyan-400 mt-10 md:mt-0 transition-all duration-300"
      >
        <img
          src={"images/FelipeCarvalho.jpeg"}
          alt="Felipe Oropeza"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Banner;
