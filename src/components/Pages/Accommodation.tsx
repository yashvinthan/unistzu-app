import React from 'react';
import SectionWrapper from '../Sections/SectionWrapper';
import { siteContent } from '../../data/content';
import { motion } from 'framer-motion';
import { Wifi, Shield, Soup, Calendar, Wind, BookOpen } from 'lucide-react';
import SEO from '../common/SEO';

const AccommodationPage = () => {
    const { accommodation } = siteContent as any;

    const amenityIcons = [
        <Wifi size={24} />,
        <Shield size={24} />,
        <Soup size={24} />,
        <Calendar size={24} />,
        <Wind size={24} />,
        <BookOpen size={24} />
    ];

    return (
        <div className="pt-24 pb-16 bg-white">
            <SEO
                title="Student Accommodation | Unistzu"
                description="Safe, comfortable, and affordable student housing with secure amenities and Indian mess options for international students."
            />
            <SectionWrapper id="accommodation" title={accommodation.title} subtitle="Safe & Comfortable Student Housing">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
                        {accommodation.description}
                    </p>

                    {/* Image Gallery */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                        {accommodation.images.map((img: string, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-[4/3] bg-gray-100 border border-gray-100"
                            >
                                <img src={img} alt={`Room view ${i + 1}`} className="w-full h-full object-cover" />
                            </motion.div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100">
                            <h3 className="text-2xl font-bold text-gray-900 mb-8">Amenities Included</h3>
                            <div className="grid sm:grid-cols-2 gap-6">
                                {accommodation.amenities.map((item: string, i: number) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                                        <div className="text-primary-500">
                                            {amenityIcons[i] || <div className="w-6 h-6 bg-primary-100 rounded" />}
                                        </div>
                                        <span className="font-bold text-gray-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">For Parents: Safety First</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    We understand that safety is a top priority. Our student residence features 24/7 security personnel, biometric access control, and comprehensive CCTV coverage of all common areas.
                                </p>
                            </div>
                            <div className="p-8 bg-primary-900 rounded-[2.5rem] text-white">
                                <h4 className="text-xl font-bold mb-4">Indian Mess & Cuisine</h4>
                                <p className="text-primary-100 mb-6 font-medium">
                                    A dedicated Indian mess is available, providing healthy and hygienic vegetarian and non-vegetarian meals that taste just like home.
                                </p>
                                <div className="flex gap-4">
                                    <span className="px-4 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider">Breakfast</span>
                                    <span className="px-4 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider">Lunch</span>
                                    <span className="px-4 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider">Dinner</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
};

export default AccommodationPage;
