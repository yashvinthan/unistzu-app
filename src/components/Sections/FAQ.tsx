import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { siteContent } from '../../data/content';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const { faq } = siteContent;
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <SectionWrapper id="faq" title="Frequently Asked Questions" subtitle="Quick Answers to Common Queries">
            <div className="max-w-3xl mx-auto space-y-4">
                {faq.map((item, index) => (
                    <div
                        key={index}
                        className="border border-gray-100 rounded-2xl overflow-hidden bg-white shadow-sm"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                        >
                            <span className="text-lg font-bold text-gray-900">{item.question}</span>
                            {openIndex === index ? (
                                <ChevronUp className="text-primary-500" />
                            ) : (
                                <ChevronDown className="text-gray-400" />
                            )}
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default FAQ;
