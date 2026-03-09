import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

interface SectionWrapperProps {
    id: string;
    children: ReactNode;
    className?: string;
    bgColor?: 'white' | 'gray' | 'primary' | 'accent';
    title?: string;
    subtitle?: string;
}

const SectionWrapper = ({
    id,
    children,
    className,
    bgColor = 'white',
    title,
    subtitle
}: SectionWrapperProps) => {
    const bgClasses = {
        white: 'bg-white',
        gray: 'bg-gray-50',
        primary: 'bg-primary-50',
        accent: 'bg-accent-50'
    };

    return (
        <section
            id={id}
            style={{ scrollMarginTop: '5rem' }}
            className={cn(
                "section-padding overflow-hidden",
                bgClasses[bgColor],
                className
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                {(title || subtitle) && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center mb-10 md:mb-12"
                    >
                        {title && <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 tracking-tight">{title}</h2>}
                        {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
                        <div className="w-16 h-1 bg-primary-500 mx-auto mt-6 rounded-full"></div>
                    </motion.div>
                )}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default SectionWrapper;
