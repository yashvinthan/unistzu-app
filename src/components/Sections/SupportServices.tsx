import React from 'react';
import SectionWrapper from './SectionWrapper';
import { siteContent } from '../../data/content';
import { Headphones, ShieldCheck, HeartHandshake, Utensils, PlaneLanding } from 'lucide-react';

const SupportServices = () => {
    const { services } = siteContent.support;

    const icons = [
        <ShieldCheck size={32} />,
        <Headphones size={32} />,
        <PlaneLanding size={32} />,
        <Utensils size={32} />,
        <HeartHandshake size={32} />,
    ];

    return (
        <SectionWrapper id="support" title="Student Support Services" subtitle="End-to-End Assistance">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="group p-10 bg-white rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-primary-100 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center h-full"
                    >
                        <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mb-8 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500 shadow-inner">
                            {React.cloneElement(icons[index] as React.ReactElement || <HeartHandshake size={32} />, { size: 32 })}
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors tracking-tight">{service.title}</h4>
                        <p className="text-gray-600 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default SupportServices;
