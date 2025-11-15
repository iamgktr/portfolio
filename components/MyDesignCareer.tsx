// components/MyDesignCareer.tsx
"use client";

import React from "react";

type WorkItem = {
  company: string;
  period: string;
  roles: string[];
  desc: string;
  images: string[];
  links?: string[]; // NEW: added optional link array
};

type Props = {
  items?: WorkItem[];
};

const defaultItems: WorkItem[] = [
  {
    company: "Tiameds Technologies Pvt. Ltd.",
    period: "Aug 2024 - Present",
    roles: ["UI/UX Designer"],
    desc:
      "Joined TiaMeds at its conceptual stage, leading end-to-end product design and strategy, driving market fit and helping secure ₹3 Crore in seed funding.",
    images: [
      "/home/tiamedsmycareer.png",
      "/home/sudhanand-pharmaciesmycareer.png",
      "/home/SD-groupsmycareer.png",
    ],
    links: [
      "https://www.tiameds.ai/",
      "https://www.sudhanandpharmacies.com/",
      "https://www.sudhanandgroup.com/",
    ],
  },
  {
    company: "Finkraft",
    period: "Feb 2023 - Mar 2024",
    roles: ["UI/UX Designer", "Product Designer"],
    desc:
      "Led design for a finance automation platform, streamlining invoice workflows and improving onboarding to boost adoption and client satisfaction.",
    images: ["/home/finkraftmycareer.png"],
    links: ["https://finkraft.ai/en"],
  },
  {
    company: "Nonlinear",
    period: "Jun 2022 - Feb 2023",
    roles: ["UI/UX Designer", "Product Designer"],
    desc:
      "Redesigned app UI to enhance user experience, creating personas and prototypes to align solutions with user needs.",
    images: ["/home/nonlinearmycareer.png"],
    links: ["https://www.featsclub.com/"],
  },
];

export default function MyDesignCareer({ items = defaultItems }: Props) {
  return (
    <section className="w-full py-20 lg:py-28 flex flex-col gap-10">
      {/* Heading */}
      <div className="flex flex-col">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal">My Design Career</h2>
        <div className="mt-2 text-sm">Work Experience</div>
      </div>

      {/* List */}
      <div className="flex flex-col gap-6">
        {items.map((it, idx) => (
          <article key={idx} className="w-full py-6 border-b border-stone-300 flex flex-col gap-6">
            {/* Header row */}
            <div className="flex items-center justify-between">
              <div className="flex-1 text-xl md:text-2xl">{it.company}</div>
              <div className="ml-6 text-sm md:text-base">{it.period}</div>
            </div>

            {/* Body */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-20">
              <div className="flex-1 flex flex-col gap-4">
                <div className="flex flex-wrap gap-3">
                  {it.roles.map((r, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-100 rounded-3xl text-sm">
                      {r}
                    </span>
                  ))}
                </div>

                <p className="text-zinc-600 text-base md:text-lg leading-6">{it.desc}</p>
              </div>

              {/* Images with links */}
              <div className="flex-shrink-0 flex items-center gap-2 overflow-hidden">
                {it.images.map((src, i) => (
                  <a
                    key={i}
                    href={it.links?.[i]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-28 h-20 md:w-36 md:h-28 relative rounded-lg overflow-hidden group"
                  >
                    <img
                      src={src}
                      alt={`${it.company}-img-${i}`}
                      className="w-full h-full object-cover rounded-lg"
                    />

                    {/* small link-out icon */}
                    <div className="w-6 h-6 absolute bottom-2 right-2 flex items-center justify-center bg-black/60 rounded">
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 3h7v7" />
                        <path d="M10 14L21 3" />
                        <path d="M21 21H3V3h7" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
