import React from 'react';
import SectionWrapper from './SectionWrapper';
import { siteContent } from '../../data/content';
import { Award, GraduationCap, MapPin, Building2, Users, HeartPulse, Cpu } from 'lucide-react';

const University = () => {
    const { name, founded, location, description, accreditations, highlights } = siteContent.university;

    const highlightIcons = [
        <Award size={24} />,
        <Cpu size={24} />,
        <Users size={24} />,
        <HeartPulse size={24} />
    ];

    return (
        <SectionWrapper id="university" title="University Overview" subtitle={name}>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                    <div className="flex flex-wrap gap-4 mb-8">
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
                            <Building2 size={16} /> Founded: {founded}
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold text-gray-700">
                            <MapPin size={16} /> {location}
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-gray-900 leading-tight">Leading Private University in Georgia</h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {description}
                    </p>

                    <div className="mb-8">
                        <h4 className="text-sm uppercase tracking-widest text-primary-600 font-bold mb-4">Accreditations</h4>
                        <div className="flex flex-wrap gap-4">
                            {accreditations.map((acc: any, i: number) => (
                                <div key={i} className="px-6 py-3 bg-white border border-gray-200 rounded-xl font-bold text-gray-800 shadow-sm hover:border-primary-300 transition-colors">
                                    {acc.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid gap-6">
                    {highlights.map((item, index) => (
                        <div key={index} className="flex gap-5 bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all transform hover:-translate-y-1">
                            <div className="w-12 h-12 shrink-0 bg-primary-500 rounded-xl flex items-center justify-center text-white">
                                {highlightIcons[index] || <Building2 size={24} />}
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default University;
