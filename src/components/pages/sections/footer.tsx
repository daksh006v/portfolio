import { Logo } from "@/components/ui/logo";

import { profile } from "@/data/profile";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border py-8">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <Logo className="w-8 h-8" />
                        <span className="text-sm text-muted-foreground">
                            © {currentYear} {profile.name}. All rights reserved.
                        </span>
                    </div>

                    <div className="flex gap-6 text-sm text-muted-foreground">
                        <a href="#home" className="hover:text-foreground transition-colors">
                            Home
                        </a>
                        <a href="#about" className="hover:text-foreground transition-colors">
                            About
                        </a>
                        <a href="#projects" className="hover:text-foreground transition-colors">
                            Projects
                        </a>
                        <a href="#contact" className="hover:text-foreground transition-colors">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
