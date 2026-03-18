"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [worksDropdown, setWorksDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const worksCategories = ["ALL", "BRANDING", "PACKAGE", "AD·EDITORIAL"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between px-10 py-5 max-w-[1400px] mx-auto">
        <Link
          href="/"
          className="text-lg font-black tracking-[0.25em] uppercase"
        >
          BOLD
        </Link>
        <nav className="flex items-center gap-10">
          <Link
            href="/"
            className={`text-xs tracking-[0.2em] font-semibold uppercase transition-opacity hover:opacity-50 ${
              pathname === "/" ? "opacity-100" : "opacity-40"
            }`}
          >
            HOME
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setWorksDropdown(true)}
            onMouseLeave={() => setWorksDropdown(false)}
          >
            <Link
              href="/works"
              className={`text-xs tracking-[0.2em] font-semibold uppercase transition-opacity hover:opacity-50 ${
                pathname === "/works" ? "opacity-100" : "opacity-40"
              }`}
            >
              WORKS
            </Link>
            {worksDropdown && (
              <div className="absolute top-full right-0 mt-3 bg-white border border-neutral-100 shadow-md py-2 min-w-[160px]">
                {worksCategories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/works?category=${cat}`}
                    className="block px-5 py-2.5 text-[11px] tracking-[0.15em] uppercase text-neutral-500 hover:text-black hover:bg-neutral-50 transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden items-center justify-between px-5 py-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-[5px] p-1 cursor-pointer"
          aria-label="메뉴 열기"
        >
          <span
            className={`block w-6 h-px bg-black transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-black transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-black transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>

        <Link
          href="/"
          className="text-lg font-black tracking-[0.25em] uppercase"
        >
          BOLD
        </Link>

        <button className="p-1 cursor-pointer" aria-label="검색">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="bg-white border-t border-neutral-100 px-6 py-6">
          <nav className="flex flex-col gap-5">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-xs tracking-[0.2em] uppercase font-semibold"
            >
              HOME
            </Link>
            <Link
              href="/works"
              onClick={() => setMenuOpen(false)}
              className="text-xs tracking-[0.2em] uppercase font-semibold"
            >
              WORKS
            </Link>
            <div className="pl-4 flex flex-col gap-3 border-l border-neutral-200">
              {worksCategories.map((cat) => (
                <Link
                  key={cat}
                  href={`/works?category=${cat}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-[11px] tracking-[0.15em] uppercase text-neutral-400"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
