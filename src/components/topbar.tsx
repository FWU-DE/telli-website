import { useState } from "react";
import LoginButton from "./login-button";
import MenuIcon from "../icons/menu";
import CloseIcon from "../icons/close";
import { handleScroll } from "../utils/scroll";

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white py-3">
      <div className="container mx-auto flex items-center justify-between px-4 h-16">
        <div className="flex items-center">
          <img src="/telli_logo.svg" alt="Telli Logo" className="h-8" />
        </div>

        <nav className="hidden md:flex justify-center flex-1">
          <ul className="flex items-center gap-6">
            <li>
              <button
                className="button_topbar font-medium text-gray-700 hover:text-[#4B2E83]"
                onClick={() => handleScroll("startseite")}
              >
                Startseite
              </button>
            </li>
            <li>
              <button
                className="button_topbar font-medium text-gray-700 hover:text-[#4B2E83] whitespace-nowrap"
                onClick={() => handleScroll("what_special")}
              >
                Für Lehrkräfte
              </button>
            </li>
            <li>
              <button
                className="button_topbar font-medium text-gray-700 hover:text-[#4B2E83]"
                onClick={() => handleScroll("faq")}
              >
                FAQ
              </button>
            </li>
          </ul>
        </nav>

        <div className="md:hidden flex items-center ml-auto">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700"
          >
            {isMenuOpen ? <MenuIcon /> : <CloseIcon />}
          </button>
        </div>

        <div className="hidden md:flex justify-end">
          <LoginButton />
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md py-3">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <button
                className="button_topbar font-medium text-gray-700 hover:text-[#4B2E83]"
                onClick={() => handleScroll("startseite")}
              >
                Startseite
              </button>
            </li>
            <li>
              <button
                className="button_topbar font-medium text-gray-700 hover:text-[#4B2E83]"
                onClick={() => handleScroll("what_special")}
              >
                Für Lehrkräfte
              </button>
            </li>
            <li>
              <button
                className="button_topbar font-medium text-gray-700 hover:text-[#4B2E83]"
                onClick={() => handleScroll("faq")}
              >
                FAQ
              </button>
            </li>
            <li>
              <LoginButton />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
