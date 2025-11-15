"use client";

import React from "react";
import Image from "next/image";

/* 🟩 Hero Section — Responsive (Desktop + Tablet + Mobile) */
const Hero: React.FC = () => {
  return (
    <section id="hero" className="w-full flex justify-center items-center py-10">
      {/* 🖥️ Desktop Layout */}
      <div className="hidden lg:inline-flex justify-center items-start gap-20">
        <div className="inline-flex flex-col justify-center items-center gap-10">
          <div className="text-center text-black text-6xl font-normal font-['Playfair_Display'] leading-[102.4px]">
            I’m
            <br />
            Gagan Kumar TR
          </div>

          <div className="self-stretch h-48 flex flex-col justify-center items-center gap-12">
            <div className="self-stretch inline-flex justify-start items-center gap-2">
              <div className="flex-1 h-0 outline outline-1 outline-offset-[-0.5px] outline-zinc-600"></div>
              <div className="text-center text-neutral-900 text-xl font-medium font-['Inter'] leading-5">
                Product Designer
              </div>
              <div className="flex-1 h-0 outline outline-1 outline-offset-[-0.5px] outline-zinc-600"></div>
            </div>

            <div className="inline-flex justify-start items-center gap-16">
              <div className="inline-flex flex-col justify-start items-start gap-1">
                <div className="text-center text-black text-6xl font-normal font-['Playfair_Display'] leading-[102.4px]">
                  8+
                </div>
                <div className="text-center text-zinc-600 text-sm font-normal font-['Inter'] leading-4">
                  Projects
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-start gap-1">
                <div className="text-center text-black text-6xl font-normal font-['Playfair_Display'] leading-[102.4px]">
                  3y+
                </div>
                <div className="text-center text-zinc-600 text-sm font-normal font-['Inter'] leading-4">
                  Experience
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Image */}
        <Image
          src="/home/gagan11.png"
          alt="Gagan Kumar TR Portrait"
          width={560}
          height={681}
          className="rounded-2xl object-cover"
          priority
        />
      </div>

      {/* 💻 Tablet Layout */}
      <div className="hidden md:inline-flex lg:hidden self-stretch justify-center items-start gap-20">
        <div className="inline-flex flex-col justify-center items-center">
          <div className="text-center text-black text-3xl font-normal font-['Playfair_Display'] leading-10">
            I’m
            <br />
            Gagan Kumar TR
          </div>

          <div className="self-stretch h-48 flex flex-col justify-center items-center gap-12">
            <div className="self-stretch inline-flex justify-start items-center gap-2">
              <div className="flex-1 h-0 outline outline-1 outline-offset-[-0.5px] outline-zinc-600"></div>
              <div className="text-center text-neutral-900 text-xs font-medium font-['Inter'] leading-3">
                Product Designer
              </div>
              <div className="flex-1 h-0 outline outline-1 outline-offset-[-0.5px] outline-zinc-600"></div>
            </div>

            <div className="inline-flex justify-start items-center gap-16">
              <div className="inline-flex flex-col justify-start items-start gap-1">
                <div className="text-center text-black text-3xl font-normal font-['Playfair_Display'] leading-10">
                  8+
                </div>
                <div className="text-center text-zinc-600 text-sm font-normal font-['Inter'] leading-4">
                  Projects
                </div>
              </div>
              <div className="inline-flex flex-col justify-start items-start gap-1">
                <div className="text-center text-black text-3xl font-normal font-['Playfair_Display'] leading-10">
                  3y+
                </div>
                <div className="text-center text-zinc-600 text-sm font-normal font-['Inter'] leading-4">
                  Experience
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Image */}
        <div className="relative w-96 h-[509.72px] rounded-2xl overflow-hidden">
          <Image
            src="/home/gagan11.png"
            alt="Gagan Kumar TR Portrait"
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 1023px) 24rem"
          />
        </div>
      </div>

      {/* 📱 Mobile Layout (new structure) */}
      <div className="md:hidden self-stretch inline-flex flex-col justify-center items-center gap-20">
        <div className="py-6 flex flex-col justify-center items-center gap-10">
          <div className="text-center justify-start text-black text-xl font-medium font-['Inter'] leading-5">
            I’m
            <br />
            Gagan Kumar TR
          </div>

          <div className="w-44 flex flex-col justify-center items-center gap-10">
            <div className="self-stretch inline-flex justify-start items-center gap-2">
              <div className="flex-1 h-0 outline outline-1 outline-offset-[-0.50px] outline-zinc-600"></div>
              <div className="text-center justify-start text-neutral-900 text-xs font-medium font-['Inter'] leading-3">
                Product Designer
              </div>
              <div className="flex-1 h-0 outline outline-1 outline-offset-[-0.50px] outline-zinc-600"></div>
            </div>

            <div className="inline-flex justify-start items-center gap-16">
              <div className="inline-flex flex-col justify-start items-start gap-1">
                <div className="text-center justify-start text-black text-xl font-medium font-['Inter'] leading-5">
                  8+
                </div>
                <div className="text-center justify-start text-zinc-600 text-sm font-normal font-['Inter'] leading-4">
                  Projects
                </div>
              </div>

              <div className="inline-flex flex-col justify-start items-start gap-1">
                <div className="text-center justify-start text-black text-xl font-medium font-['Inter'] leading-5">
                  3y+
                </div>
                <div className="text-center justify-start text-zinc-600 text-sm font-normal font-['Inter'] leading-4">
                  Experience
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Image */}
        <div className="w-80 h-96">
          <Image
            src="/home/gagan11.png"
            alt="Gagan Kumar TR Portrait"
            width={320}
            height={384}
            className="w-80 h-96 object-cover rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
