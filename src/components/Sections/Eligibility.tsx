import React from 'react';
import SectionWrapper from './SectionWrapper';
import { siteContent } from '../../data/content';
import { Check, ClipboardList } from 'lucide-react';

const Eligibility = () => {
    const { title, requirements } = siteContent.eligibility;

    return (
        <SectionWrapper id="eligibility" title={title} subtitle="Minimum Admission Criteria">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="flex-1 w-full">
                    <div className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-2xl shadow-primary-500/5 border border-primary-50 border-t-8 border-t-primary-500 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-8 shadow-inner">
                            <ClipboardList size={32} />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-10 tracking-tight">Are you eligible?</h3>
                        <div className="grid gap-6 w-full max-w-lg">
                            {requirements.map((req, index) => (
                                <div key={index} className="flex flex-col items-center p-6 bg-primary-50/50 rounded-3xl border border-primary-100/30 transition-all hover:bg-primary-50">
                                    <div className="mb-4 w-8 h-8 shrink-0 bg-accent-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-accent-500/30">
                                        <Check size={18} strokeWidth={4} />
                                    </div>
                                    <p className="text-lg text-gray-700 font-medium leading-relaxed">{req}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Simple & Transparent Admission</h3>
                    <p className="text-xl text-gray-600 leading-relaxed mb-10">
                        We ensure that talented students have the opportunity to pursue their dreams. Our eligibility criteria follow international standards while remaining accessible for qualified Indian applicants.
                    </p>
                    <div className="p-6 bg-accent-50 rounded-2xl border border-accent-100 inline-block text-left">
                        <p className="text-accent-800 font-bold mb-1">Important Highlight:</p>
                        <p className="text-accent-700">NEET is not mandatory for admission through Unistzu's partner institutions, providing flexibility for students to secure their seats early.</p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Eligibility;
