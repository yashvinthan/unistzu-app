import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { siteContent } from '../../data/content';
import { CheckCircle2 } from 'lucide-react';

const Introduction = () => {
    const { heading, description, highlights } = siteContent.introduction;

    return (
        <SectionWrapper id="about" title={heading} bgColor="gray">
            <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="flex-1">
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                        {description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                            >
                                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                                    <CheckCircle2 size={18} />
                                </div>
                                <span className="font-medium text-gray-800">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex-1 relative">
                    <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                        <img
                            src="/images/stock/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg"
                            alt="Students studying"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary-500/10 hover:bg-transparent transition-colors duration-500"></div>
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-500/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl"></div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Introduction;
