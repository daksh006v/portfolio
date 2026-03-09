"use client";

import { profile } from "@/data/profile";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, FileText, Youtube, Code } from "lucide-react";

export function Contact() {
    const socialLinks = [
        { icon: Github, href: profile.contact.github, label: "GitHub" },
        { icon: Linkedin, href: profile.contact.linkedin, label: "LinkedIn" },
        { icon: Youtube, href: profile.contact.youtube, label: "YouTube" },
        { icon: Code, href: profile.contact.leetcode, label: "LeetCode" },
        { icon: FileText, href: profile.contact.resume, label: "Resume" },
        { icon: Mail, href: `mailto:${profile.contact.email}`, label: "Email" },
    ];

    return (
        <section id="contact" className="py-20 md:py-32">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Get in Touch</h2>
                    <p className="text-lg text-muted-foreground mb-12">
                        I&apos;m always open to new opportunities and collaborations.
                        Feel free to reach out!
                    </p>

                    <div className="flex justify-center gap-6 mb-12 flex-wrap">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.1 }}
                                className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>

                    <motion.a
                        href={`mailto:${profile.contact.email}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
                    >
                        Send Message
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
