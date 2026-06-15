import React from "react";
import { portfolioData } from "@/data/portfolio";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-primary mb-2">
              {portfolioData.personalInfo.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {portfolioData.personalInfo.title} | {portfolioData.personalInfo.location}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-muted-foreground mb-4">
              &copy; {currentYear} {portfolioData.personalInfo.name}. All rights reserved.
            </p>
            <div className="text-xs text-muted-foreground/60 flex items-center gap-2">
              <span>Made with ❤️ using React & Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
