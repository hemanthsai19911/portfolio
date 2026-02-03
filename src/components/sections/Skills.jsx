import { motion } from "framer-motion";
import { portfolioData } from "../../lib/data";
import { useState } from "react";

const skillCategories = [
    { name: "Frontend", key: "frontend", color: "from-blue-400 to-cyan-300", bg: "bg-blue-500/10" },
    { name: "Backend", key: "backend", color: "from-purple-400 to-pink-300", bg: "bg-purple-500/10" },
    { name: "Database", key: "database", color: "from-emerald-400 to-green-300", bg: "bg-green-500/10" },
    { name: "Cloud & DevOps", key: "cloud", color: "from-orange-400 to-red-300", bg: "bg-orange-500/10" },
    { name: "Tools", key: "tools", color: "from-yellow-400 to-amber-300", bg: "bg-yellow-500/10" },
    { name: "Languages", key: "languages", color: "from-indigo-400 to-violet-300", bg: "bg-indigo-500/10" },
];

export function Skills() {

    return (
        <section id="skills" className="py-32 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent inline-block">
                        Skills Universe
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                        Explore the technologies I use to build digital experiences.
                        Hover over a category to expand its ecosystem.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {skillCategories.map((category, index) => (
                        <CategoryOrb
                            key={category.key}
                            category={category}
                            skills={portfolioData.skills[category.key]}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CategoryOrb({ category, skills, index }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="flex flex-col items-center justify-center relative h-[300px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* The Central Orb */}
            <motion.div
                className={`relative z-20 w-32 h-32 rounded-full flex items-center justify-center cursor-pointer backdrop-blur-md border border-white/10 shadow-lg ${category.bg}`}
                animate={{
                    scale: isHovered ? 1.1 : 1,
                    boxShadow: isHovered
                        ? `0 0 50px -10px var(--primary)`
                        : `0 0 20px -5px transparent`
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {/* Inner Gradient */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${category.color} opacity-20`} />

                {/* Category Icon/Text */}
                <h3 className="font-bold text-lg text-foreground z-30 relative text-center px-2 drop-shadow-md">
                    {category.name}
                </h3>

                {/* Orbit Rings */}
                <motion.div
                    className="absolute inset-[-10px] border border-primary/20 rounded-full z-10"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute inset-[-20px] border border-primary/10 rounded-full border-dashed z-10"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
            </motion.div>

            {/* Floating Skills */}
            <div className="absolute inset-0 pointer-events-none z-30">
                {skills.map((skill, i) => {
                    const angle = (i / skills.length) * 2 * Math.PI;
                    const radius = 110;
                    const x = Math.cos(angle) * (isHovered ? radius : 0);
                    const y = Math.sin(angle) * (isHovered ? radius : 0);

                    return (
                        <motion.div
                            key={skill}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            animate={{
                                x,
                                y,
                                opacity: isHovered ? 1 : 0,
                                scale: isHovered ? 1 : 0,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 15,
                                delay: isHovered ? i * 0.05 : 0
                            }}
                        >
                            <motion.div
                                className="bg-card px-4 py-2 rounded-full border border-primary/20 shadow-lg text-sm font-semibold whitespace-nowrap text-foreground z-40"
                                whileHover={{ scale: 1.1, zIndex: 50, borderColor: "var(--primary)" }}
                            >
                                {skill}
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
