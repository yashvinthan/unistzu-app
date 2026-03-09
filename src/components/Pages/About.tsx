import React from 'react';
import SectionWrapper from '../Sections/SectionWrapper';
import { siteContent } from '../../data/content';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SEO from '../common/SEO';

const About = () => {
    const { about, university } = siteContent;

    return (
        <div className="pt-24 pb-16">
            <SEO
                title="About Us | Unistzu"
                description="Learn more about Unistzu, our mission, vision, and how we empower the next generation of global medical professionals."
            />
            <SectionWrapper id="about-page" title="About Unistzu" subtitle="Empowering the Next Generation of Global Professionals">
                <div className="max-w-4xl mx-auto">
                    <div className="prose prose-lg prose-primary max-w-none text-center">
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                            {siteContent.introduction.description}
                        </p>

                        {/* Mission & Vision */}
                        <div className="grid md:grid-cols-2 gap-12 mb-24 items-stretch">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 flex flex-col items-center text-center hover:border-primary-200 transition-all duration-500"
                            >
                                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-8 text-primary-600 shadow-inner">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <h3 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">Our Mission</h3>
                                <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
                                    {about.mission}
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="bg-primary-900 p-8 md:p-10 rounded-[2.5rem] text-white shadow-2xl shadow-primary-900/40 flex flex-col items-center text-center hover:bg-primary-800 transition-all duration-500"
                            >
                                <div className="w-16 h-16 bg-primary-400/20 rounded-2xl flex items-center justify-center mb-8 text-primary-300 backdrop-blur-sm">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                                </div>
                                <h3 className="text-3xl font-black mb-6 tracking-tight">Our Vision</h3>
                                <p className="text-primary-100 text-lg leading-relaxed max-w-sm">
                                    {about.vision}
                                </p>
                            </motion.div>
                        </div>

                        {/* Core Values */}
                        <div className="mb-24">
                            <h2 className="text-4xl font-black text-gray-900 mb-16 text-center">Our Core Values</h2>
                            <div className="grid sm:grid-cols-2 gap-10">
                                {about.values.map((value, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.02 }}
                                        className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/40 text-center flex flex-col items-center hover:border-primary-200 transition-all group"
                                    >
                                        <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-8 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-inner">
                                            <CheckCircle2 size={28} />
                                        </div>
                                        <h4 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{value.title}</h4>
                                        <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Strategic Goals */}
                        <div className="mb-24 bg-gray-50 p-16 md:p-20 rounded-[4rem] text-center border border-gray-100">
                            <h2 className="text-4xl font-black text-gray-900 mb-16">Strategic Goals</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                {about.strategicGoals.map((goal, idx) => (
                                    <div key={idx} className="flex flex-col items-center p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
                                        <div className="w-12 h-12 bg-primary-900 text-white rounded-full mb-6 flex items-center justify-center shrink-0 shadow-lg shadow-primary-900/20 group-hover:scale-110 transition-transform">
                                            <CheckCircle2 size={24} />
                                        </div>
                                        <p className="text-gray-800 font-black text-xl leading-tight">{goal}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Accreditations */}
                        <div className="bg-gray-900 p-16 md:p-20 rounded-[4.5rem] text-white relative overflow-hidden text-center border border-gray-800 shadow-2xl">
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
                            <h3 className="text-4xl font-black mb-16 relative z-10">Global Accreditations <br /><span className="text-primary-400">& Recognitions</span></h3>
                            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 relative z-10">
                                {university.accreditations.map((acc, idx) => (
                                    <div key={idx} className="group p-8 bg-white/5 rounded-[2.5rem] border border-white/10 hover:border-primary-500/50 transition-all flex flex-col items-center">
                                        <h4 className="text-primary-400 font-black text-2xl mb-3 group-hover:text-primary-300 transition-colors tracking-tight">{acc.name}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed font-medium">{acc.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default About;
