export interface NavigationSection {
    id: string;
    label: string;
}

export interface SiteConfig {
    name: string;
    tagline: string;
    description: string;
    contact: {
        phone: string;
        email: string;
        whatsapp: string;
    };
}

export interface UniversityHighlight {
    title: string;
    description: string;
    icon?: string;
}

export interface ProgramDetails {
    slug: string;
    name: string;
    degreeType: string;
    duration: string;
    semesters: number;
    ects?: number;
    annualFee: string;
    totalFee: string;
    medium: string;
    eligibility: string[];
    subjects: string[];
    internship: string;
    careerOpportunities: string[];
    startingSalary: string;
    description: string;
}

export interface Department {
    id: string;
    name: string;
    programs: ProgramDetails[];
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface NavData {
    sections: NavigationSection[];
}

export const navigationData: NavData = {
    sections: [
        { id: 'about', label: 'About' },
        { id: 'university', label: 'University' },
        { id: 'departments', label: 'Departments' },
        { id: 'eligibility', label: 'Eligibility' },
        { id: 'fees', label: 'Fees' },
        { id: 'support', label: 'Support' },
        { id: 'admission', label: 'Admission' },
        { id: 'visa', label: 'Visa' },
        { id: 'student-life', label: 'Student Life' },
        { id: 'career', label: 'Career' },
        { id: 'faq', label: 'FAQ' },
        { id: 'contact', label: 'Contact' },
    ],
};

export const departments: Department[] = [
    {
        id: 'technology',
        name: 'Technology & IT',
        programs: [
            {
                slug: 'it',
                name: 'Information Technology',
                degreeType: 'Bachelor of Information Technologies (Technology)',
                duration: '4 years',
                semesters: 8,
                ects: 240,
                annualFee: '$3,900',
                totalFee: '$15,600',
                medium: 'English',
                eligibility: [
                    "Secondary school certificate (12 years education)",
                    "Passport",
                    "Recognition via EQE center required"
                ],
                subjects: [
                    "Programming (Core)",
                    "Databases & SQL",
                    "Computer Networks",
                    "Web Development",
                    "Bachelor's Thesis"
                ],
                internship: "Practical training integrated in multiple semesters (3 credits per practice module yearly).",
                careerOpportunities: ["IT Specialist", "Network Admin", "Web Developer", "System Analyst"],
                startingSalary: "~$15,000–25,000 USD annually",
                description: "Equips students with practical skills for the tech industry, covering core IT domains."
            },
            {
                slug: 'cs',
                name: 'Computer Science',
                degreeType: 'Bachelor of Computer Science (Engineering/Technology)',
                duration: '4 years',
                semesters: 8,
                ects: 240,
                annualFee: '$3,900',
                totalFee: '$15,600',
                medium: 'English',
                eligibility: ["High school diploma", "EQE approval"],
                subjects: [
                    "Algorithms & Data Structures",
                    "Software Design",
                    "Artificial Intelligence Basics",
                    "Mathematical Foundations"
                ],
                internship: "Semester-based practical projects and industry placements.",
                careerOpportunities: ["Software Developer", "Programmer", "Systems Engineer"],
                startingSalary: "~$35,000 USD base in Tbilisi",
                description: "Focuses on foundational computing, algorithmic thinking, and sophisticated software engineering."
            },
            {
                slug: 'ds-ai',
                name: 'Data Science & Artificial Intelligence',
                degreeType: 'Bachelor of Data Science and Artificial Intelligence (Technology)',
                duration: '4 years',
                semesters: 8,
                ects: 240,
                annualFee: '$3,900',
                totalFee: '$15,600',
                medium: 'English',
                eligibility: ["High school completion", "EQE recognition"],
                subjects: [
                    "Data Analysis",
                    "Machine Learning",
                    "AI Algorithms",
                    "Big Data Tools",
                    "Statistics"
                ],
                internship: "Hands-on data projects and AI labs in later semesters.",
                careerOpportunities: ["Data Analyst", "AI Engineer", "Machine Learning Specialist"],
                startingSalary: "~$20,000–30,000 USD entry-level globally",
                description: "Advanced program focused on the future of technology through data and intelligent systems."
            },
            {
                slug: 'software-engineering',
                name: 'Software Engineering',
                degreeType: 'Bachelor of Software Engineering (Engineering)',
                duration: '4 years',
                semesters: 8,
                ects: 240,
                annualFee: '$3,900',
                totalFee: '$15,600',
                medium: 'English',
                eligibility: ["12th-grade certificate", "EQE equivalency"],
                subjects: [
                    "Software Design Patterns",
                    "Coding Standards",
                    "Testing & Quality Assurance",
                    "DevOps Principles"
                ],
                internship: "Practical software development placements in tech firms.",
                careerOpportunities: ["Software Engineer", "App Builder", "DevOps Engineer"],
                startingSalary: "~$42,000 USD average in Tbilisi",
                description: "Comprehensive engineering approach to building scalable and robust software applications."
            }
        ]
    },
    {
        id: 'medicine',
        name: 'Medicine & Health',
        programs: [
            {
                slug: 'md',
                name: 'Medical Doctor (MD)',
                degreeType: 'One-cycle Professional',
                duration: '6 years',
                semesters: 12,
                ects: 360,
                annualFee: '$5,900',
                totalFee: '$35,400',
                medium: 'English',
                eligibility: ["Secondary school certificate", "EQE approval", "NEET (for India)"],
                subjects: ["Basic Sciences", "Pre-clinical Training", "Clinical Rotations", "Evidence-based Medicine"],
                internship: "Hospital rotations in the 6th year.",
                careerOpportunities: ["Physician", "Surgeon", "Medical Researcher"],
                startingSalary: "$40,000–80,000 USD starting globally",
                description: "World-class medical education recognized by WHO and NMC."
            },
            {
                slug: 'dentistry',
                name: 'Doctor of Dental Medicine (DMD)',
                degreeType: 'One-cycle Professional',
                duration: '5 years',
                semesters: 10,
                ects: 300,
                annualFee: '$4,900',
                totalFee: '$24,500',
                medium: 'English',
                eligibility: ["High school diploma (12 years)", "EQE recognition"],
                subjects: ["Anatomy & Physiology", "Preclinical Dentistry", "Clinical Dentistry", "Oral Surgery"],
                internship: "Clinical rotations in university clinics from year 3.",
                careerOpportunities: ["Dentist", "Oral Surgeon", "Clinic Owner"],
                startingSalary: "$30,000–60,000 USD/year entry-level",
                description: "Comprehensive dental medicine program with early clinical exposure."
            },
            {
                slug: 'nursing',
                name: 'Nursing',
                degreeType: 'Bachelor',
                duration: '4 years',
                semesters: 8,
                ects: 240,
                annualFee: '$3,500',
                totalFee: '$14,000',
                medium: 'English',
                eligibility: ["High school", "EQE"],
                subjects: ["Anatomy", "Patient Care", "Pharmacology", "Clinical Nursing"],
                internship: "Clinical practice in hospitals and community centers.",
                careerOpportunities: ["Registered Nurse", "Clinic Staff", "Health Administrator"],
                startingSalary: "$20,000–40,000 USD",
                description: "Prepares nurses with European standards for international healthcare systems."
            }
        ]
    },
    {
        id: 'business',
        name: 'Business & Management',
        programs: [
            {
                slug: 'bba-3yr',
                name: 'Business Administration (3yr)',
                degreeType: 'Bachelor',
                duration: '3 years',
                semesters: 6,
                ects: 180,
                annualFee: '$3,500',
                totalFee: '$10,500',
                medium: 'English',
                eligibility: ["High school"],
                subjects: ["Management", "Marketing", "Finance", "Strategic Planning"],
                internship: "Business projects and corporate internships.",
                careerOpportunities: ["Manager", "Entrepreneur", "Business Analyst"],
                startingSalary: "$25,000–45,000 USD",
                description: "Fast-track bachelor's degree focused on essential business management skills."
            },
            {
                slug: 'mba',
                name: 'Business Administration (MBA)',
                degreeType: 'Master',
                duration: '2 years',
                semesters: 4,
                ects: 120,
                annualFee: '$7,450*',
                totalFee: '$14,900*',
                medium: 'English',
                eligibility: ["Bachelor degree", "Interview"],
                subjects: ["Strategic Management", "Organizational Leadership", "Global Markets", "Innovation"],
                internship: "Optional executive projects.",
                careerOpportunities: ["Executive", "Consultant", "Director"],
                startingSalary: "$40,000–70,000 USD",
                description: "Advanced leadership training for aspiring executives (scholarships available)."
            }
        ]
    }
];

export const siteContent = {
    hero: {
        headline: "International Medical Education with Unistzu",
        subheadline: "Your trusted Indian consultancy for end-to-end support in MBBS/MD abroad. Current focus: Georgia (Others coming soon).",
        ctaPrimary: "Explore Georgia",
        ctaSecondary: "Talk to an Advisor",
    },
    introduction: {
        heading: "Your Gateway to Medicine Abroad",
        description: "Unistzu is a premier educational consultancy based in India, specializing in end-to-end support for Indian students pursuing MBBS (MD) internationally. We bridge the gap between your medical dreams and global opportunities, currently focusing on world-class institutions in Georgia.",
        highlights: [
            "End-to-End Admission Support",
            "Focus on Georgia (others coming soon)",
            "NMC & WHO recognized pathways",
            "On-ground Indian Mentors",
            "Visa & Documentation Assistance",
            "Post-Arrival Local Support"
        ],
    },
    about: {
        mission: "To provide Indian medical aspirants with seamless, transparent, and comprehensive support for pursuing quality education abroad.",
        vision: "To be India's most trusted consultancy for international medical studies, expanding global horizons for future doctors.",
        values: [
            { title: "Academic Excellence", description: "Maintaining high standards in teaching and research modules." },
            { title: "Student Centered", description: "Focusing on individual growth, mentorship, and career readiness." },
            { title: "Innovation", description: "Encouraging creative thinking and the use of cutting-edge technology." },
            { title: "Diversity", description: "Welcoming students from all cultural and ethnic backgrounds." }
        ],
        strategicGoals: [
            "Continuous internationalization of academic programs.",
            "Strengthening industry-academy partnerships for higher employability.",
            "Development of state-of-the-art infrastructure and digital learning tools.",
            "Expanding the footprint of student-led research and innovation."
        ]
    },
    university: {
        name: "Partner Institutions in Georgia",
        founded: 2001,
        location: "Tbilisi, Georgia",
        description: "Unistzu partners with top-tier higher education institutions in Georgia, known for their commitment to academic excellence and international standards. Our partner campuses offer futuristic infrastructure and a conducive environment for medical and technical studies.",
        accreditations: [
            { name: "WHO", description: "World Health Organization recognized" },
            { name: "NMC", description: "National Medical Commission (India) approved" },
            { name: "ENIC-NARIC", description: "European Network for Information Centers" },
            { name: "ECFMG", description: "Educational Commission for Foreign Medical Graduates (USA)" },
            { name: "GMC", description: "General Medical Council (UK) recognition paths" }
        ],
        highlights: [
            { title: "Global Accreditation", description: "Our medical programs are fully recognized by WHO, NMC (India), and ECFMG (USA). Graduates are eligible to appear for the USMLE, PLAB, and NEXT exams, opening doors to global medical practice in the US, UK, Europe, and Asia." },
            { title: "Tech & Innovation Hub", description: "As a frontrunner in digital education, Unistzu hosts high-performance NVIDIA-powered AI labs. We foster deep industry partnerships, ensuring our IT and Engineering students work on real-world projects with leading tech giants." },
            { title: "Multicultural Diversity", description: "Host to a vibrant international community of students from over 25+ nations. Our campus is a melting pot of cultures, offering a rich social life, international student societies, and a safe, inclusive environment." },
            { title: "Clinical Excellence", description: "With exclusive training agreements with 30+ leading multi-profile hospitals in Tbilisi, students receive early clinical exposure and bedside training under the mentorship of senior consultants from their first year." },
        ],
        facilities: [
            { name: "Simulation Center", description: "Our high-fidelity medical simulation center is among the best in the Caucasus, featuring programmed manikins and VR labs for risk-free surgical and clinical practice." },
            { name: "NVIDIA AI Lab", description: "State-of-the-art laboratory equipped with high-compute power for deep learning, big data analysis, and advanced software development projects." },
            { name: "Modern Library", description: "A 24/7 digital and physical repository with access to major international medical databases, e-books, and comfortable individual study zones." },
            { name: "Innovation Hub", description: "A startup incubator providing mentorship, co-working spaces, and funding opportunities for student-led entrepreneurial ventures and tech startups." },
            { name: "Smart Campus", description: "Fully digitized campus infrastructure with smart boards, high-speed Wi-Fi, and a comprehensive student management portal for seamless academic navigation." }
        ],
        studentServices: [
            "Dedicated International Student Support Office",
            "Intensive Georgian & European Language Courses",
            "Career Counseling & Global Internship Placement Cell",
            "Health & Wellness Center with Psychological Support",
            "Sports & Cultural Clubs for Holistic Development"
        ]
    },
    upcomingUniversities: [
        {
            name: "Batumi International University",
            location: "Batumi, Georgia",
            highlights: ["Coastal Campus", "Modern Medical Wing", "International Faculty"]
        },
        {
            name: "Tbilisi State Medical University (Partner)",
            location: "Tbilisi, Georgia",
            highlights: ["Historical Excellence", "Advanced Clinical Research", "European Standards"]
        }
    ],
    career: {
        opportunities: [
            { title: "Global Hospital Placements", description: "Direct rotations and training opportunities in leading European and American hospitals affiliated with Unistzu." },
            { title: "Tech Careers with Global Giants", description: "Direct pathways to placements in top-tier MNCs like Google, Amazon, and tech startups in the EU." },
            { title: "Strategic Leadership Roles", description: "Preparing students for management consulting and leadership in Fortune 500 companies." },
            { title: "Advanced Research Pathways", description: "Opportunities for PhD and funded research in world-class labs for AI, Robotics, and Biotechnology." },
        ],
    },
    eligibility: {
        title: "Admission Requirements",
        process: [
            { step: "Profile Screening", description: "Initial review of your 10th and 12th marksheets. We look for a strong foundation in core subjects like Biology, Physics, and Chemistry for medical applicants." },
            { step: "EQE Recognition", description: "Official document verification and recognition through the Electronic Quality Education center under the Georgian Ministry of Education and Science." },
            { step: "Rector's Order", description: "Issuance of the final enrollment order from the University Rector, officially confirming your status as a registered international student." }
        ],
        requirements: [
            "12th Grade Certificate with 50% in Physics, Chemistry, and Biology (PCBE)",
            "Valid International Passport with at least 1-year validity remaining",
            "NEET Qualification Card (MANDATORY only for Indian students aiming for Indian registration)",
            "Medical Wellness Certificate and Birth Certificate copy"
        ]
    },
    fees: {
        tuition: "$35,400 Total",
        scholarships: [
            { title: "Merit-Based Grant", description: "Up to 20% tuition waiver for students achieving >90% in Physics, Chemistry, and Biology in 12th grade." },
            { title: "Early Bird Discount", description: "Special financial aid for students who complete their registration and EQE recognition before June 30th." }
        ],
        budget: [
            { title: "Tuition Fee Extension", description: "Option to pay in two installments per academic year." },
            { title: "One-Time Registration", description: "Includes admission fee, EQE processing, and registration." },
            { title: "Health Insurance", description: "Mandatory annual insurance covered under student services." }
        ],
        categories: [
            { name: "Accommodation", description: "Premium university hostels with 2-3 sharing options, including laundry and 24/7 security.", amount: "$150", period: "Monthly" },
            { name: "Indian Food Mess", description: "Nutritious veg & non-veg meals catering specifically to international student tastes.", amount: "$100", period: "Monthly" },
            { name: "Living & Transit", description: "Estimated costs for local Tbilisi metro, groceries, and social life in the city.", amount: "$120", period: "Monthly" },
            { name: "Internet & Mobile", description: "High-speed 4G/5G data plans and campus-wide premium Wi-Fi access.", amount: "$20", period: "Monthly" },
            { name: "Health & Misc", description: "Basic health coverage, laundry services, and miscellaneous personalized expenses.", amount: "$50", period: "Monthly" },
            { name: "Study Materials", description: "Books, lab coats, medical supplies, and digital learning subscriptions.", amount: "$30", period: "Monthly" }
        ]
    },
    support: {
        services: [
            { title: "Global Arrival Support", description: "A dedicated team handles airport pickups and immediate temporary housing for all newcomers.", icon: "PlaneLanding" },
            { title: "On-Ground Indian Mentor", description: "Dedicated mentors from India to help students navigate local culture, laws, and university life.", icon: "Headphones" },
            { title: "Visa & PR Assistance", description: "Comprehensive guidance for student visa stay extensions and resident permit applications.", icon: "ShieldCheck" },
            { title: "Clinical & Tech Internship", description: "Placement cell focused on providing real-world experience during summer breaks.", icon: "HeartHandshake" },
            { title: "University Integration", description: "Complete help with Rector's orders, ID cards, library access, and student portal navigation.", icon: "BookOpen" }
        ]
    },
    admission: {
        steps: [
            { title: "Application Submission", description: "Submit scans of passport and academic certificates via the portal." },
            { title: "Interview Call", description: "Brief academic interview with the Unistzu International Admission Team." },
            { title: "EQE Recognition", description: "Official verification of your documents by the Georgian Ministry of Education." },
            { title: "Enrollment Order", description: "Issuance of the Rector's order confirming your status as a student." },
            { title: "Visa Documentation", description: "Preparing the D3 student visa file for submission to the Consulate." },
            { title: "Departure Prep", description: "Pre-departure orientations on travel, currency, and local essentials." }
        ]
    },
    documents: {
        checklist: [
            "Original International Passport",
            "10th & 12th Grade Marksheets (Apostilled/Verified)",
            "NEET Score Card (For Indian Medical Students)",
            "Medical Fitness Certificate (HIV/Hepatitis negative)",
            "10-12 Passport size photographs (white background)"
        ]
    },
    studentLife: {
        highlights: [
            "Tbilisi: The Safest European Student City",
            "Modern Campus with 24/7 Security & Monitoring",
            "Indian Food Options & Dedicated Student Hostels",
            "International Student Societies & Sports Clubs",
            "Digital Learning Environment & 24/7 E-Library"
        ]
    },
    visa_info: {
        type: "D3 Category Students Visa",
        processingTime: "4-6 Weeks Recommended",
        requirements: [
            "Official University Enrollment/Acceptance Letter",
            "Bank Statement of Sponsor/Parent showing sufficient funds",
            "Valid International Travel & Health Insurance for Georgia",
            "Notarized Proof of Accommodation (Hostel/Apartment)",
            "Official Receipt of the first semester/year tuition payment"
        ]
    },
    accommodation: {
        title: "International Student Hostels",
        description: "Experience a secure and comfortable living environment at Unistzu. Our hostels are designed to provide students with a space to both study effectively and relax socially. We offer premium 2-3-4 sharing rooms with all modern amenities.",
        images: [
            "/images/room/3-4-sharing-rooms/WhatsApp Image 2026-03-05 at 9.20.18 PM.jpeg",
            "/images/room/3-4-sharing-rooms/WhatsApp Image 2026-03-05 at 9.20.20 PM.jpeg",
            "/images/room/3-4-sharing-rooms/WhatsApp Image 2026-03-05 at 9.20.24 PM.jpeg",
            "/images/room/3-4-sharing-rooms/WhatsApp Image 2026-03-05 at 9.20.26 PM.jpeg",
            "/images/room/3-4-sharing-rooms/WhatsApp Image 2026-03-05 at 9.20.28 PM.jpeg",
            "/images/room/3-4-sharing-rooms/WhatsApp Image 2026-03-05 at 9.20.30 PM.jpeg"
        ],
        amenities: [
            "High-speed Campus-wide Wi-Fi",
            "24/7 Biometric Entry & CCTV Monitoring",
            "Dedicated Study Rooms & Chill-out Zones",
            "Indian & Multi-cuisine Canteen Facilities",
            "Laundry & Housekeeping Services Included",
            "Heating and Air Conditioning Systems"
        ]
    },
    faq: [
        { question: "Is NEET mandatory for Georgian admission?", answer: "Admission at Unistzu is based on your 12th-grade merit. NEET is only required if you are an Indian student who plans to return and practice medicine in India." },
        { question: "What language is the course taught in?", answer: "All our international programs in Medicine, IT, and Business are taught 100% in English." },
        { question: "Can I work while studying in Georgia?", answer: "International students with a D3 visa can work part-time (up to 20 hours/week) provided it doesn't interfere with their academic schedule." },
        { question: "Are Georgian medical degrees globally recognized?", answer: "Yes, Unistzu degrees are recognized by WHO, NMC, ECFMG (USA), and follow the Bologna Process across the European Higher Education Area." },
    ],
};
