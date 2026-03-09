# Unistzu Educational Consultancy

![Unistzu Logo](/public/favicon.svg)

Unistzu is a premium, modern web application designed for an educational consultancy specializing in guiding Indian medical aspirants to pursue their MBBS/MD degrees abroad, specifically at top-tier universities in Georgia.

Built with performance, SEO, and visual excellence in mind, the platform serves as an authoritative guide with dynamic content and seamless user experience.

## 🚀 Technologies

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing**: [React Router v7](https://reactrouter.com/) (Single Page Application)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms & Validation**: React Hook Form + Zod
- **Build & Serve**: TypeScript + PM2

## ✨ Key Features

- **Dynamic SEO Component (`SEO.tsx`)**: An advanced, reusable hook that injects highly specific `<title>`, Meta Descriptions, Open Graph tags, and valid JSON-LD structured data (like `EducationalOccupationalProgram` and `FAQPage`) into the `<head>` on a per-route basis.
- **Premium Loading Screen**: A sleek, suspense-integrated splash loader utilizing framer-motion built to run once per session to maintain perceived performance without nuisance.
- **Mobile First & Responsive**: Completely fluid layouts built on Tailwind's utility classes.
- **Technical SEO Compliance**: Contains pre-configured `robots.txt` and a static XML sitemap encompassing all dynamic routes.

## 📦 Project Structure

```bash
src/
├── components/
│   ├── common/        # Reusable elements (SEO, LoadingScreen, SectionWrapper)
│   ├── Layout/        # Header, Footer, Navigation
│   ├── Pages/         # Full route pages (About, University, ProgramDetail)
│   └── Sections/      # Home page modular sections (Hero, FAQ, AdmissionProcess)
├── data/
│   └── content.ts     # Centralized content store for the entire website
├── utils/
│   └── helpers.ts     # Utility functions (e.g., smooth scroll)
├── App.tsx            # Main router and lazy-loaded Suspense boundaries
└── main.tsx           # React DOM render entry point
```

## 🛠️ Development Setup

**1. Clone and Install Dependencies:**
```bash
npm install
```

**2. Run Development Server:**
```bash
npm run dev
```

**3. Build for Production:**
The Vite bundler will compile the TypeScript, minify assets, and output static files into the `dist/` directory.
```bash
npm run build
```

## 🚀 Proxmox / Production Deployment (via PM2)

Because the project is a statically built Single Page Application (SPA), it is incredibly lightweight to host. To deploy on a Proxmox VM or LXC container:

**1. Transfer Files**
Ensure your server has Node.js and PM2 installed. Copy the generated `dist/` folder to your target server environment.

**2. Install PM2 Globally (If not present)**
```bash
npm install -g pm2
```

**3. Serve via PM2 Ecosystem (Production Recommended)**
We have included an `ecosystem.config.cjs` file configured for single-page applications. This is the best practice for production deployments.
```bash
pm2 start ecosystem.config.cjs
```
*Note: The ecosystem file is already configured with PM2_SERVE_SPA="true" so React Router can handle clean URLs.*

**4. Keep PM2 alive across server reboots**
```bash
pm2 save
pm2 startup
```

## 📝 Editing Content
To change any text, fees, phone numbers, or admission requirements on the website, simply edit `src/data/content.ts`. The UI components will dynamically re-render based on this file.
