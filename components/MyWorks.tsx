"use client";

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

type Project = {
  id?: number | string;
  title: string;
  imgAlt?: string;
  imagePath?: string;
  link?: string;
};

const defaultProjects: Project[] = [
  {
    id: 1,
    title: 'UX Case Study - Habitude App 🔗',
    imgAlt: 'Habitude screenshot',
    imagePath: '/home/habitude.png',
    link: 'https://www.behance.net/gallery/163745413/UX-Case-Study-Habitude-App'
  },
  {
    id: 2,
    title: 'Finkraft Dashboard - Fintech App 🔗',
    imgAlt: 'Finkraft screenshot',
    imagePath: '/home/finkraft.png',
    link: 'https://www.figma.com/design/c10ck4gl6TziQ0ITPvpe00/Finkraft-Fink?m=auto&t=pVoft15E0xVd8ylo-6'
  },
  {
    id: 3,
    title: 'Klipit Dashboard - Billing App 🔗',
    imgAlt: 'Klipit screenshot',
    imagePath: '/home/klipit.png',
    link: 'https://www.figma.com/design/f5n7lHT7DoR8c7sWOIJBjM/klip---Latest--UI-?m=auto&t=pVoft15E0xVd8ylo-6'
  },
  {
    id: 4,
    title: 'Sudhanand Group Website 🔗',
    imgAlt: 'Sudhanand group screenshot',
    imagePath: '/home/sudhanand-group.png',
    link: 'https://www.sudhanandgroup.com/'
  },
  {
    id: 5,
    title: 'Sudhanand Pharmacies Website 🔗',
    imgAlt: 'Sudhanand pharmacies screenshot',
    imagePath: '/home/sudhanand-pharmacies.png',
    link: 'https://www.sudhanandpharmacies.com/'
  }
];

export default function MyWorks({ projects = defaultProjects }: { projects?: Project[] }) {
  const projectList = Array.isArray(projects) && projects.length ? projects : defaultProjects;

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
    };

    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [projectList]);

  const scrollByAmount = () => {
    const el = scrollerRef.current;
    if (!el) return 0;
    return Math.round(Math.min(el.clientWidth * 0.7, 600));
  };

  const handleLeft = () => {
    scrollerRef.current?.scrollBy({ left: -scrollByAmount(), behavior: 'smooth' });
  };

  const handleRight = () => {
    scrollerRef.current?.scrollBy({ left: scrollByAmount(), behavior: 'smooth' });
  };

  return (
    <section aria-labelledby="myworks-heading" className="w-full flex justify-center relative">
      <div className="max-w-[1500px] w-full px-6 md:px-10 py-10">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-4">
          <div className="w-72 flex flex-col items-center">
            <h2 id="myworks-heading" className="text-5xl md:text-6xl font-normal font-['Playfair_Display'] leading-[1.1] text-center text-black">
              My Works
            </h2>
            <p className="text-sm font-normal font-['Inter'] text-center text-black">Portfolio</p>
          </div>
        </div>

        <div className="mt-8 relative">

          {/* Desktop / Tablet View */}
          <div className="hidden md:block">

            {/* Left Arrow */}
            <button
              onClick={handleLeft}
              aria-label="Scroll left"
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full shadow-md bg-black/20 hover:bg-black/30 transition ${
                canScrollLeft ? 'opacity-100' : 'opacity-40 pointer-events-none'
              }`}>
              <Image src="/home/icons/leftcheveron.svg" alt="Scroll left" width={28} height={28} />
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleRight}
              aria-label="Scroll right"
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full shadow-md bg-black/20 hover:bg-black/30 transition ${
                canScrollRight ? 'opacity-100' : 'opacity-40 pointer-events-none'
              }`}>
              <Image src="/home/icons/rightcheveron.svg" alt="Scroll right" width={28} height={28} />
            </button>

            {/* Scroll Container */}
            <div ref={scrollerRef} className="overflow-x-auto no-scrollbar -mx-2 px-2" role="list" aria-label="Project list">
              <div className="flex gap-10 items-start w-max">
                
                {projectList.map((p) => (
                  <a
                    key={p.id ?? p.title}
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[535px] flex-shrink-0 flex flex-col items-start gap-6 cursor-pointer"
                  >
                    <div className="w-full h-96 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                      {p.imagePath ? (
                        <Image src={p.imagePath} alt={p.imgAlt || p.title} width={535} height={384} className="object-cover rounded-md" />
                      ) : (
                        <div className="text-sm text-gray-400">No image provided</div>
                      )}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-['Playfair_Display'] leading-10 text-black text-left">
                      {p.title}
                    </h3>

                    <div className="w-10 h-10 bg-black/0" aria-hidden />
                  </a>
                ))}

              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="block md:hidden">
            <div className="flex flex-col gap-10">

              {projectList.map((p) => (
                <a
                  key={p.id ?? p.title}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex flex-col items-start gap-6 cursor-pointer"
                >
                  <div className="w-full h-56 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                    {p.imagePath ? (
                      <Image src={p.imagePath} alt={p.imgAlt || p.title} width={535} height={384} className="object-cover rounded-md" />
                    ) : (
                      <div className="text-sm text-gray-400">No image provided</div>
                    )}
                  </div>

                  <h3 className="text-2xl font-['Playfair_Display'] leading-10 text-black text-left">
                    {p.title}
                  </h3>
                </a>
              ))}

            </div>
          </div>

        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
