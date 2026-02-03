import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "../../lib/data";
import { MagneticButton } from "../effects/MagneticButton";
import { useState, useEffect } from "react";

export function Hero() {
    const { name, summary, github, linkedin, email } = portfolioData.personal;
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Typing effect for tagline
    const [displayText, setDisplayText] = useState("");
    const fullText = "I build things for the web.";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 80);
        return () => clearInterval(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center pt-20 pb-10 relative" id="hero">
            <motion.div
                className="container mx-auto px-6"
                style={{ y, opacity }}
            >
                <motion.div
                    className="max-w-3xl"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p
                        variants={itemVariants}
                        className="text-primary font-medium mb-4 text-lg"
                    >
                        Hi, my name is
                    </motion.p>

                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6 relative"
                    >
                        <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient">
                            {name}
                        </span>
                    </motion.h1>

                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-6xl font-bold tracking-tight text-muted-foreground mb-8 min-h-[80px]"
                    >
                        {displayText}
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="text-primary"
                        >
                            |
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg text-muted-foreground max-w-xl mb-12 leading-relaxed"
                    >
                        {summary}
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap gap-4 items-center"
                    >
                        <MagneticButton className="group inline-flex items-center px-8 py-4 text-sm font-medium text-primary-foreground bg-gradient-to-r from-primary to-blue-600 rounded-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 relative overflow-hidden">
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <a href="#projects" className="relative z-10 flex items-center">
                                Check out my work
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                        </MagneticButton>

                        <motion.div
                            className="flex items-center gap-6 px-4"
                            variants={itemVariants}
                        >
                            {[
                                { href: github, Icon: Github },
                                { href: linkedin, Icon: Linkedin },
                                { href: `mailto:${email}`, Icon: Mail }
                            ].map(({ href, Icon }, index) => (
                                <motion.a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative group"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-primary rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity"
                                        animate={{
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                        }}
                                    />
                                    <Icon className="relative z-10 text-muted-foreground group-hover:text-primary transition-colors" size={24} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
                    <motion.div
                        className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
                        animate={{ y: [0, 16, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
