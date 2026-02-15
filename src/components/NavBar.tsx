import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "pt" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <nav className="relative z-50 text-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-lg font-semibold">FELIPE OROPEZA</span>
      </div>

      <ul className="hidden md:flex gap-6 text-lg font-medium items-center">
        <li className="hover:underline cursor-pointer">{t("nav.home")}</li>
        <li className="group relative cursor-pointer">
          <a className="block py-1 text-gray-200 transition-colors duration-300 hover:text-blue-500" href="#about">
            {t("nav.about")}
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li className="group relative cursor-pointer">
          <a className="block py-1 text-gray-200 transition-colors duration-300 hover:text-blue-500" href="#project">
            {t("nav.projects")}
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </li>
        <li className="hover:underline cursor-pointer">{t("nav.contact")}</li>
        <li>
          <button
            onClick={toggleLanguage}
            className="flex items-center text-xl mb-1 hover:underline cursor-pointer"
          >
            {i18n.language === "en" ? "🇺🇸" : "🇧🇷"}
          </button>
        </li>
      </ul>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <ul className="absolute top-full right-6 mt-2 w-44 bg-gray-800 text-white text-sm font-medium flex flex-col gap-3 p-4 rounded-lg shadow-lg md:hidden">
          <li className="hover:underline cursor-pointer">{t("nav.home")}</li>
          <li className="group relative cursor-pointer">
            <a
              className="block py-1 text-gray-200 transition-colors duration-300 hover:text-blue-500"
              href="#about"
              onClick={() => setIsOpen(false)}
            >
              {t("nav.about")}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>

          <li className="group relative cursor-pointer">
            <a className="block py-1 text-gray-200 transition-colors duration-300 hover:text-blue-500" href="#project">
              {t("nav.projects")}
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
          <li className="hover:underline cursor-pointer">{t("nav.contact")}</li>

          <li>
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center w-full py-2 mt-2 bg-gray-700 rounded-lg"
            >
              {i18n.language === "en" ? "🇺🇸" : "🇧🇷"}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
