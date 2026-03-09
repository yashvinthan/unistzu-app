import React from 'react';
import SectionWrapper from './SectionWrapper';
import { siteContent } from '../../data/content';
import { FileText, CheckCircle } from 'lucide-react';

const Documents = () => {
    const { checklist } = siteContent.documents;

    return (
        <SectionWrapper id="documents" title="Required Documents" subtitle="Application Checklist">
            <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                    {checklist.map((doc, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary-200 hover:bg-white hover:shadow-lg transition-all"
                        >
                            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-500 shrink-0">
                                <FileText size={24} />
                            </div>
                            <span className="text-lg font-medium text-gray-800">{doc}</span>
                            <div className="ml-auto text-success">
                                <CheckCircle size={24} className="opacity-40" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-10 bg-accent-50 rounded-[2.5rem] border border-accent-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                    <h4 className="text-xl font-bold text-accent-900 mb-4">Pro Tip:</h4>
                    <p className="text-accent-800 leading-relaxed">
                        Please ensure all documents are scanned in high resolution. For transcripts from boards outside India, additional apostille/legalization might be required.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Documents;
