import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Folder, Github, ExternalLink, Sparkles } from "lucide-react";
import { portfolioData } from "../../lib/data";

export function Projects() {
    return (
        <section id="projects" className="py-32 relative overflow-hidden bg-secondary/5">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent inline-flex items-center gap-3">
                        Featured Work <Sparkles className="text-primary w-8 h-8 animate-pulse" />
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                        A collection of projects showcasing my journey in building scalable, user-centric applications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }) {
    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    const maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-full"
            onMouseMove={handleMouseMove}
        >
            {/* Animated Rotating Gradient Border */}
            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-cyan-500 via-primary to-purple-500 opacity-20 blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy" />

            {/* Main Card Content */}
            <div className="relative h-full bg-card/80 backdrop-blur-xl rounded-2xl p-8 flex flex-col overflow-hidden border border-white/10 shadow-2xl">

                {/* Spotlight Overlay */}
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-50"
                    style={{ maskImage, WebkitMaskImage: maskImage }}
                >
                    <div className="absolute inset-0 bg-white/5" />
                </motion.div>

                {/* Decorative Background Pattern */}
                <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Folder size={120} />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                    {/* Header with Floating Icons */}
                    <div className="flex justify-between items-start mb-6">
                        <motion.div
                            className="p-3 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl text-primary border border-primary/20 shadow-inner"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <Folder size={24} />
                        </motion.div>

                        <div className="flex gap-3">
                            <ActionIcon href={project.github} icon={<Github size={18} />} label="Code" />
                            <ActionIcon href={project.link} icon={<ExternalLink size={18} />} label="Live" />
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-glow group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow text-sm">
                        {project.description}
                    </p>

                    <div className="pt-4 border-t border-white/5 mt-auto">
                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2.5 py-1 text-[11px] font-mono tracking-wide uppercase text-primary/80 bg-primary/5 border border-primary/10 rounded-md"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function ActionIcon({ href, icon, label }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-primary hover:text-white border border-white/10 transition-all duration-300 text-xs font-medium text-muted-foreground"
        >
            {icon}
            <span>{label}</span>
        </a>
    );
}
