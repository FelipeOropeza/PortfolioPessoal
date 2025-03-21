import React from "react";
import { useTranslation } from "react-i18next";
import "../assets/css/banner.css";

const Banner: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section
      id="banner"
      className="flex flex-col md:flex-row items-center justify-between text-white px-6 sm:px-10 mt-10"
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

      <div className="hidden md:block w-40 h-0 md:w-[465px] md:h-[390px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-cyan-400 mt-10 md:mt-0 transition-all duration-300">
        <img
          src="/images/FelipeCarvalho.jpeg"
          alt="Felipe Oropeza"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default Banner;
