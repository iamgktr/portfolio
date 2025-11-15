import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import AboutMe from "@/components/AboutMe";
import MyWorks from "@/components/MyWorks";
import MyDesignCareer from "@/components/MyDesignCareer";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="px-4 md:px-10">
      {/* 🟩 NavBar Section */}
      <NavBar />

      {/* 🟩 Hero Section */}
      <Hero />

      {/* 🟩 AboutMe Section */}
      <AboutMe />

      {/* 🟩 MyWork Section */}
      <MyWorks />

      {/* 🟩 MyDesignCareer Section */}
      <MyDesignCareer />

      {/* 🟦 Contact Me Section */}
      <ContactMe />

      {/* 🟦 Footer Section */}
      <Footer />
    </main>
  );
}

