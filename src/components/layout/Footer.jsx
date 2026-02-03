import { Github, Linkedin } from "lucide-react";
import { portfolioData } from "../../lib/data";

export function Footer() {
    return (
        <footer className="py-8 text-center text-sm text-muted-foreground bg-background border-t border-border">
            <div className="flex justify-center gap-6 mb-4 md:hidden">
                <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                >
                    <Github size={20} />
                </a>
                <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                >
                    <Linkedin size={20} />
                </a>
            </div>
            <p className="mb-2">Built with React, Tailwind CSS & Framer Motion</p>
            <p>
                Designed & Built by <span className="text-primary">{portfolioData.personal.name}</span>
            </p>
        </footer>
    );
}
