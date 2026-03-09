import React from 'react';
import SectionWrapper from '../Sections/SectionWrapper';
import EligibilitySection from '../Sections/Eligibility';
import { siteContent } from '../../data/content';
import SEO from '../common/SEO';

const EligibilityPage = () => {
    const { eligibility } = siteContent;

    return (
        <div className="pt-24 pb-16">
            <SEO
                title="Eligibility & Admission | Unistzu"
                description="Check European medical program eligibility requirements and explore our step-by-step admission process with Unistzu."
            />
            <EligibilitySection />

            <SectionWrapper id="admission-process" title="Step-by-Step Admission Process" subtitle="Your Roadmap to Unistzu">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-12">
                        {eligibility.process.map((item: any, idx: number) => (
                            <div key={idx} className="relative group text-center flex flex-col items-center">
                                {idx < eligibility.process.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-full w-full h-[3px] bg-primary-50 -ml-6 z-0 border-t border-dashed border-primary-200"></div>
                                )}
                                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/40 hover:shadow-2xl hover:border-primary-200 transition-all relative z-10 h-full flex flex-col items-center">
                                    <div className="w-14 h-14 bg-primary-900 text-white rounded-[1.2rem] flex items-center justify-center font-black text-xl mb-4 shadow-2xl shadow-primary-900/40 group-hover:scale-110 transition-transform">
                                        {idx + 1}
                                    </div>
                                    <h4 className="text-lg font-black text-gray-900 mb-2 tracking-tight leading-tight text-center">{item.step}</h4>
                                    <p className="text-gray-600 text-[13px] leading-relaxed font-medium text-center">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper id="eligibility-details" title="Detailed Admission Criteria" subtitle="Understanding the Requirements" bgColor="gray">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                    <div className="bg-white p-12 md:p-14 rounded-[3.5rem] border border-gray-100 shadow-2xl shadow-gray-200/40 flex flex-col items-center text-center">
                        <h3 className="text-2xl font-black text-gray-900 mb-12 flex flex-col items-center gap-4">
                            <div className="w-12 h-12 bg-primary-50 rounded-[1rem] flex items-center justify-center text-primary-600 shadow-inner">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            Core Admission Requirements
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4 w-full max-w-2xl">
                            {eligibility.requirements.map((req: any, idx: number) => (
                                <div key={idx} className="flex flex-col items-center p-6 bg-gray-50 rounded-[2rem] border border-gray-100 group hover:border-primary-200 hover:bg-white transition-all shadow-sm hover:shadow-xl">
                                    <div className="w-3 h-3 bg-primary-500 rounded-full mb-3 group-hover:scale-125 transition-transform shadow-lg shadow-primary-500/30"></div>
                                    <p className="text-gray-800 font-black text-base leading-tight">{req}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-primary-900 p-12 rounded-[3.5rem] text-white shadow-2xl shadow-primary-900/40 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                            <h3 className="text-2xl font-bold mb-6 relative z-10 text-primary-300">NEET Requirement (For Indians)</h3>
                            <p className="text-primary-100 text-lg leading-relaxed relative z-10 mb-8">
                                As per NMC guidelines, Indian students who wish to practice in India after their MD must qualify for NEET. However, admission to Unistzu is based on your 12th-grade performance and the university interview.
                            </p>
                            <div className="flex flex-wrap gap-4 relative z-10">
                                <div className="px-5 py-3 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                                    <span className="block text-primary-300 text-xs font-black uppercase tracking-wider mb-1">Age Limit</span>
                                    <span className="font-bold">17 to 25 Years</span>
                                </div>
                                <div className="px-5 py-3 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                                    <span className="block text-primary-300 text-xs font-black uppercase tracking-wider mb-1">Education Gap</span>
                                    <span className="font-bold">Up to 2 Years</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default EligibilityPage;
