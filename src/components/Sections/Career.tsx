import React from 'react';
import SectionWrapper from './SectionWrapper';
import { siteContent } from '../../data/content';
import { Globe, Briefcase, GraduationCap, TrendingUp } from 'lucide-react';

const Career = () => {
    const { opportunities } = siteContent.career;

    const icons = [<TrendingUp />, <Globe />, <Briefcase />, <GraduationCap />];

    return (
        <SectionWrapper
            id="career"
            title="Global Career Prospects"
            subtitle="Where will your degree take you?"
            bgColor="gray"
        >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {opportunities.map((opp, i) => (
                    <div
                        key={i}
                        className="group bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-primary-100 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center h-full"
                    >
                        <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mb-8 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500 shadow-inner">
                            {React.cloneElement(icons[i] as React.ReactElement, { size: 32 })}
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors uppercase tracking-tight">{opp.title}</h4>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            {opp.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-20 flex flex-col md:flex-row items-center gap-10 p-10 bg-primary-50 rounded-[3rem] border border-primary-100">
                <div className="shrink-0 w-24 h-24 bg-white rounded-3xl flex items-center justify-center text-primary-500 shadow-sm border border-primary-100">
                    <Globe size={48} />
                </div>
                <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Globally Recognized Degree</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Medical degrees from our partner institutions are listed in the World Directory of Medical Schools (WDOMS) and recognized by the ECFMG (USA), GMC (UK), and medical councils across Europe and Asia.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Career;
