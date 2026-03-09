import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-900"
        >
            {/* Logo Container */}
            <div className="relative flex items-center justify-center mb-8">
                {/* Outer pulsing ring */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute w-32 h-32 rounded-full border border-primary-500/30"
                />

                {/* Inner pulsing ring */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.2
                    }}
                    className="absolute w-24 h-24 rounded-full border border-primary-500/50"
                />

                {/* Main Logo icon */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/30"
                >
                    <span className="text-white text-3xl font-bold tracking-tighter">U</span>
                </motion.div>
            </div>

            {/* Brand Text */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col items-center"
            >
                <h1 className="text-2xl font-bold text-white tracking-wide mb-2">Unistzu</h1>
                <div className="flex items-center gap-1">
                    <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">Loading</span>
                    {/* Animated dots */}
                    <div className="flex gap-1 ml-1">
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.2,
                                    ease: "easeInOut"
                                }}
                                className="w-1 h-1 bg-primary-500 rounded-full"
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
                className="absolute bottom-12 w-64 h-1 bg-gray-800 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <motion.div
                    className="h-full bg-gradient-to-r from-primary-600 to-primary-400 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                />
            </motion.div>
        </motion.div>
    );
};

export default LoadingScreen;
