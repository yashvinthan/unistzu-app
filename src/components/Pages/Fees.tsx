import React from 'react';
import SectionWrapper from '../Sections/SectionWrapper';
import FeesSection from '../Sections/Fees';
import { siteContent } from '../../data/content';
import { motion } from 'framer-motion';
import { Wallet, Info, CheckCircle2, Award, ArrowRight } from 'lucide-react';
import SEO from '../common/SEO';

const FeesPage = () => {
    const { fees } = siteContent as any;

    return (
        <div className="pt-24 pb-16">
            <SEO
                title="Fees & Scholarships | Unistzu"
                description="View transparent and affordable fee structures for medical education in Georgia, with information on scholarships and financial planning."
            />
            <FeesSection />

            <SectionWrapper id="payment-schedule" title="Financial Transparency" subtitle="Transparent Costs for Your Peace of Mind">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        {fees.categories.map((cat: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:border-primary-200 transition-all flex flex-col items-center text-center"
                            >
                                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-8">
                                    <Wallet size={28} />
                                </div>
                                <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{cat.name}</h4>
                                <p className="text-gray-600 leading-relaxed mb-6">{cat.description}</p>
                                <div className="mt-auto pt-6 border-t border-gray-100 w-full flex items-center justify-center gap-3 text-primary-600 font-bold">
                                    <span className="text-sm uppercase tracking-wider">Payment Term:</span>
                                    <span>Flexible</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="bg-gray-900 p-12 rounded-[4rem] text-white relative overflow-hidden text-center md:text-left">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                        <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
                            <div className="max-w-xl">
                                <h3 className="text-3xl font-bold mb-6">Zero Hidden Charges</h3>
                                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                    At Unistzu, we prioritize long-term relationships with students and parents. Our support services ensure a comprehensive fee structure covering academic services, registration, and guidance without hidden costs.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                    <div className="flex items-center gap-2 bg-white/5 px-5 py-3 rounded-2xl border border-white/10">
                                        <CheckCircle2 size={18} className="text-primary-400" />
                                        <span className="font-bold">No Capitation Fee</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white/5 px-5 py-3 rounded-2xl border border-white/10">
                                        <CheckCircle2 size={18} className="text-primary-400" />
                                        <span className="font-bold">Semester Installments</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:ml-auto bg-primary-800/50 p-10 rounded-[3rem] border border-primary-700/50 backdrop-blur-md">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-400">
                                        <Info size={24} />
                                    </div>
                                    <h5 className="text-xl font-bold">Budgeting Advice</h5>
                                </div>
                                <p className="text-primary-100 leading-relaxed mb-6">
                                    We recommend students plan for an extra <span className="text-white font-bold">$1,000 - $1,200 annually</span> for personal travel across Europe, textbooks, and specialized winter gear for the Caucasus mountains.
                                </p>
                                <div className="h-2 bg-primary-700 rounded-full overflow-hidden">
                                    <div className="w-3/4 h-full bg-primary-400"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="scholarships" title="Rewards for Excellence" subtitle="Scholarships & Financial Aid" bgColor="gray">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-10">
                        {fees.scholarships.map((s: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-xl flex flex-col items-center text-center overflow-hidden relative group hover:border-accent-200 transition-all"
                            >
                                {/* Fixed Corner Badge */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-accent-100 rounded-bl-[2.5rem] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 hidden md:flex pr-2 pb-2 border-l border-b border-accent-200/50">
                                    <Award size={28} className="text-accent-600" />
                                </div>
                                <div className="w-14 h-14 bg-accent-50 rounded-2xl flex items-center justify-center text-accent-600 mb-6 md:hidden">
                                    <Award size={28} />
                                </div>
                                <h4 className="text-2xl font-black text-gray-900 mb-4 tracking-tight">{s.title}</h4>
                                <p className="text-gray-600 leading-relaxed mb-8 text-base max-w-sm">{s.description}</p>
                                <button className="bg-primary-900 text-white px-8 py-4 rounded-2xl font-black text-base flex items-center gap-3 hover:bg-primary-800 transition-all shadow-xl shadow-primary-900/20 hover:-translate-y-1 active:scale-95">
                                    Apply for Aid <ArrowRight size={20} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default FeesPage;
