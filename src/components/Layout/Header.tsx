import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navigationData, departments } from '../../data/content';
import { cn, scrollToSection } from '../../utils/helpers';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('about');
    const location = useLocation();
    const navigate = useNavigate();

    const isHome = location.pathname === '/';

    useEffect(() => {
        if (!isHome) return;

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navigationData.sections.map(s => s.id);
            for (const section of [...sections].reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHome]);

    useEffect(() => {
        setScrolled(window.scrollY > 20 || !isHome);
    }, [location.pathname, isHome]);

    const handleNavClick = (id: string | null) => {
        const pageRoutes: Record<string, string> = {
            'about': '/about',
            'university': '/university',
            'eligibility': '/eligibility',
            'fees': '/fees',
            'departments': '/departments',
            'accommodation': '/accommodation'
        };

        if (id && pageRoutes[id]) {
            navigate(pageRoutes[id]);
        } else if (id === 'contact') {
            if (isHome) {
                scrollToSection('contact');
            } else {
                navigate('/', { state: { scrollTo: 'contact' } });
            }
        } else if (id && isHome) {
            scrollToSection(id);
        } else if (id) {
            navigate('/', { state: { scrollTo: id } });
        }
        setIsOpen(false);
    };

    // Effect to handle scroll after navigating back to home
    useEffect(() => {
        if (isHome && location.state && (location.state as any).scrollTo) {
            const target = (location.state as any).scrollTo;
            setTimeout(() => scrollToSection(target), 100);
            // Clear state
            window.history.replaceState({}, document.title);
        }
    }, [isHome, location.state]);

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
            scrolled || !isHome ? "bg-white shadow-md py-2" : "bg-transparent py-4 text-white"
        )}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2.5 cursor-pointer group">
                        <div className="w-9 h-9 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-500/20 transition-transform group-hover:scale-105">U</div>
                        <span className={cn(
                            "font-heading font-semibold text-lg tracking-tight hidden sm:block",
                            scrolled || !isHome ? "text-gray-900" : "text-white"
                        )}>
                            Unistzu
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-7">
                        {navigationData.sections.slice(0, 5).map((section) => (
                            <button
                                key={section.id}
                                onClick={() => handleNavClick(section.id)}
                                className={cn(
                                    "text-[13px] font-semibold transition-all hover:text-primary-500 relative py-1",
                                    location.pathname === `/${section.id}`
                                        ? "text-primary-600 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-500"
                                        : (scrolled || !isHome ? "text-gray-600" : "text-gray-100")
                                )}
                            >
                                {section.label}
                            </button>
                        ))}

                        {/* Programs Dropdown */}
                        <div className="relative group">
                            <button className={cn(
                                "text-[13px] font-semibold transition-all hover:text-primary-500 flex items-center gap-1",
                                scrolled || !isHome ? "text-gray-600" : "text-gray-100"
                            )}>
                                Programs <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                            </button>
                            <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-6">
                                {departments.map(dept => (
                                    <div key={dept.id} className="px-6 mb-4 last:mb-0">
                                        <p className="text-[10px] font-bold text-primary-500 uppercase tracking-widest mb-2">{dept.name}</p>
                                        <div className="space-y-1">
                                            {dept.programs.map(prog => (
                                                <Link
                                                    key={prog.slug}
                                                    to={`/program/${prog.slug}`}
                                                    className="block text-sm font-semibold text-gray-700 hover:text-primary-600 hover:bg-primary-50 px-3 py-2 rounded-xl transition-all"
                                                >
                                                    {prog.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={() => handleNavClick('contact')}
                            className="bg-primary-500 text-white px-5 py-2 rounded-full font-semibold text-[13px] hover:bg-primary-600 transition-all transform hover:scale-105 shadow-md shadow-primary-500/20"
                        >
                            Apply Now
                        </button>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className={cn(
                            "lg:hidden p-2 transition-colors relative z-[70]",
                            scrolled || !isHome || isOpen ? "text-gray-900" : "text-white"
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden transition-all duration-500",
                    isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                )}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Nav Content */}
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
                className={cn(
                    "fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[65] lg:hidden transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) transform shadow-2xl overflow-hidden flex flex-col",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* Mobile Menu Header */}
                <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary-500 rounded flex items-center justify-center text-white font-bold">U</div>
                        <span className="font-bold text-gray-900">Unistzu</span>
                    </div>
                </div>

                {/* Mobile Menu Body */}
                <div className="flex-grow overflow-y-auto px-6 py-8">
                    <div className="flex flex-col gap-2 mb-10">
                        {navigationData.sections.slice(0, 5).map((section) => (
                            <button
                                key={section.id}
                                onClick={() => handleNavClick(section.id)}
                                className={cn(
                                    "text-lg font-semibold text-left py-2.5 px-4 rounded-xl transition-all",
                                    location.pathname === `/${section.id}` ? "bg-primary-50 text-primary-600" : "text-gray-600 active:bg-gray-50"
                                )}
                            >
                                {section.label}
                            </button>
                        ))}
                        <button
                            onClick={() => handleNavClick('accommodation')}
                            className={cn(
                                "text-lg font-semibold text-left py-2.5 px-4 rounded-xl transition-all",
                                location.pathname === '/accommodation' ? "bg-primary-50 text-primary-600" : "text-gray-600 active:bg-gray-50"
                            )}
                        >
                            Accommodation
                        </button>
                    </div>

                    <div className="pt-8 border-t border-gray-100">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6 px-4">Academic Programs</p>
                        <div className="space-y-6">
                            {departments.map(dept => (
                                <div key={dept.id}>
                                    <p className="px-4 text-[10px] font-bold text-primary-500 uppercase tracking-widest mb-3">{dept.name}</p>
                                    <div className="grid gap-2">
                                        {dept.programs.map(prog => (
                                            <Link
                                                key={prog.slug}
                                                to={`/program/${prog.slug}`}
                                                onClick={() => setIsOpen(false)}
                                                className="block text-base font-semibold text-gray-800 px-4 py-3 bg-gray-50 rounded-xl hover:bg-primary-50 hover:text-primary-600 transition-all"
                                            >
                                                {prog.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="p-6 border-t border-gray-100 bg-white">
                    <button
                        onClick={() => handleNavClick('contact')}
                        className="w-full bg-primary-500 text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-primary-500/20 active:scale-95 transition-transform"
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
