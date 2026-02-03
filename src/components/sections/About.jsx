import { motion } from "framer-motion";
import { portfolioData } from "../../lib/data";

export function About() {
    const technologies = [
        ...portfolioData.skills.languages,
        ...portfolioData.skills.frontend,
        ...portfolioData.skills.backend,
        ...portfolioData.skills.tools
    ];

    // Double the array for seamless marquee
    const marqueeSkills = [...technologies, ...technologies];

    return (
        <section id="about" className="py-32 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="flex items-center gap-4 mb-16 justify-center">
                        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-24" />
                        <h2 className="text-4xl font-bold text-foreground">
                            About Me
                        </h2>
                        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-24" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        {/* Interactive Text Column */}
                        <div className="space-y-8 text-lg text-muted-foreground leading-relaxed relative z-10 order-2 md:order-1">
                            <motion.p
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                Hello! My name is <span className="text-primary font-bold">Hemanthsai</span>.
                                I enjoy creating things that live on the internet. My interest in web development started
                                back when I decided to try editing custom Tumblr themes — turns out hacking together
                                HTML & CSS is pretty fun!
                            </motion.p>
                            <motion.p
                                initial={{ x: -30, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                Fast-forward to today, and I've had the privilege of training at a vibrant tech institute
                                and building real-world projects. My main focus these days is building
                                <span className="text-primary font-medium"> accessible, inclusive products</span> and
                                digital experiences for a variety of clients.
                            </motion.p>

                            {/* Tech Marquee */}
                            <div className="pt-8">
                                <p className="mb-4 text-sm font-bold uppercase tracking-widest text-primary">Tech Arsenal</p>
                                <div className="relative flex overflow-hidden mask-gradient-x py-2">
                                    <div className="animate-marquee flex gap-4 whitespace-nowrap">
                                        {marqueeSkills.map((tech, index) => (
                                            <span
                                                key={`${tech}-${index}`}
                                                className="px-4 py-2 bg-secondary/30 rounded-full text-sm font-mono text-secondary-foreground border border-white/5 hover:border-primary/50 transition-colors cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="absolute top-0 animate-marquee2 flex gap-4 whitespace-nowrap ml-4">
                                        {marqueeSkills.map((tech, index) => (
                                            <span
                                                key={`${tech}-${index}-2`}
                                                className="px-4 py-2 bg-secondary/30 rounded-full text-sm font-mono text-secondary-foreground border border-white/5 hover:border-primary/50 transition-colors cursor-default"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Liquid Morphing Image */}
                        <div className="relative group flex justify-center order-1 md:order-2">
                            <div className="relative w-80 h-80">
                                {/* Animated Blob Layer */}
                                <div className="absolute inset-0 bg-primary/20 blur-3xl animate-pulse-slow rounded-full" />

                                {/* Morphing Shape */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-br from-primary via-blue-500 to-purple-600 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
                                    animate={{
                                        borderRadius: [
                                            "60% 40% 30% 70% / 60% 30% 70% 40%",
                                            "30% 60% 70% 40% / 50% 60% 30% 60%",
                                            "60% 40% 30% 70% / 60% 30% 70% 40%"
                                        ]
                                    }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                />

                                {/* Image Container (Masked) */}
                                <motion.div
                                    className="absolute inset-2 bg-black rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden flex items-center justify-center z-10"
                                    animate={{
                                        borderRadius: [
                                            "60% 40% 30% 70% / 60% 30% 70% 40%",
                                            "30% 60% 70% 40% / 50% 60% 30% 60%",
                                            "60% 40% 30% 70% / 60% 30% 70% 40%"
                                        ]
                                    }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                >
                                    {/* Placeholder/Actual Image */}
                                    <div className="w-full h-full bg-secondary flex items-center justify-center relative group-hover:scale-110 transition-transform duration-500">
                                        <span className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white/20 to-white/5">KH</span>
                                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
