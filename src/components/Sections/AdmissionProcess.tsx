import React from 'react';
import SectionWrapper from './SectionWrapper';
import { siteContent } from '../../data/content';
import { motion } from 'framer-motion';

const AdmissionProcess = () => {
    const { steps } = siteContent.admission;

    return (
        <SectionWrapper
            id="admission"
            title="Admission Process"
            subtitle="Your Journey to Becoming a Doctor"
            bgColor="gray"
        >
            <div className="relative mt-12 md:mt-20">
                {/* Connection Line (Desktop) */}
                <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-primary-100 -translate-y-1/2 z-0"></div>

                <div className="grid lg:grid-cols-4 gap-8 relative z-10 w-full max-w-5xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center group relative">
                            {/* Number Circle */}
                            <div className="w-16 h-16 bg-white border-4 border-primary-500 rounded-full flex items-center justify-center text-primary-600 font-bold text-2xl mb-6 shadow-lg z-10 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                {index + 1}
                            </div>

                            {/* Content */}
                            <div className="text-center w-full px-4 rounded-2xl p-6 bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                                <h4 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-20 p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm text-center">
                <p className="text-gray-600">
                    Estimated timeline from application to travel: <span className="font-bold text-primary-600">3-5 months</span>. We recommend starting early to avoid rush.
                </p>
            </div>
        </SectionWrapper>
    );
};

export default AdmissionProcess;
