import { motion } from 'framer-motion';

export function FloatingElements() {
    const shapes = [
        { size: 60, left: '10%', top: '20%', duration: 20, color: 'hsl(var(--primary) / 0.1)' },
        { size: 80, left: '80%', top: '10%', duration: 25, color: 'hsl(var(--primary) / 0.08)' },
        { size: 40, left: '70%', top: '60%', duration: 18, color: 'hsl(var(--primary) / 0.12)' },
        { size: 100, left: '15%', top: '70%', duration: 30, color: 'hsl(var(--primary) / 0.06)' },
        { size: 50, left: '90%', top: '80%', duration: 22, color: 'hsl(var(--primary) / 0.09)' },
    ];

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {shapes.map((shape, index) => (
                <motion.div
                    key={index}
                    className="absolute rounded-full blur-3xl"
                    style={{
                        width: shape.size,
                        height: shape.size,
                        left: shape.left,
                        top: shape.top,
                        background: shape.color,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, 20, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: shape.duration,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
}

export function CodeSymbols() {
    const symbols = ['<', '>', '{', '}', '/', '*', '=', ';'];

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-5">
            {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute text-4xl font-mono text-primary"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0.1, 0.3, 0.1],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 10 + Math.random() * 10,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                    }}
                >
                    {symbols[Math.floor(Math.random() * symbols.length)]}
                </motion.div>
            ))}
        </div>
    );
}
