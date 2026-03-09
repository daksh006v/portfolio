"use client";

import { profile } from "@/data/profile";
import { motion } from "motion/react";
import { Code2, Terminal, Wrench, Brain, ExternalLink } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
                    <div className="text-lg text-muted-foreground space-y-4">
                        {profile.intro.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                        <p>{profile.about}</p>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {/* Frontend */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
                    >
                        <Code2 className="w-10 h-10 mb-4 text-primary" />
                        <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                        <div className="flex flex-wrap gap-2">
                            {profile.skills.frontend.map((skill) => (
                                <span key={skill} className="text-sm text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Backend */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
                    >
                        <Terminal className="w-10 h-10 mb-4 text-primary" />
                        <h3 className="text-xl font-semibold mb-2">Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            {profile.skills.backend.map((skill) => (
                                <span key={skill} className="text-sm text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Tools */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
                    >
                        <Wrench className="w-10 h-10 mb-4 text-primary" />
                        <h3 className="text-xl font-semibold mb-2">Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {profile.skills.tools.map((skill) => (
                                <span key={skill} className="text-sm text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Learning */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
                    >
                        <Brain className="w-10 h-10 mb-4 text-primary" />
                        <h3 className="text-xl font-semibold mb-2">Learning</h3>
                        <div className="flex flex-wrap gap-2">
                            {profile.skills.learning.map((skill) => (
                                <span key={skill} className="text-sm text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
