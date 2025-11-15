// components/ContactMe.jsx
import React from "react";

function Variant4Icon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-zinc-100"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactMe() {
  return (
    <section
      className="
        w-full
        h-[450px] md:h-[500px] lg:h-[600px]
        rounded-2xl
        bg-cover bg-center bg-no-repeat
        flex items-center justify-center
        relative
      "
      style={{
        backgroundImage: "url('/home/contactmebg.png')",
      }}
    >
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        {/* Title */}
        <h2 className="text-white font-['Playfair_Display'] text-3xl md:text-4xl lg:text-5xl max-w-3xl leading-tight">
          Let’s turn ideas into intuitive products
        </h2>

        {/* Subtext */}
        <p className="text-zinc-200 text-base md:text-lg">Reach out at</p>

        {/* Links */}
        <div className="flex flex-col items-center gap-4 mt-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=iamgktr@gmail.com&su=Subject&body=Body"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl md:text-2xl underline flex items-center gap-2"
            aria-label="Compose email to iamgktr@gmail.com"
          >
            iamgktr@gmail.com <Variant4Icon />
          </a>

          <a
            href="https://wa.me/917892913538?text=Hi%20there%2C%20I%27d%20like%20to%20discuss%20a%20design%20project%20with%20you.%20Please%20let%20me%20know%20when%20you%27re%20available."
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl md:text-2xl underline flex items-center gap-2"
            aria-label="Message on WhatsApp"
          >
            +91-7892913538 <Variant4Icon />
          </a>
        </div>
      </div>
    </section>
  );
}
