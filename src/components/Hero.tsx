import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-grid-slate-100 dark:bg-grid-slate-800/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-medium mb-4 text-lg">Hi, I'm {portfolioData.personalInfo.name}</h2>
            <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6">
              {portfolioData.personalInfo.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
              {portfolioData.personalInfo.introduction}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <a href="#contact">
                  Contact Me <Mail className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg" className="rounded-full px-8 md:hidden lg:flex">
                <a href={portfolioData.personalInfo.cvUrl}>
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl rotate-6 -z-10 animate-pulse"></div>
              <div className="absolute inset-0 bg-primary/20 rounded-3xl -rotate-3 -z-10"></div>
              <img
                src={portfolioData.personalInfo.photo}
                alt={portfolioData.personalInfo.name}
                className="w-full h-full object-cover rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
