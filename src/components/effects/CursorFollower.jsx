import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CursorFollower() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const updateCursorType = (e) => {
            const target = e.target;
            setIsPointer(
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                window.getComputedStyle(target).cursor === 'pointer'
            );
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', updateCursorType);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', updateCursorType);
        };
    }, []);

    return (
        <>
            {/* Outer cursor */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isPointer ? 1.5 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            >
                <div className="w-full h-full border-2 border-primary rounded-full opacity-50" />
            </motion.div>

            {/* Inner cursor */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isPointer ? 0 : 1,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 1000,
                    damping: 35,
                    mass: 0.2,
                }}
            >
                <div className="w-full h-full bg-primary rounded-full" />
            </motion.div>
        </>
    );
}
