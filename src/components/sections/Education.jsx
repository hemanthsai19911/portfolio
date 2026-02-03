import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "../../lib/data";
import { useRef } from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";

export function Education() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="education" className="py-32 relative overflow-hidden" ref={ref}>
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent inline-block">
                        Journey & Achievements
                    </h2>
                    <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                </motion.div>

                <div className="relative grid md:grid-cols-2 gap-12 md:gap-0">

                    {/* Central Line (Desktop) */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border hidden md:block -translate-x-1/2">
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-primary"
                            style={{ height: lineHeight }}
                        />
                    </div>

                    {/* Education Items */}
                    <div className="space-y-12 md:space-y-24 md:pr-12 md:text-right">
                        <div className="md:hidden flex items-center gap-3 mb-6">
                            <GraduationCap className="text-primary h-6 w-6" />
                            <h3 className="text-2xl font-bold">Education</h3>
                        </div>

                        {portfolioData.education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="relative"
                            >
                                {/* Dot on Timeline */}
                                <div className="hidden md:block absolute top-6 -right-[57px] w-5 h-5 rounded-full border-4 border-background bg-primary z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                                <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg shadow-primary/5 group">
                                    <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-2 md:flex-row-reverse">
                                        <Calendar size={14} />
                                        {edu.year}
                                    </div>
                                    <h4 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{edu.degree}</h4>
                                    <p className="text-lg text-muted-foreground">{edu.institution}</p>
                                    {edu.grade && (
                                        <div className="mt-4 pt-4 border-t border-border/50 inline-block">
                                            <span className="text-sm font-mono bg-primary/10 text-primary px-3 py-1 rounded-full">{edu.grade}</span>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Certifications Items */}
                    <div className="space-y-8 md:space-y-12 md:pl-12 md:mt-12">
                        <div className="md:hidden flex items-center gap-3 mb-6 mt-12">
                            <Award className="text-primary h-6 w-6" />
                            <h3 className="text-2xl font-bold">Certifications</h3>
                        </div>

                        {portfolioData.certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Dot on Timeline */}
                                <div className="hidden md:block absolute top-6 -left-[57px] w-4 h-4 rounded-full border-2 border-background bg-muted-foreground z-10" />

                                <div className="bg-card/30 p-5 rounded-xl border border-white/5 hover:bg-card/50 transition-colors flex items-start gap-4">
                                    <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0">
                                        <Award size={20} />
                                    </div>
                                    <span className="text-foreground/90 font-medium leading-tight pt-1">
                                        {cert}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
