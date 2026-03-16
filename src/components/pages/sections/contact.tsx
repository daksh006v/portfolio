"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { Send, X } from "lucide-react";
import SectionHeading from "@/components/section-heading";

export function Contact() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [step, setStep] = useState<number>(0); // 0: email, 1: name, 2: message
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const canSend = email.trim().length > 3 && message.trim().length > 4;

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!canSend) return;
        try {
            setStatus("sending");
            window.location.href = `mailto:${profile.contact.email}?subject=Portfolio%20Contact%20from%20${encodeURIComponent(
                name || "Anonymous",
            )}&body=${encodeURIComponent(message)}%0A%0Afrom:%20${encodeURIComponent(email)}`;
            setStatus("sent");
        } catch {
            setStatus("error");
        }
    };

    const onReset = () => {
        setStep(0);
        setEmail("");
        setName("");
        setMessage("");
        setStatus("idle");
    };

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault();
            setStep((s) => s + 1);
        }
    };

    return (
        <SectionHeading
            id="contact"
            text="Contact"
            className="px-4 py-12 md:px-8 md:py-16"
        >
            {/* Cross grid background */}
            <div className="absolute inset-0 size-full">
                <div className="before:bg-border after:bg-border relative h-full w-full before:absolute before:top-1/2 before:left-0 before:h-0.5 before:w-full after:absolute after:top-0 after:left-1/2 after:h-full after:w-0.5" />
            </div>

            <div className="relative z-10 mx-auto max-w-5xl">
                <form onSubmit={onSubmit} className="w-full">
                    {/* Terminal window */}
                    <div className="rounded-xl border-2 bg-background/80 backdrop-blur-sm overflow-hidden">
                        {/* Terminal header */}
                        <div className="border-b px-4 py-3 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/70" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                            <div className="w-3 h-3 rounded-full bg-green-500/70" />
                            <span className="text-foreground/40 font-mono text-xs ml-2">contact.sh</span>
                        </div>

                        <div className="p-6 space-y-5 font-mono text-sm">
                            {/* Step 0: email */}
                            {step >= 0 && (
                                <>
                                    <div className="text-foreground/90 flex items-start gap-2">
                                        <span className="text-emerald-400">$</span>
                                        <span>Could you share your email with me?</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-emerald-400">↪</span>
                                        <input
                                            type="email"
                                            required
                                            placeholder="you@domain.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onKeyDown={handleEnter}
                                            disabled={status === "sending" || status === "sent"}
                                            autoComplete="email"
                                            className="border-foreground/20 text-foreground placeholder:text-foreground/40 w-full rounded-md border bg-transparent px-3 py-2 outline-none focus:border-emerald-400/60 focus:ring-2 focus:ring-emerald-400/30"
                                        />
                                    </div>
                                </>
                            )}

                            {/* Step 1: name */}
                            {step >= 1 && (
                                <>
                                    <div className="text-foreground/90 flex items-start gap-2">
                                        <span className="text-sky-400">$</span>
                                        <span>Great! And may I know your name?</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-sky-400">↪</span>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            onKeyDown={handleEnter}
                                            autoComplete="name"
                                            className="border-foreground/20 text-foreground placeholder:text-foreground/40 w-full rounded-md border bg-transparent px-3 py-2 outline-none focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/30"
                                        />
                                    </div>
                                </>
                            )}

                            {/* Step 2: message */}
                            {step >= 2 && (
                                <>
                                    <div className="text-foreground/90 flex items-start gap-2">
                                        <span className="text-amber-400">$</span>
                                        <span>Awesome, now tell me how I can assist you today.</span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-amber-400 mt-2">↪</span>
                                        <textarea
                                            required
                                            rows={4}
                                            placeholder="Tell me about your project, timeline, and goals…"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            className="border-foreground/20 text-foreground placeholder:text-foreground/40 w-full resize-y rounded-md border bg-transparent px-3 py-2 outline-none focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/30"
                                        />
                                    </div>

                                    {/* Footer actions */}
                                    <div className="border-foreground/20 border-t border-dashed pt-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                type="button"
                                                onClick={onReset}
                                                className="inline-flex items-center gap-1 border-foreground/20 bg-foreground/5 hover:bg-foreground/10 font-mono text-xs rounded-md border px-3 py-1.5 transition-colors"
                                            >
                                                <X className="h-3.5 w-3.5" />
                                                Cancel
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={message.trim().length < 4 || status === "sending"}
                                                className="inline-flex items-center gap-1 border-foreground/20 bg-primary/10 text-foreground hover:bg-primary/20 border-2 font-mono text-xs rounded-md px-3 py-1.5 transition-colors disabled:cursor-not-allowed disabled:opacity-60"
                                            >
                                                <Send className="h-3.5 w-3.5" />
                                                {status === "sending" ? "Sending…" : status === "sent" ? "Sent!" : "Send"}
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}

                            {status === "sent" && (
                                <div className="font-mono text-emerald-400/90">✓ Message redirected.</div>
                            )}
                            {status === "error" && (
                                <div className="font-mono text-red-400/90">⚠ Something went wrong. Please try again.</div>
                            )}

                            {/* Prompt guide for progress */}
                            {step < 2 && status === "idle" && (
                                <div className="text-foreground/30 text-xs">
                                    Press <kbd className="border border-foreground/20 rounded px-1">Enter</kbd> to proceed to the next step
                                </div>
                            )}
                            {step === 1 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(2)}
                                    className="text-xs text-emerald-400/70 hover:text-emerald-400 font-mono transition-colors"
                                >
                                    → Continue to message
                                </button>
                            )}
                            {step === 0 && email.length > 3 && (
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="text-xs text-emerald-400/70 hover:text-emerald-400 font-mono transition-colors"
                                >
                                    → Continue
                                </button>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </SectionHeading>
    );
}
