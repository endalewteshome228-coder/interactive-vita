import React from "react";
import { motion } from "framer-motion";
import { User, Target, Lightbulb, Zap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know me better - my journey, motivations, and what I bring to the table.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <User className="h-6 w-6 text-primary" /> My Biography
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {portfolioData.personalInfo.bio}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {portfolioData.personalInfo.background}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" /> Career Objective
                </h4>
                <p className="text-sm text-muted-foreground">{portfolioData.personalInfo.objective}</p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" /> Interests
                </h4>
                <div className="flex flex-wrap gap-2">
                  {portfolioData.personalInfo.interests.map((interest) => (
                    <span key={interest} className="px-3 py-1 bg-background border rounded-full text-xs">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" /> Key Strengths
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {portfolioData.personalInfo.strengths.map((strength, index) => (
                <Card key={index} className="border-none shadow-sm bg-background">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {index + 1}
                    </div>
                    <span className="font-medium">{strength}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
