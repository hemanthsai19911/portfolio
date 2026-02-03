import { motion } from "framer-motion";
import { portfolioData } from "../../lib/data";
import { MagneticButton } from "../effects/MagneticButton";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, MessageCircle } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 sm:py-32 relative overflow-hidden flex flex-col items-center justify-center min-h-[70vh] sm:min-h-[80vh]">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto"
                >
                    <p className="text-primary font-bold tracking-widest uppercase mb-3 sm:mb-4 animate-pulse-slow text-xs sm:text-sm">What's Next?</p>
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 tracking-tight">
                        Let's Work <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Together</span>
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
                        I'm currently actively looking for new opportunities as a Junior Software Engineer.
                        Whether you have a question or just want to say hi, my inbox is always open!
                    </p>

                    <div className="flex flex-col items-center gap-6 sm:gap-8">
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 w-full sm:w-auto">
                            {/* Magnetic Email CTA */}
                            <MagneticButton className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-foreground text-background rounded-full text-base sm:text-lg font-bold overflow-hidden w-full sm:w-auto sm:min-w-[180px]">
                                <a href={`mailto:${portfolioData.personal.email}`} className="relative z-10 flex items-center justify-center gap-2">
                                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span>Say Hello</span>
                                </a>
                                <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            </MagneticButton>

                            {/* Magnetic WhatsApp CTA */}
                            <MagneticButton className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-foreground text-foreground rounded-full text-base sm:text-lg font-bold overflow-hidden w-full sm:w-auto sm:min-w-[180px]">
                                <a
                                    href={`https://wa.me/${portfolioData.personal.phone.replace(/[^0-9]/g, '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-10 flex items-center justify-center gap-2 group-hover:text-background transition-colors duration-300"
                                >
                                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                                    <span>WhatsApp</span>
                                </a>
                                <div className="absolute inset-0 bg-foreground translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            </MagneticButton>
                        </div>

                        {/* Social Orbit */}
                        <div className="flex gap-4 sm:gap-6 mt-4 sm:mt-8">
                            {[
                                { icon: Github, href: portfolioData.personal.github },
                                { icon: Linkedin, href: portfolioData.personal.linkedin },
                                { icon: Twitter, href: portfolioData.personal.twitter }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 sm:p-4 rounded-full bg-secondary/50 border border-border hover:border-primary/50 hover:bg-primary/10 hover:scale-110 transition-all duration-300"
                                    whileHover={{ y: -5 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Footer Credit (integrated) */}
            <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 text-center text-xs sm:text-sm text-muted-foreground px-4">
                <p>Designed & Built by Hemanthsai</p>
                <div className="flex justify-center gap-3 sm:gap-4 mt-2 text-[10px] sm:text-xs">
                    <span>React</span> • <span>Tailwind</span> • <span>Framer Motion</span>
                </div>
            </div>
        </section>
    );
}
