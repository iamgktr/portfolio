// components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <section className="border-t border-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="px-6 py-14 md:px-8 md:py-20 lg:px-16 lg:py-20">
          
          {/* layout: mobile = stacked, md+ = horizontal with space-between */}
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

            {/* TEXT */}
            <div className="flex-1 w-full md:w-auto text-left text-black font-['Inter'] font-semibold
                            text-lg leading-5 md:text-xl md:leading-6 lg:text-2xl lg:leading-7">
              Let’s work together
            </div>

            {/* ICON GROUP */}
            <div className="flex items-center gap-4 md:gap-4 lg:gap-6">

              {/* Instagram */}
              <a
                href="https://www.instagram.com/__gagangowda__?igsh=ZTY2MTB3ZHF6Y3Vn&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center bg-white rounded-sm"
              >
                <img
                  src="/home/icons/instagram.svg"
                  alt="Instagram"
                  className="w-12 h-12"
                  loading="lazy"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/gktr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 flex items-center justify-center bg-white rounded-sm"
              >
                <img
                  src="/home/icons/linkedin.svg"
                  alt="LinkedIn"
                  className="w-12 h-12"
                  loading="lazy"
                />
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
