import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Send, Phone, Mail, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name too long"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(8, "Phone number is too short").max(20, "Phone number is too long"),
    message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message too long"),
    preferredContact: z.enum(['email', 'phone']).optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        // Simulate API call
        console.log('Form data:', data);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitted(true);
    };

    return (
        <SectionWrapper id="contact" title="Contact an Advisor" subtitle="Start Your Medical Journey Today" bgColor="primary">
            <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-sm border border-primary-100 flex flex-col items-center text-center">
                        <h4 className="text-3xl font-bold text-gray-900 mb-10 uppercase tracking-tight">Our Contact Details</h4>
                        <div className="space-y-10 w-full max-w-sm">
                            <div className="group flex flex-col items-center">
                                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mb-4 shadow-inner group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                    <Phone size={32} />
                                </div>
                                <h5 className="text-xl font-bold text-gray-900 mb-1">Phone</h5>
                                <p className="text-gray-600 text-lg">+995 568 15 43 54</p>
                            </div>
                            <div className="group flex flex-col items-center">
                                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-500 mb-4 shadow-inner group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                    <Mail size={32} />
                                </div>
                                <h5 className="text-xl font-bold text-gray-900 mb-1">Email</h5>
                                <p className="text-gray-600 text-lg">admissions@unistzu.com</p>
                            </div>
                            <a
                                href="https://wa.me/995568154354"
                                target="_blank"
                                rel="noreferrer"
                                className="group flex flex-col items-center hover:scale-105 transition-transform cursor-pointer"
                            >
                                <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-500 mb-4 shadow-inner group-hover:bg-green-500 group-hover:text-white transition-all duration-300">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.666.598 1.236.784 1.41.871.173.086.275.072.375-.043.101-.115.434-.505.549-.68.114-.175.231-.144.39-.087.159.058 1.014.478 1.187.565.174.087.289.13.332.202.043.073.043.42-.102.825z" />
                                        <path d="M12.031 2c5.514 0 10 4.486 10 10s-4.486 10-10 10c-1.802 0-3.486-.484-4.941-1.321l-5.09 1.336 1.355-4.965c-.917-1.503-1.433-3.262-1.433-5.12 0-5.514 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12 0 2.112.548 4.09 1.501 5.815l-1.928 7.075 7.234-1.898c1.685.884 3.593 1.388 5.613 1.388 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
                                    </svg>
                                </div>
                                <h5 className="text-xl font-bold text-gray-900 mb-1">WhatsApp</h5>
                                <p className="text-gray-600 text-lg">+995 568 15 43 54</p>
                            </a>
                        </div>
                    </div>

                    <div className="p-10 bg-gradient-to-br from-primary-900 to-primary-800 rounded-[2.5rem] text-white overflow-hidden relative shadow-xl shadow-primary-900/20 group">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl -mr-24 -mt-24 transition-transform group-hover:scale-110"></div>
                        <div className="relative z-10">
                            <div className="text-4xl text-primary-400 font-serif mb-4 opacity-50 italic">"</div>
                            <h4 className="text-2xl font-bold mb-6 leading-tight tracking-tight">
                                Securing your future is our priority. Talk to our experts for a personalized admission plan.
                            </h4>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-1 bg-primary-500 rounded-full"></div>
                                <p className="text-primary-300 font-medium tracking-wide uppercase text-sm">Unistzu Admission Team</p>
                            </div>
                        </div>
                        <div className="absolute bottom-4 right-4 text-primary-500/10 font-serif text-8xl pointer-events-none select-none">”</div>
                    </div>
                </div>

                <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-primary-500/10 border border-primary-50">
                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="h-full flex flex-col items-center justify-center text-center py-10"
                        >
                            <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center text-white mb-6">
                                <CheckCircle2 size={48} />
                            </div>
                            <h4 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h4>
                            <p className="text-lg text-gray-600 mb-8">Thank you for reaching out. An advisor will contact you within 24 hours.</p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="text-primary-500 font-bold hover:underline"
                            >
                                Send another message
                            </button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                    <input
                                        {...register('name')}
                                        id="name"
                                        className={cn(
                                            "w-full px-5 py-3 rounded-xl border focus:ring-2 focus:primary-500 outline-none transition-all",
                                            errors.name ? "border-red-500 bg-red-50" : "border-gray-200"
                                        )}
                                        placeholder="e.g. Rahul Sharma"
                                    />
                                    {errors.name && <p className="mt-1 text-sm text-red-500 font-medium">{errors.name.message}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                    <input
                                        {...register('email')}
                                        id="email"
                                        className={cn(
                                            "w-full px-5 py-3 rounded-xl border focus:ring-2 focus:primary-500 outline-none transition-all",
                                            errors.email ? "border-red-500 bg-red-50" : "border-gray-200"
                                        )}
                                        placeholder="e.g. rahul@example.com"
                                    />
                                    {errors.email && <p className="mt-1 text-sm text-red-500 font-medium">{errors.email.message}</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                <input
                                    {...register('phone')}
                                    id="phone"
                                    className={cn(
                                        "w-full px-5 py-3 rounded-xl border focus:ring-2 focus:primary-500 outline-none transition-all",
                                        errors.phone ? "border-red-500 bg-red-50" : "border-gray-200"
                                    )}
                                    placeholder="e.g. +91 98765 43210"
                                />
                                {errors.phone && <p className="mt-1 text-sm text-red-500 font-medium">{errors.phone.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Your Message</label>
                                <textarea
                                    {...register('message')}
                                    id="message"
                                    rows={4}
                                    className={cn(
                                        "w-full px-5 py-3 rounded-xl border focus:ring-2 focus:primary-500 outline-none transition-all resize-none",
                                        errors.message ? "border-red-500 bg-red-50" : "border-gray-200"
                                    )}
                                    placeholder="How can we help you?"
                                ></textarea>
                                {errors.message && <p className="mt-1 text-sm text-red-500 font-medium">{errors.message.message}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-3">Preferred Contact Method (Optional)</label>
                                <div className="flex gap-6">
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input
                                            {...register('preferredContact')}
                                            type="radio"
                                            value="email"
                                            className="w-4 h-4 text-primary-500 focus:ring-primary-500 border-gray-300"
                                        />
                                        <span className="text-gray-600 group-hover:text-primary-500 transition-colors">Email</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer group">
                                        <input
                                            {...register('preferredContact')}
                                            type="radio"
                                            value="phone"
                                            className="w-4 h-4 text-primary-500 focus:ring-primary-500 border-gray-300"
                                        />
                                        <span className="text-gray-600 group-hover:text-primary-500 transition-colors">Phone</span>
                                    </label>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-4 bg-primary-500 text-white rounded-xl font-bold text-lg hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/20 flex items-center justify-center gap-3 disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Send Inquiry
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </SectionWrapper>
    );
};

// Simple CN for local use if needed, but imported in actual file
const cn = (...inputs: any[]) => inputs.filter(Boolean).join(' ');

export default Contact;
