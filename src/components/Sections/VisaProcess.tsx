import React from 'react';
import SectionWrapper from './SectionWrapper';
import { siteContent } from '../../data/content';
import { Shield, Plane, Landmark, Calendar } from 'lucide-react';

const VisaProcess = () => {
    const { type, processingTime, requirements } = siteContent.visa_info;

    return (
        <SectionWrapper
            id="visa"
            title="Visa Process"
            subtitle={type}
            bgColor="gray"
        >
            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mb-6 shadow-inner">
                            <Shield size={32} />
                        </div>
                        <h4 className="text-2xl font-bold text-gray-900 mb-8 uppercase tracking-tight">Visa Requirements</h4>
                        <ul className="grid sm:grid-cols-1 gap-6 w-full max-w-md">
                            {requirements.map((req: string, i: number) => (
                                <li key={i} className="flex flex-col items-center p-4 bg-primary-50/50 rounded-2xl border border-primary-100/50 transition-all hover:bg-primary-50">
                                    <p className="text-gray-700 font-medium text-center">{req}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-primary-900 p-12 rounded-[3.5rem] text-white flex flex-col items-center text-center shadow-xl shadow-primary-900/40 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full -mr-32 -mt-32 blur-[100px] transition-all duration-700 group-hover:bg-primary-500/20"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-400/5 rounded-full -ml-32 -mb-32 blur-[100px]"></div>

                        <div className="w-16 h-16 bg-primary-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-primary-400 mb-8 shadow-lg">
                            <Calendar size={32} />
                        </div>
                        <span className="text-sm font-bold tracking-[0.3em] text-primary-400 uppercase mb-4 opacity-80">Estimated Timeline</span>
                        <p className="text-5xl md:text-6xl font-black mb-6 tracking-tighter bg-gradient-to-b from-white to-primary-200 bg-clip-text text-transparent">{processingTime}</p>
                        <div className="w-12 h-1 bg-primary-500 rounded-full mb-6"></div>
                        <p className="text-primary-300 font-medium text-lg leading-relaxed max-w-xs">Starting from the day of submission in India.</p>
                    </div>
                </div>

                <div className="relative">
                    <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-sm border border-gray-100 h-full flex flex-col items-center">
                        <h4 className="text-3xl font-bold text-gray-900 mb-10 text-center uppercase tracking-tight">Step-by-Step Visa Flow</h4>
                        <div className="space-y-10 w-full max-w-md">
                            {[
                                { title: "Consular Registration", desc: "Registering with the Georgian Consulate in India." },
                                { title: "Interview Scheduling", desc: "Booking appointment for document verification." },
                                { title: "Submission", desc: "Handing over documents and biometric data." },
                                { title: "Visa Issuance", desc: "Digital visa or passport collection with stamping." }
                            ].map((step, i) => (
                                <div key={i} className="flex flex-col items-center text-center group">
                                    <div className="relative mb-6">
                                        <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 font-black text-xl shadow-inner group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                            {i + 1}
                                        </div>
                                        {i < 3 && (
                                            <div className="absolute top-14 left-1/2 -translate-x-1/2 w-0.5 h-10 bg-gradient-to-b from-primary-200 to-transparent"></div>
                                        )}
                                    </div>
                                    <h5 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors tracking-tight">{step.title}</h5>
                                    <p className="text-gray-600 leading-relaxed text-sm max-w-[280px]">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default VisaProcess;
