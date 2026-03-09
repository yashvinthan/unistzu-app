import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { departments, ProgramDetails } from '../../data/content';
import SectionWrapper from '../Sections/SectionWrapper';
import {
    Clock,
    BookOpen,
    CircleDollarSign,
    CheckCircle2,
    GraduationCap,
    Briefcase,
    TrendingUp,
    ArrowLeft,
    ChevronRight,
    Search,
    Check
} from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../common/SEO';

const ProgramDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const [program, setProgram] = useState<ProgramDetails | null>(null);

    useEffect(() => {
        const allPrograms = departments.flatMap(d => d.programs);
        const found = allPrograms.find(p => p.slug === slug);
        if (found) {
            setProgram(found);
            window.scrollTo(0, 0);
        }
    }, [slug]);

    if (!program) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
                <div className="text-center">
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                        <Search size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Program Not Found</h2>
                    <p className="text-gray-600 mb-8">The academic program you are looking for does not exist or has been moved.</p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-700 transition-colors"
                    >
                        <ArrowLeft size={20} /> Back to Overview
                    </Link>
                </div>
            </div>
        );
    }

    const programSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOccupationalProgram",
        "name": program.name,
        "description": program.description,
        "provider": {
            "@type": "EducationalOrganization",
            "name": "Unistzu",
            "url": "https://unistzu.com"
        },
        "timeToComplete": `P${parseInt(program.duration)}Y`,
        "applicationDeadline": "2026-08-30",
        "occupationalCategory": program.careerOpportunities.join(", "),
        "educationalCredentialAwarded": program.degreeType,
        "financialAidEligible": "Yes"
    };

    return (
        <div className="pt-20 bg-white">
            <SEO
                title={`${program.name} Program | Unistzu`}
                description={`Detailed curriculum, admission criteria, and career prospects for the ${program.name} program.`}
                structuredData={programSchema}
            />
            {/* Hero Section */}
            <div className="bg-gray-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500 rounded-full blur-[150px] -mr-64 -mt-64"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-500 rounded-full blur-[120px] -ml-48 -mb-48"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center md:text-left">
                    <Link to="/" className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-black mb-10 transition-all group">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                            <ArrowLeft size={16} />
                        </div>
                        Back to Library
                    </Link>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                        <span className="px-5 py-1.5 bg-primary-500 text-white rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-primary-500/20">
                            {program.degreeType}
                        </span>
                        <span className="px-5 py-1.5 bg-white/10 text-white border border-white/20 rounded-full text-xs font-black uppercase tracking-widest backdrop-blur-md">
                            {program.duration}
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                        {program.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed font-medium">
                        {program.description}
                    </p>
                </div>
            </div>

            {/* Quick Info Bar */}
            <div className="bg-white border-b border-gray-100 sticky top-[72px] z-40 backdrop-blur-xl bg-white/90">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="flex flex-col items-center lg:items-start transition-all">
                            <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-[0.2em] mb-2">Duration</span>
                            <div className="flex items-center gap-2.5">
                                <Clock size={15} className="text-primary-500" />
                                <span className="font-semibold text-gray-900">{program.duration}</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center lg:items-start border-l border-gray-100 pl-4 lg:pl-10">
                            <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-[0.2em] mb-2">Credits</span>
                            <div className="flex items-center gap-2.5">
                                <BookOpen size={15} className="text-primary-500" />
                                <span className="font-semibold text-gray-900">{program.ects || '240'} ECTS</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center lg:items-start border-l border-gray-100 pl-4 lg:pl-10">
                            <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-[0.2em] mb-2">Investment</span>
                            <div className="flex items-center gap-2.5">
                                <CircleDollarSign size={15} className="text-primary-500" />
                                <span className="font-semibold text-gray-900">{program.annualFee}/Yr</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center lg:items-start border-l border-gray-100 pl-4 lg:pl-10">
                            <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-[0.2em] mb-2">Medium</span>
                            <div className="flex items-center gap-2.5">
                                <GraduationCap size={15} className="text-primary-500" />
                                <span className="font-semibold text-gray-900">{program.medium}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="grid lg:grid-cols-3 gap-20">
                    <div className="lg:col-span-2 space-y-24">
                        <section className="pt-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600">
                                    <CheckCircle2 size={20} />
                                </div>
                                Admission Criteria
                            </h2>
                            <div className="grid gap-3 w-full">
                                {program.eligibility.map((item, i) => (
                                    <div key={i} className="p-5 bg-white border border-gray-100 rounded-2xl flex items-center gap-4 group hover:border-primary-200 transition-all shadow-sm">
                                        <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 shrink-0">
                                            <ChevronRight size={16} />
                                        </div>
                                        <span className="text-gray-800 font-semibold text-base">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Curriculum */}
                        <section className="flex flex-col items-center text-center">
                            <h2 className="text-4xl font-black text-gray-900 mb-12 flex flex-col items-center gap-6">
                                <div className="w-16 h-16 bg-accent-50 rounded-2xl flex items-center justify-center text-accent-600 shadow-inner">
                                    <BookOpen size={32} />
                                </div>
                                Curriculum & Focus
                            </h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mb-12 w-full">
                                {program.subjects.map((subject, i) => (
                                    <div key={i} className="px-5 py-6 bg-white border border-gray-100 rounded-2xl shadow-sm text-gray-900 font-semibold text-sm flex items-center justify-center text-center hover:border-accent-200 transition-all">
                                        {subject}
                                    </div>
                                ))}
                            </div>
                            <div className="p-12 bg-accent-950 rounded-[4rem] text-white relative overflow-hidden w-full group">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-accent-500/20 rounded-full blur-[60px] -mr-24 -mt-24"></div>
                                <h4 className="text-3xl font-black mb-6 flex items-center justify-center gap-4">
                                    <div className="w-2 h-8 bg-accent-500 rounded-full"></div>
                                    Clinical / Practical Internship
                                </h4>
                                <p className="text-accent-100 text-xl leading-relaxed max-w-2xl mx-auto">{program.internship}</p>
                            </div>
                        </section>

                        {/* Careers */}
                        <section>
                            <h2 className="text-3xl font-black text-gray-900 mb-10 flex items-center gap-4">
                                <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-white">
                                    <Briefcase size={24} />
                                </div>
                                Global Career Prospects
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mb-12">
                                {program.careerOpportunities.map((job, i) => (
                                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:border-primary-100 transition-all group">
                                        <div className="w-2 h-2 bg-primary-500 rounded-full shrink-0 group-hover:scale-125 transition-transform"></div>
                                        <p className="font-semibold text-gray-900 text-sm leading-tight">{job}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-gray-900 rounded-[2.5rem] p-10 text-white flex flex-col md:flex-row items-center gap-8 shadow-xl shadow-gray-200/50">
                                <div className="w-20 h-20 bg-primary-600 rounded-2xl flex items-center justify-center shrink-0">
                                    <TrendingUp size={32} />
                                </div>
                                <div>
                                    <span className="bg-primary-500/10 text-primary-400 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] mb-3 inline-block">Global Benchmark</span>
                                    <h3 className="text-3xl font-bold mb-1">{program.startingSalary} <span className="text-primary-400 text-base font-normal">/ Avg Year 1</span></h3>
                                    <p className="text-gray-400 text-base">Estimated starting salary range based on international placement data.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-40 space-y-10">
                            <div className="bg-primary-600 rounded-[2.5rem] p-10 text-white shadow-2xl shadow-primary-500/20 text-center relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -mr-32 -mt-32"></div>
                                <h3 className="text-3xl font-bold mb-4 relative z-10 leading-tight">Ready to <br />Start?</h3>
                                <p className="mb-10 text-primary-50 text-base relative z-10 leading-relaxed">
                                    Join the next cohort of {program.name} and transform your global career.
                                </p>
                                <button className="w-full bg-white text-primary-600 py-4.5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all shadow-xl active:scale-95">
                                    Apply Now
                                </button>
                                <div className="mt-10 pt-8 border-t border-white/10 flex flex-col gap-4 text-xs font-semibold opacity-90">
                                    <div className="flex items-center gap-3 justify-center">
                                        <Check size={14} className="text-primary-300" /> 100% Online Registration
                                    </div>
                                    <div className="flex items-center gap-3 justify-center">
                                        <Check size={14} className="text-primary-300" /> Fast Visa Support
                                    </div>
                                    <div className="flex items-center gap-3 justify-center">
                                        <Check size={14} className="text-primary-300" /> Secure Payment Portal
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm">
                                <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2.5">
                                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                                    Estimated Fees
                                </h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <span className="text-gray-500 font-semibold text-sm">Per Year</span>
                                        <span className="font-bold text-primary-600 text-lg">{program.annualFee}</span>
                                    </div>
                                    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <span className="text-gray-500 font-semibold text-sm">Total Tuition</span>
                                        <span className="font-bold text-gray-900 text-lg">{program.totalFee}</span>
                                    </div>
                                    <p className="text-center text-[10px] text-gray-400 font-semibold uppercase tracking-widest pt-4">
                                        * Excludes Accommodation & Living
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramDetail;
