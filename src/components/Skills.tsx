import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional soft skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
            <div className="space-y-8">
              {portfolioData.skills.technical.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-8">Soft Skills</h3>
            <div className="flex flex-wrap gap-4">
              {portfolioData.skills.soft.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-muted px-6 py-4 rounded-xl border-2 border-transparent hover:border-primary/20 transition-all flex items-center gap-3"
                >
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span className="text-lg font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-primary/5 rounded-3xl border border-primary/10">
              <h4 className="text-xl font-bold mb-4 text-primary italic">Continuous Learner</h4>
              <p className="text-muted-foreground leading-relaxed italic">
                "I am constantly expanding my knowledge base and staying up-to-date with the latest industry trends and technologies."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
