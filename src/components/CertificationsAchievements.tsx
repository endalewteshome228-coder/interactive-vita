import React from "react";
import { motion } from "framer-motion";
import { Award, Trophy, ExternalLink, Star } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CertificationsAchievements = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-primary rounded-2xl text-primary-foreground">
                <Award className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">Certifications</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portfolioData.certifications.map((cert, index) => (
                <Card key={index} className="border shadow-sm hover:shadow-md transition-all group overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <Award className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">{cert.date}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
                    <a
                      href={cert.link}
                      className="inline-flex items-center text-xs font-bold text-primary uppercase tracking-wider hover:underline gap-1"
                    >
                      Verify Credential <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-primary rounded-2xl text-primary-foreground">
                <Trophy className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold">Achievements</h2>
            </div>

            <div className="space-y-4">
              {portfolioData.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-start gap-6 p-6 bg-background rounded-3xl border shadow-sm hover:border-primary/30 transition-all"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-10 w-10 rounded-2xl bg-yellow-500/10 text-yellow-600 flex items-center justify-center">
                      <Star className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">{achievement.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {achievement.detail}
                    </p>
                  </div>
                </div>
              ))}
              
              <div className="relative mt-8 overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground">
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-2">Ready for New Challenges</h4>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
                    I am always looking for opportunities to grow and apply my skills to real-world problems. Let's build something great together.
                  </p>
                  <a href="#contact" className="px-6 py-2 bg-white text-primary rounded-full text-sm font-bold inline-block hover:bg-white/90 transition-colors">
                    Get In Touch
                  </a>
                </div>
                <Trophy className="absolute -right-8 -bottom-8 h-48 w-48 text-white/10 rotate-12" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsAchievements;
