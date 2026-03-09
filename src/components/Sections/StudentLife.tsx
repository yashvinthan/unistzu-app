import React from 'react';
import SectionWrapper from './SectionWrapper';
import { siteContent } from '../../data/content';
import { motion } from 'framer-motion';

const StudentLife = () => {
    const { highlights } = siteContent.studentLife;

    const images = [
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
    ];

    const altTags = [
        "International medical students studying on our partner campuses",
        "Student social gathering in Tbilisi",
        "International students participating in campus activities",
        "Student interaction in the university library"
    ];

    return (
        <SectionWrapper id="student-life" title="Life in Georgia" subtitle="Beyond Academic Excellence">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className={cn(
                                "rounded-3xl overflow-hidden shadow-lg h-48 md:h-64",
                                i === 1 || i === 2 ? "mt-8" : ""
                            )}
                        >
                            <img src={img} alt={altTags[i]} className="w-full h-full object-cover" />
                        </motion.div>
                    ))}
                </div>

                <div className="order-1 lg:order-2">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Experience Tbilisi: A Safe & Vibrant Medical Hub</h3>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Tbilisi is one of the safest cities in the world for international students. With Unistzu's guidance, you'll join a community of thousands of students from around the globe, creating lifelong memories.
                    </p>
                    <div className="space-y-4">
                        {highlights.map((item, i) => (
                            <div key={i} className="flex gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 shrink-0"></div>
                                <p className="font-medium text-gray-700">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

// Helper inside for simplicity in this script, will be removed if cn not imported
const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default StudentLife;
