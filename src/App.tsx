import React, { Suspense, lazy, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Hero from './components/Sections/Hero'
import Introduction from './components/Sections/Introduction'
import University from './components/Sections/University'
import ProgramDetail from './components/Pages/ProgramDetail'
import LoadingScreen from './components/common/LoadingScreen'
import SEO from './components/common/SEO'
import { siteContent } from './data/content'

// Lazy load sections for the Home page
const Departments = lazy(() => import('./components/Pages/Departments'))
const EligibilityPage = lazy(() => import('./components/Pages/Eligibility'))
const Fees = lazy(() => import('./components/Pages/Fees'))
const About = lazy(() => import('./components/Pages/About'))
const UniversityPage = lazy(() => import('./components/Pages/University'))
const Accommodation = lazy(() => import('./components/Pages/Accommodation'))
const SupportServices = lazy(() => import('./components/Sections/SupportServices'))
const AdmissionProcess = lazy(() => import('./components/Sections/AdmissionProcess'))
const Documents = lazy(() => import('./components/Sections/Documents'))
const VisaProcess = lazy(() => import('./components/Sections/VisaProcess'))
const StudentLife = lazy(() => import('./components/Sections/StudentLife'))
const Career = lazy(() => import('./components/Sections/Career'))
const FAQ = lazy(() => import('./components/Sections/FAQ'))
const Contact = lazy(() => import('./components/Sections/Contact'))

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": siteContent.faq.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
        }
    }))
};

const HomePage = () => (
    <>
        <SEO
            title="Study Medicine in Georgia | Unistzu"
            description="Study medicine at Unistzu. Affordable MD program in English for Indian students. WHO & NMC recognized."
            keywords="MBBS in Georgia, study medicine abroad, Unistzu, medical university Georgia, Indian students"
            structuredData={faqSchema}
        />
        <Hero />
        <Introduction />
        <University />
        <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading section...</div>}>
            <Departments />
            <EligibilityPage />
            <Fees />
            <SupportServices />
            <AdmissionProcess />
            <Documents />
            <VisaProcess />
            <StudentLife />
            <Career />
            <FAQ />
            <Contact />
        </Suspense>
    </>
);

function App() {
    const [isLoading, setIsLoading] = useState(() => {
        // Only show the loading screen if they haven't seen it this session
        return !sessionStorage.getItem('hasSeenSplashLoader');
    });

    useEffect(() => {
        if (!isLoading) return;

        // Simulate initial loading time to ensure smooth entrance
        const timer = setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem('hasSeenSplashLoader', 'true');
        }, 2200); // Wait for the progress bar animation to finish

        return () => clearTimeout(timer);
    }, [isLoading]);

    return (
        <Router>
            <AnimatePresence mode="wait">
                {isLoading && <LoadingScreen key="loading-screen" />}
            </AnimatePresence>

            {/* We render the rest of the app immediately but behind the fixed loading screen 
                so it has time to render its initial DOM before the loader fades out */}
            <div className={`flex flex-col min-h-screen ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
                <Header />

                <main id="main" className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/university" element={<UniversityPage />} />
                        <Route path="/eligibility" element={<EligibilityPage />} />
                        <Route path="/fees" element={<Fees />} />
                        <Route path="/departments" element={<Departments />} />
                        <Route path="/accommodation" element={<Accommodation />} />
                        <Route path="/program/:slug" element={<ProgramDetail />} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    )
}

export default App
