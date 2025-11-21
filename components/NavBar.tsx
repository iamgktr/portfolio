"use client";
import React, { useState } from "react";
import Image from "next/image";

const NavBar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 🟩 NavBar Section */}
      <section
        id="navbar"
        className="w-full sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm rounded-bl-[20px] rounded-br-[20px] overflow-hidden"
      >
        {/* Container with correct padding */}
        <div className="w-full max-w-[1500px] mx-auto px-[0] md:px-6 lg:px-10">

          {/* ================= Desktop / Tablet ================= */}
          <div className="hidden md:flex w-full py-6 items-center justify-between">

            {/* Logo */}
            <div className="w-40 h-16 relative flex items-center">
              <button
                onClick={handleScrollTop}
                aria-label="Scroll to top"
                className="w-full h-full flex items-center justify-start bg-transparent"
                type="button"
              >
                <Image
                  src="/home/logo.png"
                  alt="Gagan Logo"
                  width={128}
                  height={32}
                  className="object-contain"
                />
              </button>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
              <a
                href="https://www.icloud.com/iclouddrive/09fO8RdBc0bvyDWO9Ru5lhEwg#Gagan_CV"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="px-5 py-3.5 bg-neutral-900 rounded-full inline-flex items-center justify-center gap-2 text-white text-sm font-bold font-['DM_Sans'] leading-5"
                aria-label="Download my CV"
              >
                Download My CV
              </a>

              <a
                href="https://www.instagram.com/__gagangowda__?igsh=ZTY2MTB3ZHF6Y3Vn&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full hover:opacity-80 transition"
              >
                <Image src="/home/icons/instagram.svg" alt="Instagram" width={40} height={40} />
              </a>

              <a
                href="https://www.linkedin.com/in/gktr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full hover:opacity-80 transition"
              >
                <Image src="/home/icons/linkedin.svg" alt="LinkedIn" width={40} height={40} />
              </a>

            </div>
          </div>

          {/* ================= Mobile Header ================= */}
          <div className="md:hidden">
            <div className="self-stretch h-20 bg-white flex flex-col justify-start overflow-hidden">

              {/* Top Row */}
              <div className="w-full px-[12px] pt-5 pb-3 flex items-center justify-between">

                {/* Logo */}
                <div className="w-20 h-8 relative z-10">
                  <button
                    onClick={handleScrollTop}
                    aria-label="Scroll to top"
                    className="w-full h-full flex items-center justify-start bg-transparent"
                    type="button"
                  >
                    <Image
                      src="/home/logo.png"
                      alt="Gagan Logo"
                      fill
                      className="object-contain"
                      priority
                    />
                  </button>
                </div>

                {/* Right Actions — 8px gap */}
                <div className="flex items-center gap-0 z-10">

                  {/* CTA with smaller text */}
                  <a
                    href="https://www.icloud.com/iclouddrive/065P9ZWui-FztOSFCwykw9B7g#Gagan_CV"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="px-4 py-2 bg-neutral-900 rounded-full inline-flex items-center justify-center gap-2 text-white text-xs font-semibold shadow-sm"
                    aria-label="Download my CV"
                  >
                    Download My CV
                  </a>

                  {/* Icons — no outline */}
                  <a
                    href="https://www.instagram.com/__gagangowda__?igsh=ZTY2MTB3ZHF6Y3Vn&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 flex items-center justify-center rounded-md bg-white"
                  >
                    <Image src="/home/icons/instagram.svg" alt="Instagram" width={24} height={24} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/gktr"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 flex items-center justify-center rounded-md bg-white"
                  >
                    <Image src="/home/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                  </a>
                </div>
              </div>

              {/* Mobile Menu (hidden unless enabled later) */}
              <div
                id="mobile-menu"
                className={`w-full overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
                  mobileOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-[12px] pt-2 pb-8 flex flex-col justify-center items-start gap-6 bg-white">

                  <nav className="w-full flex flex-col gap-0">
                    <button className="w-full py-4 border-t border-gray-200 text-black text-sm font-bold">
                      Benefits
                    </button>
                    <button className="w-full py-4 border-t border-gray-200 text-black text-sm font-bold">
                      Specifications
                    </button>
                    <button className="w-full py-4 border-t border-gray-200 text-black text-sm font-bold">
                      How-to
                    </button>
                    <button className="w-full py-4 border-t border-gray-200 text-black text-sm font-bold">
                      Contact Us
                    </button>
                  </nav>

                  <a
                    href="#learn-more"
                    className="mt-2 px-5 py-3.5 bg-yellow-800 rounded-full inline-flex items-center justify-center gap-2 text-white text-sm font-bold"
                  >
                    <span>Learn More</span>
                    <span className="w-1.5 h-1.5 bg-white block rounded-sm" />
                  </a>

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default NavBar;
