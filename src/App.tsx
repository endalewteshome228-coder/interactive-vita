import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ExperienceEducation from "./components/ExperienceEducation";
import Projects from "./components/Projects";
import CertificationsAchievements from "./components/CertificationsAchievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <ExperienceEducation />
        <Projects />
        <CertificationsAchievements />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
