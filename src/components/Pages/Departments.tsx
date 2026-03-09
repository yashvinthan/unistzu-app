import React from 'react';
import SectionWrapper from '../Sections/SectionWrapper';
import DepartmentsSection from '../Sections/Departments';

import { siteContent } from '../../data/content';
import { motion } from 'framer-motion';
import { BookOpen, Map, Users2, Zap, GraduationCap, Microscope } from 'lucide-react';
import SEO from '../common/SEO';

const DepartmentsPage = () => {
    return (
        <div className="pt-24 pb-16">
            <SEO
                title="Academic Programs | Unistzu"
                description="Explore top-tier medical and healthcare academic programs offered by Unistzu partner universities."
            />
            <DepartmentsSection />

            <SectionWrapper id="academic-excellence" title="Academic Ecosystem" subtitle="Innovative Learning & Research Pathways">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center mb-24 text-center">
                        <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 leading-tight max-w-4xl">Expert Guidance for Your <span className="text-primary-600">Global Medical Career</span></h3>
                        <p className="text-xl text-gray-600 mb-16 leading-relaxed max-w-3xl">
                            Our specialized ecosystem ensures that every student transitions from academic theory to global clinical practice with confidence and high-level proficiency.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 w-full">
                            <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center p-10 bg-white rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:border-primary-200 transition-all">
                                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-8 shadow-inner">
                                    <BookOpen size={28} />
                                </div>
                                <h4 className="text-2xl font-black text-gray-900 mb-4">Academic Depth</h4>
                                <p className="text-gray-600 font-medium">One-on-one faculty sessions focusing on personalized curriculum mapping and research goals.</p>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center p-10 bg-white rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:border-accent-200 transition-all">
                                <div className="w-16 h-16 bg-accent-100 rounded-2xl flex items-center justify-center text-accent-600 mb-8 shadow-inner">
                                    <Map size={28} />
                                </div>
                                <h4 className="text-2xl font-black text-gray-900 mb-4">Clinical Tours</h4>
                                <p className="text-gray-600 font-medium">Guided access to Georgia's top simulation centers and university-affiliated multi-profile clinics.</p>
                            </motion.div>
                            <motion.div whileHover={{ y: -5 }} className="flex flex-col items-center p-10 bg-primary-900 rounded-[3rem] text-white shadow-2xl shadow-primary-900/30 hover:bg-primary-800 transition-all">
                                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-primary-300 mb-8 backdrop-blur-md">
                                    <Users2 size={28} />
                                </div>
                                <h4 className="text-2xl font-black mb-4">Alumni Network</h4>
                                <p className="text-primary-100 font-medium">Direct mentorship from graduates currently excelling in UK, USA, and European medical systems.</p>
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="bg-primary-50 p-6 rounded-3xl text-center flex flex-col items-center justify-center shadow-inner hover:shadow-lg transition-all"
                        >
                            <Zap size={32} className="text-primary-600 mb-2" />
                            <span className="text-3xl font-black text-primary-900 leading-none">98%</span>
                            <span className="text-[10px] font-bold text-primary-700 uppercase tracking-widest mt-2">Graduation Rate</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="bg-gray-900 p-6 rounded-3xl text-center flex flex-col items-center justify-center shadow-2xl shadow-gray-900/40 text-white hover:shadow-primary-900/20 transition-all"
                        >
                            <GraduationCap size={32} className="text-primary-400 mb-2" />
                            <span className="text-3xl font-black leading-none">15k+</span>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Global Alumni</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-accent-50 p-6 rounded-3xl text-center flex flex-col items-center justify-center shadow-inner hover:shadow-lg transition-all"
                        >
                            <Microscope size={32} className="text-accent-600 mb-2" />
                            <span className="text-3xl font-black text-accent-900 leading-none">50+</span>
                            <span className="text-[10px] font-bold text-accent-700 uppercase tracking-widest mt-2">Research Labs</span>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-6 rounded-3xl text-center flex flex-col items-center justify-center shadow-xl border border-gray-100 hover:border-primary-200 transition-all"
                        >
                            <BookOpen size={32} className="text-primary-500 mb-2" />
                            <span className="text-3xl font-black text-gray-900 leading-none">10:1</span>
                            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2">Student Ratio</span>
                        </motion.div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default DepartmentsPage;
