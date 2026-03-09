import React from 'react';
import SectionWrapper from '../Sections/SectionWrapper';
import UniversitySection from '../Sections/University';
import { siteContent } from '../../data/content';
import { motion } from 'framer-motion';
import { Building2, Users, HeartPulse, GraduationCap, Clock } from 'lucide-react';
import SEO from '../common/SEO';

const UniversityPage = () => {
    const { university, upcomingUniversities } = siteContent;

    return (
        <div className="pt-24 pb-16">
            <SEO
                title="Our Universities | Unistzu"
                description="Discover our partner universities in Georgia offering WHO & NMC recognized medical programs for international students."
            />
            <UniversitySection />

            {/* Accreditations Grid */}
            <SectionWrapper id="accreditations" title="Official Accreditations" subtitle="Globally Recognized Standards" bgColor="gray">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {university.accreditations.map((acc: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center flex flex-col items-center justify-center hover:shadow-md transition-all"
                            >
                                <div className="text-primary-600 font-black text-2xl mb-2">{acc.name}</div>
                                <p className="text-gray-500 text-xs font-medium">{acc.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="facilities" title="World-Class Facilities" subtitle="Designed for Academic Excellence">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {university.facilities.map((fac: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:border-primary-200 transition-all duration-500 flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-inner">
                                    <Building2 size={32} />
                                </div>
                                <h4 className="text-xl font-black text-gray-900 mb-3 tracking-tight leading-tight">{fac.name}</h4>
                                <p className="text-gray-600 text-base leading-relaxed">{fac.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="student-services" title="Student Support Services" subtitle="Holistic Success Ecosystem" bgColor="gray">
                <div className="max-w-7xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {university.studentServices.map((service: string, i: number) => (
                            <div key={i} className="flex flex-col items-center text-center p-8 bg-white rounded-[2rem] shadow-lg shadow-gray-200/30 border border-gray-50 hover:border-primary-200 transition-all group">
                                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-5 group-hover:scale-110 transition-transform">
                                    <Users size={24} />
                                </div>
                                <span className="font-black text-gray-900 text-lg leading-tight">{service}</span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 p-8 md:p-10 bg-primary-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-10 shadow-2xl shadow-primary-900/40 relative overflow-hidden text-center md:text-left">
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl -mr-32 -mb-32"></div>
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-primary-400 shrink-0 relative z-10 mx-auto md:mx-0">
                            <HeartPulse size={32} />
                        </div>
                        <div className="relative z-10">
                            <h4 className="text-2xl font-bold mb-3">Global Health & Wellness</h4>
                            <p className="text-primary-100 text-lg leading-relaxed">
                                Comprehensive medical insurance is provided to all international students, covering consultations, specialist treatments, and 24/7 emergency services across Georgia through our partner clinics.
                            </p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="upcoming" title="Upcoming Institutions" subtitle="Expanding Your Opportunities">
                <div className="max-w-5xl mx-auto text-center">
                    <p className="max-w-2xl mx-auto text-gray-600 mb-16 text-lg leading-relaxed">
                        In our commitment to providing diverse educational paths, we are proud to announce upcoming partnerships and campus expansions in major Georgian cities.
                    </p>
                    <div className="grid md:grid-cols-2 gap-10">
                        {upcomingUniversities.map((uni: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="relative overflow-hidden group rounded-[3.5rem] p-1 bg-gradient-to-br from-gray-200 via-white to-primary-100 shadow-xl"
                            >
                                <div className="bg-white rounded-[2.4rem] p-8 md:p-10 h-full border border-white flex flex-col items-center">
                                    <div className="flex justify-between w-full items-start mb-8">
                                        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-primary-600">
                                            <GraduationCap size={32} />
                                        </div>
                                        <span className="px-5 py-2 bg-accent-50 text-accent-700 text-xs font-black rounded-full uppercase tracking-widest flex items-center gap-2">
                                            <Clock size={14} /> Coming Soon
                                        </span>
                                    </div>
                                    <h4 className="text-3xl font-bold text-gray-900 mb-3">{uni.name}</h4>
                                    <p className="text-gray-500 font-bold mb-8 flex items-center gap-2">
                                        <Building2 size={18} className="text-primary-500" /> {uni.location}
                                    </p>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {uni.highlights.map((h: string, j: number) => (
                                            <span key={j} className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-bold text-gray-700">
                                                {h}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default UniversityPage;
