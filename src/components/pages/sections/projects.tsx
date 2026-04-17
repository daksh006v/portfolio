"use client";

import { profile } from "@/data/profile";
import { motion } from "motion/react";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import HeadingLine from "@/components/ui/heading-line";
import { cn } from "@/lib/utils";

const tagColors: Record<string, string> = {
    HTML: "bg-orange-500/10 text-orange-500 border-orange-500/30",
    CSS: "bg-blue-500/10 text-blue-500 border-blue-500/30",
    JavaScript: "bg-yellow-500/10 text-yellow-600 border-yellow-500/30",
    React: "bg-cyan-500/10 text-cyan-500 border-cyan-500/30",
    "Node.js": "bg-green-500/10 text-green-600 border-green-500/30",
    "Next.js": "bg-neutral-500/10 text-neutral-400 border-neutral-500/30",
    TypeScript: "bg-blue-600/10 text-blue-500 border-blue-600/30",
    MongoDB: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
    Vite: "bg-purple-500/10 text-purple-500 border-purple-500/30",
};

import { useState } from "react";

export function Projects() {
    const [activeTab, setActiveTab] = useState("All");
    const categories = ["All", "Full Stack", "Frontend", "Clones"];

    const projects = profile.projects
        .filter((p) => activeTab === "All" || p.category === activeTab)
        .map((p) => ({
            ...p,
            date: "2026",
            status: "completed",
            github: p.github || profile.contact.github,
        }));

    return (
        <SectionHeading id="projects" text="Projects">
            {/* Tabs Filtering */}
            <div className="flex flex-wrap items-center justify-center gap-2 py-8 bg-muted/20 border-b">
                {categories.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={cn(
                            "px-5 py-2 text-sm font-mono rounded-full border transition-all duration-300",
                            activeTab === tab
                                ? "bg-foreground text-background border-foreground font-semibold shadow-md"
                                : "hover:bg-foreground/10 text-foreground/70 border-foreground/20"
                        )}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="divide-y relative min-h-[400px]">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative"
                    >
                        <div className="grid lg:grid-cols-2">
                            {/* Image Side */}
                            <div className="bg-muted/20 relative overflow-hidden border-b lg:border-r lg:border-b-0">
                                {/* Cross pattern background */}
                                <div className="absolute inset-0">
                                    <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
                                </div>

                                {/* Image Container */}
                                <div className="relative inset-0 z-10 p-8 md:p-12 lg:p-16">
                                    <div className="group/image relative">
                                        {/* Frame corners */}
                                        <div className="border-foreground/20 absolute -top-2 -left-2 h-8 w-8 border-t-2 border-l-2 transition-all group-hover:-top-3 group-hover:-left-3" />
                                        <div className="border-foreground/20 absolute -top-2 -right-2 h-8 w-8 border-t-2 border-r-2 transition-all group-hover:-top-3 group-hover:-right-3" />
                                        <div className="border-foreground/20 absolute -bottom-2 -left-2 h-8 w-8 border-b-2 border-l-2 transition-all group-hover:-bottom-3 group-hover:-left-3" />
                                        <div className="border-foreground/20 absolute -right-2 -bottom-2 h-8 w-8 border-r-2 border-b-2 transition-all group-hover:-right-3 group-hover:-bottom-3" />

                                        {/* Main image placeholder or actual image */}
                                        <div className="bg-background relative overflow-hidden border-2 group/img-container">
                                            <div className="relative aspect-video overflow-hidden flex items-center justify-center bg-card/40">
                                                {/* @ts-ignore - type safe enough for now */}
                                                {project.image ? (
                                                    <img 
                                                        // @ts-ignore
                                                        src={project.image} 
                                                        alt={`${project.title} - React Node.js Project by Daksh Bajaniya`}
                                                        loading="lazy"
                                                        className="w-full h-full object-cover transition-transform duration-700 group-hover/img-container:scale-105"
                                                    />
                                                ) : (
                                                    <div className="flex flex-col items-center gap-3 opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                                                        <div className="w-16 h-16 border border-foreground/20 rounded-full flex items-center justify-center">
                                                            <div className="w-8 h-8 border border-foreground/20 rounded-full" />
                                                        </div>
                                                        <span className="font-mono text-xs text-foreground/50 uppercase tracking-widest">{project.title}</span>
                                                    </div>
                                                )}
                                                {/* Overlay gradient on hover */}
                                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-multiply" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="relative flex flex-col justify-center overflow-hidden p-8 md:p-12 lg:p-16">
                                {/* Date & Status */}
                                <div className="mb-6 flex flex-wrap items-center gap-3">
                                    <time className="text-muted-foreground font-mono text-xs">
                                        {project.date}
                                    </time>
                                    <div className="bg-border h-4 w-px" />
                                    <div className="inline-flex items-center gap-1.5">
                                        <div
                                            className={cn(
                                                "h-2 w-2 rounded-full animate-pulse",
                                                project.status === "completed"
                                                    ? "bg-green-500"
                                                    : "bg-yellow-500",
                                            )}
                                        />
                                        <span className="text-muted-foreground font-mono text-xs uppercase">
                                            {project.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Title */}
                                <div className="mb-6">
                                    <h3 className="font-incognito text-3xl font-bold lg:text-4xl">
                                        {project.title}
                                    </h3>
                                    <HeadingLine className="mt-3" />
                                </div>

                                {/* Description */}
                                <p className="text-muted-foreground mb-6 text-sm leading-relaxed md:text-base">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="mb-8 flex flex-wrap gap-2">
                                    {project.tech.map((tag) => (
                                        <span
                                            key={tag}
                                            className={cn(
                                                "border font-mono text-xs px-2.5 py-1 rounded-md",
                                                tagColors[tag] ?? "bg-muted/30 text-muted-foreground border-border",
                                            )}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn inline-flex items-center gap-2 border-2 font-medium px-5 py-2 rounded-lg bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 text-sm"
                                    >
                                        <Github className="h-4 w-4" />
                                        View Code
                                        <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                    </a>

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn inline-flex items-center gap-2 border-2 font-medium px-5 py-2 rounded-lg hover:bg-foreground/5 transition-all duration-200 text-sm"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        {project.title === "WebClones Collection" ? "View Collection Hub" : "Live Demo"}
                                        <ArrowUpRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                                    </a>
                                </div>

                                {/* Slanted decorative lines */}
                                <div className="absolute -right-4 -bottom-32 w-full translate-x-1/4 translate-y-1/4 rotate-[-30deg]">
                                    <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[4px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-1" />
                                    <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[8px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-3" />
                                    <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[12px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-5" />
                                    <div className="to-background border-primary/80 from-primary via-primary/90 -ml-[16px] h-12 w-full border-t bg-linear-to-r via-30% transition-transform duration-300 group-hover:-translate-y-7" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* View All footer */}
            <div className="border-t">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="py-12 text-center"
                >
                    <a
                        href={profile.contact.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center font-mono text-sm hover:text-primary transition-colors"
                    >
                        <span className="bg-foreground/40 mr-2 inline-block h-px w-8 transition-all group-hover:w-12" />
                        VIEW ALL PROJECTS ON GITHUB
                        <span className="bg-foreground/40 ml-2 inline-block h-px w-8 transition-all group-hover:w-12" />
                    </a>
                </motion.div>
            </div>
        </SectionHeading>
    );
}
