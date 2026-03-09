import React from 'react';
import SectionWrapper from './SectionWrapper';
import { siteContent } from '../../data/content';
import { DollarSign, Home, Coffee, TrainFront, Layers, Wifi, HeartPulse, BookOpen } from 'lucide-react';

const Fees = () => {
    const { tuition, categories } = siteContent.fees;

    const icons = {
        "Accommodation": <Home size={24} />,
        "Living Expenses": <Layers size={24} />,
        "Food": <Coffee size={24} />,
        "Transport": <TrainFront size={24} />,
        "Indian Food Mess": <Coffee size={24} />,
        "Living & Transit": <TrainFront size={24} />,
        "Internet & Mobile": <Wifi size={24} />,
        "Health & Misc": <HeartPulse size={24} />,
        "Study Materials": <BookOpen size={24} />,
    };

    return (
        <SectionWrapper
            id="fees"
            title="Fees & Expenses"
            subtitle="Affordable Medical Education"
            bgColor="gray"
        >
            <div className="max-w-3xl mx-auto mb-12">
                <div className="bg-primary-500 rounded-[2rem] p-8 md:p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-primary-500/30">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <p className="text-primary-100 uppercase tracking-[0.2em] font-black mb-4 text-xs">Annual Tuition Fees</p>
                    <h3 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">{tuition}</h3>
                    <p className="text-lg md:text-xl text-primary-100 font-medium opacity-90 max-w-xl mx-auto leading-relaxed">
                        (Standard rate for international students)
                    </p>
                </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {categories.map((cat, index) => (
                    <div key={index} className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all group text-center">
                        <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                            {icons[cat.name as keyof typeof icons] || <DollarSign size={24} />}
                        </div>
                        <h4 className="text-primary-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4">{cat.name}</h4>
                        <div className="flex flex-col items-center">
                            <div className="flex items-start justify-center mb-1">
                                <span className="text-lg font-bold text-primary-500 mt-1 mr-1">$</span>
                                <span className="text-4xl md:text-5xl font-black text-slate-900 leading-none tracking-tighter">
                                    {cat.amount.replace('$', '')}
                                </span>
                            </div>
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">{cat.period}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <p className="text-gray-500 italic">
                    * Note: Prices are estimates and may vary based on lifestyle and individual choices.
                </p>
            </div>
        </SectionWrapper>
    );
};

export default Fees;
