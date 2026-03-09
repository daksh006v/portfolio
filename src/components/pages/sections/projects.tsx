"use client";

import { profile } from "@/data/profile";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

export function Projects() {
    return (
        <section id="projects" className="py-20 md:py-32 bg-secondary/20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Projects</h2>
                    <p className="text-lg text-muted-foreground">
                        Here are some of my recent projects that showcase my skills and experience.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {profile.projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                        >
                            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5" />

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 text-sm bg-secondary rounded-full"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
