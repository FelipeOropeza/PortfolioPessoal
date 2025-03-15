import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../assets/css/nav.css";

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Alternar idioma
  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "pt" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <nav className="text-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-lg font-semibold">FELIPE OROPEZA</span>
      </div>

      <ul className="hidden md:flex gap-6 text-sm font-medium items-center">
        <li className="hover:underline cursor-pointer">{t("nav.home")}</li>
        <li className="hover:underline cursor-pointer"><a id="nav" href="#about">{t("nav.about")}</a></li>
        <li className="hover:underline cursor-pointer">{t("nav.projects")}</li>
        <li className="hover:underline cursor-pointer">{t("nav.contact")}</li>
        <li>
          <button
            onClick={toggleLanguage}
            className="flex items-center text-xl mb-1"
          >
            {i18n.language === "en" ? "🇺🇸" : "🇧🇷"}
          </button>
        </li>
      </ul>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <ul className="absolute top-16 right-6 w-40 bg-gray-800 text-white text-sm font-medium flex flex-col gap-3 p-4 rounded-lg shadow-lg md:hidden">
          <li className="hover:underline cursor-pointer">{t("nav.home")}</li>
          <li className="hover:underline cursor-pointer">{t("nav.about")}</li>
          <li className="hover:underline cursor-pointer">
            {t("nav.projects")}
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
