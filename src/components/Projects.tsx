import React from "react";
import { motion } from "framer-motion";
import { CodeIcon, ExternalLinkIcon, Code2Icon, GlobeIcon } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills in full-stack development and UI design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden flex flex-col group border shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button asChild size="icon" variant="secondary" className="rounded-full">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <CodeIcon className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button asChild size="icon" variant="secondary" className="rounded-full">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLinkIcon className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-[10px] bg-primary/10 text-primary border-none">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-xl font-bold line-clamp-1">{project.name}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                    {project.description}
                  </p>
                  <div className="space-y-1">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Code2Icon className="h-3 w-3 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="pt-0 border-t mt-4 flex justify-between items-center p-6">
                  <a href={project.github} className="text-sm font-medium flex items-center gap-1 hover:text-primary transition-colors">
                    <CodeIcon className="h-4 w-4" /> Source
                  </a>
                  <a href={project.demo} className="text-sm font-medium flex items-center gap-1 hover:text-primary transition-colors">
                    <GlobeIcon className="h-4 w-4" /> Live Demo
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button asChild variant="outline" className="rounded-full">
            <a href={portfolioData.contact.socials.github} target="_blank" rel="noopener noreferrer">
              View More on GitHub <CodeIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
