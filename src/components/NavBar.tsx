import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[#1D1A1A] text-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <span className="text-lg font-semibold">FELIPE OROPEZA</span>
      </div>
      <ul className="flex gap-6 text-sm font-medium">
        <li className="hover:underline cursor-pointer">HOME</li>
        <li className="hover:underline cursor-pointer">ABOUT</li>
        <li className="hover:underline cursor-pointer">PROJECTS</li>
        <li className="hover:underline cursor-pointer">CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navbar;
