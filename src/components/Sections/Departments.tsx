import React from 'react';
import { Link } from 'react-router-dom';
import { departments } from '../../data/content';
import SectionWrapper from './SectionWrapper';
import { ArrowRight, Code, ShieldCheck, PieChart, FlaskConical, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

const Departments = () => {
    const getIcon = (id: string) => {
        switch (id) {
            case 'technology': return <Code size={32} />;
            case 'medicine': return <Stethoscope size={32} />;
            case 'business': return <PieChart size={32} />;
            default: return <FlaskConical size={32} />;
        }
    };

    return (
        <SectionWrapper id="departments" title="Explore Our Departments" subtitle="Global Programs for Your Career Goals">
            <div className="grid md:grid-cols-3 gap-8">
                {departments.map((dept, idx) => (
                    <motion.div
                        key={dept.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-[2.5rem] p-10 border border-gray-100 shadow-sm hover:shadow-2xl transition-all relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full -mr-16 -mt-16 group-hover:bg-primary-100 transition-colors"></div>

                        <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center text-white mb-8 relative z-10 shadow-lg shadow-primary-500/20">
                            {getIcon(dept.id)}
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-6">{dept.name}</h3>

                        <div className="space-y-4 mb-10">
                            {dept.programs.map((prog) => (
                                <Link
                                    key={prog.slug}
                                    to={`/program/${prog.slug}`}
                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-primary-50 hover:text-primary-600 transition-all group/item"
                                >
                                    <span className="font-bold text-gray-700 group-hover/item:text-primary-600">{prog.name}</span>
                                    <ArrowRight size={18} className="opacity-0 group-hover/item:opacity-100 transition-all -translate-x-2 group-hover/item:translate-x-0" />
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                            <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-primary-500" /> WHO Recognized</span>
                            <span className="flex items-center gap-1"><ShieldCheck size={16} className="text-primary-500" /> English Medium</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Departments;
