import React from 'react';
import { motion } from 'framer-motion';
import { siteContent } from '../../data/content';
import { scrollToSection } from '../../utils/helpers';

const Hero = () => {
    const { headline, subheadline, ctaPrimary, ctaSecondary } = siteContent.hero;

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gray-900">
            {/* Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/stock/wonderlane-6zlgM-GUd6I-unsplash.jpg"
                    alt="University Campus"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-900/70 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-4 rounded-full bg-primary-500/20 text-primary-400 font-semibold text-sm mb-6 border border-primary-500/30">
                            Medical Education in Europe
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                            {headline}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
                            {subheadline}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-4 bg-primary-500 text-white rounded-xl font-bold text-lg hover:bg-primary-600 transition-all transform hover:scale-105 shadow-xl shadow-primary-500/20"
                        >
                            {ctaPrimary}
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-4 bg-white/10 text-white backdrop-blur-md border border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
                        >
                            {ctaSecondary}
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-16 flex items-center gap-8"
                    >
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-white">20k+</span>
                            <span className="text-gray-400 text-sm">Students WorldWide</span>
                        </div>
                        <div className="h-10 w-px bg-gray-700"></div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-white">#1</span>
                            <span className="text-gray-400 text-sm">Private University</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Hero Bottom - Floating elements or scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
                onClick={() => scrollToSection('about')}
            >
                <span className="text-white/50 text-xs uppercase tracking-widest">Scroll Down</span>
                <div className="w-px h-12 bg-gradient-to-b from-primary-500 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
