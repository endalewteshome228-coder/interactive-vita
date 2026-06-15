import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceEducation = () => {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-primary rounded-2xl text-primary-foreground">
                <Briefcase className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">Work Experience</h2>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
              {portfolioData.experience.map((exp, index) => (
                <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border border-background bg-muted text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <Card className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border-none shadow-sm hover:shadow-md transition-all">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <CardTitle className="text-xl font-bold text-primary">{exp.title}</CardTitle>
                        <Badge variant="secondary" className="w-fit">{exp.period}</Badge>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            {resp}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-[10px] uppercase tracking-wider">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-primary rounded-2xl text-primary-foreground">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>

            <div className="space-y-8">
              {portfolioData.education.map((edu, index) => (
                <Card key={index} className="p-8 rounded-3xl border-none shadow-sm hover:shadow-md transition-all group">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="px-4 py-1 text-primary border-primary/20">
                        {edu.period}
                      </Badge>
                      {edu.gpa && (
                        <span className="text-sm font-bold text-primary">GPA: {edu.gpa}</span>
                      )}
                    </div>
                    <CardTitle className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </CardTitle>
                    <div className="flex items-center text-muted-foreground gap-2">
                      <MapPin className="h-4 w-4" />
                      <span className="font-medium text-foreground">{edu.institution}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-muted-foreground leading-relaxed">
                      Focused on software engineering, database management, and advanced web technologies. Participating in various research and coding competitions.
                    </p>
                  </CardContent>
                </Card>
              ))}
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-6 bg-background rounded-2xl text-center border shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">4+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Years Study</div>
                </div>
                <div className="p-6 bg-background rounded-2xl text-center border shadow-sm">
                  <div className="text-3xl font-bold text-primary mb-1">10+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Projects Completed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
