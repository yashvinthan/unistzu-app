import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    structuredData?: object;
}

export const SEO: React.FC<SEOProps> = ({ title, description, keywords, ogTitle, ogDescription, structuredData }) => {
    useEffect(() => {
        document.title = title;

        const updateMetaTag = (name: string, content: string, property: boolean = false) => {
            const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
            let meta = document.querySelector(selector);
            if (!meta) {
                meta = document.createElement('meta');
                if (property) {
                    meta.setAttribute('property', name);
                } else {
                    meta.setAttribute('name', name);
                }
                document.head.appendChild(meta);
            }
            meta.setAttribute('content', content);
        };

        updateMetaTag('description', description);
        if (keywords) updateMetaTag('keywords', keywords);

        updateMetaTag('og:title', ogTitle || title, true);
        updateMetaTag('og:description', ogDescription || description, true);
        updateMetaTag('twitter:title', ogTitle || title, false);
        updateMetaTag('twitter:description', ogDescription || description, false);
        updateMetaTag('twitter:description', ogDescription || description, false);

        // Structured Data
        if (structuredData) {
            let script = document.querySelector('script[type="application/ld+json"][data-seo="true"]');
            if (!script) {
                script = document.createElement('script');
                script.setAttribute('type', 'application/ld+json');
                script.setAttribute('data-seo', 'true');
                document.head.appendChild(script);
            }
            script.textContent = JSON.stringify(structuredData);
        } else {
            const script = document.querySelector('script[type="application/ld+json"][data-seo="true"]');
            if (script) {
                script.remove();
            }
        }

    }, [title, description, keywords, ogTitle, ogDescription, structuredData]);

    return null;
};

export default SEO;
