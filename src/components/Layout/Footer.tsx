import React from 'react';
import { navigationData } from '../../data/content';
import { scrollToSection } from '../../utils/helpers';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">U</div>
                            <span className="font-heading font-bold text-2xl tracking-tight">Unistzu</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Providing end-to-end support for Indian students aiming to study medicine internationally, particularly in Georgia.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors text-white">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors text-white">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors text-white">
                                <Youtube size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors text-white">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Quick Links</h4>
                        <ul className="space-y-4">
                            {navigationData.sections.slice(0, 6).map((section) => (
                                <li key={section.id}>
                                    <button
                                        onClick={() => scrollToSection(section.id)}
                                        className="text-gray-400 hover:text-primary-400 transition-colors"
                                    >
                                        {section.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">More Info</h4>
                        <ul className="space-y-4">
                            {navigationData.sections.slice(6).map((section) => (
                                <li key={section.id}>
                                    <button
                                        onClick={() => scrollToSection(section.id)}
                                        className="text-gray-400 hover:text-primary-400 transition-colors"
                                    >
                                        {section.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-gray-400">
                                <Mail size={18} className="shrink-0 text-primary-500" />
                                <span>admissions@unistzu.com</span>
                            </li>
                            <li className="flex gap-3 text-gray-400">
                                <Phone size={18} className="shrink-0 text-primary-500" />
                                <span>+995 568 15 43 54</span>
                            </li>
                            <li className="mt-6 p-4 bg-white/5 rounded-2xl border border-white/10">
                                <p className="text-xs text-gray-500 mb-2 uppercase tracking-widest font-bold">Office Hours</p>
                                <p className="text-sm">Mon - Sat: 10:00 AM - 7:00 PM</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Unistzu. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
