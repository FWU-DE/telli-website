"use client";
import { useState } from "react";
import LoginButton from "./login-button";
import MenuIcon from "../icons/menu";
import CloseIcon from "../icons/close";
import { handleScroll } from "../utils/scroll";
import Link from "next/link";
import TelliIcon from "@/icons/telli";
import { cn } from "@/utils/tailwind/cn";
import { contentMaxWidthClassName } from "@/utils/tailwind/fonts";

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white py-3">
      <div
        className={cn(
          "flex items-center justify-between h-16",
          contentMaxWidthClassName,
        )}
      >
        <div className="flex items-center gap-2 text-telli-purple">
          <TelliIcon className="text-telli-purple h-10 w-10" />
          <span className="text-4xl font-bold">telli</span>
        </div>
        <nav className="hidden md:flex justify-center flex-1">
          <ul className="flex items-center gap-6">
            <li>
              <Link
                className="btn-header font-medium text-gray-700 hover:text-[#4B2E83]"
                href="#"
              >
                Startseite
              </Link>
            </li>
            <li>
              <Link
                className="btn-header font-medium text-gray-700 hover:text-[#4B2E83] whitespace-nowrap"
                href="#teacher"
              >
                Für Lehrkräfte
              </Link>
            </li>
            <li>
              <Link
                className="btn-header font-medium text-gray-700 hover:text-[#4B2E83]"
                href="#faq"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>

        {/* <div className="md:hidden flex items-center ml-auto"> */}
        {/*   <button */}
        {/*     onClick={() => setIsMenuOpen(!isMenuOpen)} */}
        {/*     className="text-gray-700" */}
        {/*   > */}
        {/*     {isMenuOpen ? <MenuIcon /> : <CloseIcon />} */}
        {/*   </button> */}
        {/* </div> */}

        <div className="justify-end">
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
