import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-lg font-semibold">FELIPE OROPEZA</span>
      </div>

      <ul className="hidden md:flex gap-6 text-sm font-medium">
        <li className="hover:underline cursor-pointer">HOME</li>
        <li className="hover:underline cursor-pointer">ABOUT</li>
        <li className="hover:underline cursor-pointer">PROJECTS</li>
        <li className="hover:underline cursor-pointer">CONTACT</li>
      </ul>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <ul className="absolute top-16 right-6 w-40 bg-gray-800 text-white text-sm font-medium flex flex-col gap-3 p-4 rounded-lg shadow-lg md:hidden">
          <li className="hover:underline cursor-pointer">HOME</li>
          <li className="hover:underline cursor-pointer">ABOUT</li>
          <li className="hover:underline cursor-pointer">PROJECTS</li>
          <li className="hover:underline cursor-pointer">CONTACT</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
