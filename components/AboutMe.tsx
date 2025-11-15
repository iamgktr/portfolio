"use client";

import React from "react";
import Image from "next/image";

/* 🟩 About Me Section — Desktop / Tablet / Mobile (Final Version) */
const AboutMe: React.FC = () => {
  return (
    <section id="about" className="w-full flex flex-col justify-center items-center">
      {/* ===== 🖥️ Desktop Layout (visible only on lg and up) ===== */}
      <div className="hidden lg:flex self-stretch py-20 bg-gradient-to-b from-yellow-50/0 via-yellow-50 to-yellow-50/0 justify-center items-center w-full">
        <div className="w-full max-w-[1400px] flex items-center gap-10 px-6">
          {/* Left: Image */}
          <div className="flex-1 h-96">
            <Image
              src="/home/gagan12.png"
              alt="About Me Illustration"
              width={600}
              height={436}
              className="w-full h-full object-cover rounded-md"
              priority
            />
          </div>

          {/* Right: Text Content */}
          <div className="flex-1 pr-10 inline-flex flex-col justify-start items-start gap-10">
            <h2 className="text-center text-black text-6xl font-normal font-['Playfair_Display'] leading-[102.4px]">
              About Me
            </h2>

            <div className="self-stretch flex flex-col justify-center items-start gap-6">
              <p className="text-neutral-600 text-xl font-normal font-['Inter'] leading-5">
                Product designer with a keen eye for detail and a passion for crafting
                user-centered solutions that turn complex problems into intuitive,
                scalable experiences. Experienced across research, information
                architecture, wireframing, prototyping, and interaction design, with a
                track record of shaping products end-to-end from branding to dashboards
                and landing pages for startups and cross-functional teams.
              </p>

              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                {/* ⭐ Point 1 */}
                <div className="self-stretch inline-flex justify-start items-start gap-4">
                  <div className="w-6 h-6 flex-shrink-0 relative">
                    <Image
                      src="/home/icons/star.svg"
                      alt="Star Icon"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <p className="flex-1 text-neutral-600 text-xl font-normal font-['Inter'] leading-5">
                    Led UI/UX for TiaMeds from zero-to-one as team lead, owning brand,
                    dashboards, landing pages, and end-to-end design from research to
                    prototypes.​
                  </p>
                </div>

                {/* ⭐ Point 2 */}
                <div className="self-stretch inline-flex justify-start items-start gap-4">
                  <div className="w-6 h-6 flex-shrink-0 relative">
                    <Image
                      src="/home/icons/star.svg"
                      alt="Star Icon"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <p className="flex-1 text-neutral-600 text-xl font-normal font-['Inter'] leading-5">
                    Delivered impact at Nonlinear and Finkraft through research,
                    personas, journeys, prototypes, and usability tests, improving flows
                    and app experience across live projects and training at
                    Gloify/DesignBoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 💻 Tablet Layout (visible only between md and lg) ===== */}
      <div className="hidden md:flex lg:hidden self-stretch py-20 bg-gradient-to-b from-yellow-50/0 via-yellow-50 to-yellow-50/0 flex-col justify-start items-center gap-28 w-full">
        <div className="self-stretch px-10 flex flex-col justify-start items-start gap-10 max-w-[900px] mx-auto">
          <h2 className="text-black text-6xl font-normal font-['Playfair_Display'] leading-[102.4px]">
            About Me
          </h2>

          <div className="flex flex-col justify-center items-start gap-6">
            <p className="text-neutral-600 text-xl font-normal font-['Inter'] leading-5">
              Product designer with a keen eye for detail and a passion for crafting
              user-centered solutions that turn complex problems into intuitive,
              scalable experiences. Experienced across research, information
              architecture, wireframing, prototyping, and interaction design, with a
              track record of shaping products end-to-end from branding to dashboards
              and landing pages for startups and cross functional teams.
            </p>

            <div className="flex flex-col justify-start items-start gap-4">
              {/* ⭐ Point 1 */}
              <div className="inline-flex justify-start items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 relative">
                  <Image
                    src="/home/icons/star.svg"
                    alt="Star Icon"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <p className="flex-1 text-neutral-600 text-xl font-normal font-['Inter'] leading-5">
                  Led UI/UX for TiaMeds from zero-to-one as team lead, owning brand,
                  dashboards, landing pages, and end-to-end design from research to
                  prototypes.​
                </p>
              </div>

              {/* ⭐ Point 2 */}
              <div className="inline-flex justify-start items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 relative">
                  <Image
                    src="/home/icons/star.svg"
                    alt="Star Icon"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <p className="flex-1 text-neutral-600 text-xl font-normal font-['Inter'] leading-5">
                  Delivered impact at Nonlinear and Finkraft through research, personas,
                  journeys, prototypes, and usability tests, improving flows and app
                  experience across live projects and training at Gloify/DesignBoat.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Image */}
        <div className="relative w-full h-[533.44px]">
          <Image
            src="/home/gagan12.png"
            alt="About Me Illustration"
            fill
            className="object-cover"
            sizes="(max-width: 1023px) 100vw"
          />
        </div>
      </div>

      {/* ===== 📱 Mobile Layout (visible only below md) ===== */}
      <div className="flex md:hidden self-stretch py-20 bg-gradient-to-b from-yellow-50/0 via-yellow-50 to-yellow-50/0 flex-col justify-center items-center gap-10 w-full">
        <div className="self-stretch pr-10 flex flex-col justify-start items-start gap-10 max-w-[900px] mx-auto">
          <h2 className="text-black text-6xl font-normal font-['Playfair_Display'] leading-[102.40px]">
            About Me
          </h2>

          <div className="self-stretch flex flex-col justify-center items-start gap-6">
            <p className="text-neutral-600 text-xl font-normal font-['Inter'] leading-5">
              Product designer with a keen eye for detail and a passion for crafting
              user-centered solutions that turn complex problems into intuitive,
              scalable experiences. Experienced across research, information
              architecture, wireframing, prototyping, and interaction design, with a
              track record of shaping products end-to-end from branding to dashboards
              and landing pages for startups and cross functional teams.
            </p>

            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              {/* ⭐ Point 1 */}
              <div className="self-stretch inline-flex justify-start items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 relative">
                  <Image
                    src="/home/icons/star.svg"
                    alt="Star Icon"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <p className="flex-1 text-neutral-600 text-xl font-normal font-['Inter'] leading-5">
                  Led UI/UX for TiaMeds from zero-to-one as team lead, owning brand,
                  dashboards, landing pages, and end-to-end design from research to
                  prototypes.​
                </p>
              </div>

              {/* ⭐ Point 2 */}
              <div className="self-stretch inline-flex justify-start items-start gap-4">
                <div className="w-6 h-6 flex-shrink-0 relative">
                  <Image
                    src="/home/icons/star.svg"
                    alt="Star Icon"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <p className="flex-1 text-neutral-600 text-xl font-normal font-['Inter'] leading-5">
                  Delivered impact at Nonlinear and Finkraft through research, personas,
                  journeys, prototypes, and usability tests, improving flows and app
                  experience across live projects and training at Gloify/DesignBoat.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="w-full h-64 relative">
          <Image
            src="/home/gagan12.png"
            alt="About Me Illustration"
            fill
            className="object-cover"
            sizes="(max-width: 767px) 100vw"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
