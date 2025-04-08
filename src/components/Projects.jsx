import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';


const projects = [
    {
        title: 'Portfolio Website',
        description: 'Built with React and Tailwind CSS',
        previewUrl: 'https://ray743.github.io/portfolio/',
        details: `This portfolio project was designed and built as a futuristic, interactive personal site.
- A fully animated React + Tailwind CSS UI
- Neon-themed RadialMenu navigation
- SVG motherboard animated backgrounds
- Fully responsive layout with glowing skill categories
Technologies: React, Tailwind CSS, Framer Motion, Vite, Lucide,EmailJS and React Icons.`,
    },
    {
        title: 'O&M Reporting Dashboard',
        description: 'Full-stack app using React, Node.js, and MySQL',
        previewUrl: 'http://194.233.80.19',
        details: `This project is an internal dashboard for managing O&M site reports used by staff and administrators. Currently under development
    - Dual login system for Admin and Staff
    - Dashboard cards with real-time data summaries
    - Recent activity feed for submitted reports
    - Dynamic forms for 5 report types: Refueling, Servicing, Outages, Monthly Maintenance, and Fuel/Oil/Coolant Pickup
    - All reports integrate with a MySQL database through a RESTful API
    - Backend served via Express and deployed to Contabo VPS
    Technologies: React, Tailwind CSS, React Router, Axios, Node.js, Express, MySQL, Vite.`,
    },
    {
        title: 'BSP Scammer Tracker',
        description: 'Fake BSP payment UI with stealth GPS logger',
        previewUrl: 'https://ray743.github.io/location-verifier/',
        details: `This web tool was designed as a cybersecurity aid to help identify and trace scammers. The fake payment information can be hard coded and modified.
        take note that I may be able to retrieve your information when the page is loaded.
- Mimics a K5,000 BSP payment confirmation screen
- Displays realistic processing animation before showing transaction success
- Stealthily logs GPS coordinates and timestamp on page load
- Sends data directly to a connected Google Form for review
- Built for anti-scam awareness, investigation, and tracking
Technologies: HTML, CSS, JavaScript, Google Forms (Webhook Integration), Geolocation API.`,
    },
    {
        title: 'Simple Word Clone',
        description: 'A browser-based document editor with code highlighting and export features',
        previewUrl: 'https://ray743.github.io/web-word/',
        details: `Simple Word Clone is a web-based document editor designed to mimic the functionality of a lightweight word processor, built entirely with HTML, JavaScript, and Tailwind CSS.
- Editable A4-style pages with dynamic formatting and syntax-highlighted code blocks
- Sidebar with tools to export content as PDF or TXT, insert tables/images, and change text color
- Topbar for font customization, alignment, list creation, and code block injection with Prism.js
- PDF export via html2pdf.js and code syntax support via Prism Autoloader
- Dark UI theme with a smooth layout and responsive controls
Technologies: HTML, JavaScript, Tailwind CSS, Prism.js, html2pdf.js, jsPDF, Phosphor Icons.`,
    }
];

const Projects = () => {
    const [activeProject, setActiveProject] = useState(null);

    useEffect(() => {
        document.body.style.overflow = activeProject ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [activeProject]);

    return (
        <section className="relative h-screen bg-[#0a0a0a] overflow-hidden">
            <div className="absolute inset-0 motherboard-bg w-full h-full z-0" />
            <div className="absolute inset-0 circuit-overlay z-0" />

            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="relative z-10 text-4xl font-bold text-center mb-12 drop-shadow-[0_0_10px_#39FF14]"
            >
                Projects
            </motion.h2>

            <div
                className={`relative z-10 grid md:grid-cols-2 min-h[50h] gap-8 max-w-5xl mx-auto transition-all duration-500 ${activeProject ? 'place-items-center' : ''
                    }`}
            >
                {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        onClick={() => setActiveProject(project)}
                        className="p-6 border border-neon rounded-xl hover:shadow-[0_0_20px_#39FF14] hover:scale-[1.02] transition cursor-pointer bg-[#0a0a0add]"
                    >
                        <h3 className="text-2xl font-semibold mb-2 text-[#39FF14]">{project.title}</h3>
                        <p className="text-sm text-[#39FF14]/80">{project.description}</p>
                    </motion.div>
                ))}
            </div>

            {activeProject && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ zIndex: 999, position: 'fixed', inset: 0 }}
                    className="bg-black/80 backdrop-blur-md flex items-center justify-center px-4"
                    onClick={() => setActiveProject(null)}
                >
                    <motion.div
                        initial={{ scale: 0.95, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.95, y: 20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                        style={{ zIndex: 1000 }}
                        className="bg-[#0a0a0a] border border-[#39FF14] rounded-2xl w-full max-w-md md:max-w-[450px] h-[90vh] overflow-y-auto p-6 shadow-[0_0_30px_#39FF14] text-[#39FF14] font-techno relative"
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setActiveProject(null)}
                            aria-label="Close modal"
                            className="relative bg-[#0a0a0a] top-0 right-100 border-0 text-[#39FF14] hover:text-red-400 transition-all duration-300 cursor-pointer hover:drop-shadow-[0_0_10px_#39FF14]"
                        >
                            <X className="w-10 h-6 p-0" />
                        </button>


                        <h3 className="text-3xl font-bold mb-4 text-center drop-shadow-[0_0_10px_#39FF14]">
                            {activeProject.title}
                        </h3>



                        <div className="bg-[#0f0f0f]/60 rounded-xl p-4 shadow-inner text-sm leading-relaxed border-t border-[#39FF14]/30 text-center space-y-4">
                            {(() => {
                                const lines = activeProject.details.trim().split('\n');
                                const listItems = lines.filter(line => line.trim().startsWith('-'));
                                const paragraphs = lines.filter(line => !line.trim().startsWith('-'));

                                return (
                                    <>
                                        {paragraphs.map((line, idx) => (
                                            <p key={`p-${idx}`} className="mx-auto max-w-md">
                                                {line.trim()}
                                            </p>
                                        ))}

                                        {listItems.length > 0 && (
                                            <div className="flex justify-center">
                                                <ul className="list-disc list-inside space-y-1 text-left marker:text-[#39FF14] marker:drop-shadow-[0_0_4px_#39FF14]">
                                                    {listItems.map((line, idx) => (
                                                        <li key={`li-${idx}`} className="leading-relaxed">
                                                            {line.replace(/^-/, '').trim()}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </>
                                );
                            })()}
                        </div>

                        {/* Live Preview Iframe */}
                        {activeProject.previewUrl && (
                            <div className="flex justify-center mt-4">
                                <div className="w-full max-w-[900px] h-[580px] aspect-video rounded-lg overflow-hidden border border-[#39FF14]/30">
                                    <iframe
                                        src={activeProject.previewUrl}
                                        title={`${activeProject.title} Live Preview`}
                                        className="w-full h-full"
                                        frameBorder="0"
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>

                        )}

                        {/* Live Preview Button */}
                        {activeProject.previewUrl && (
                            <div className="flex justify-center">
                                <a
                                    href={activeProject.previewUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block mt-2 mb-4 px-4 py-2 rounded-lg bg-[#39FF14]/10 border border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14]/20 transition-all duration-300 text-sm font-semibold drop-shadow-[0_0_10px_#39FF14]"
                                >
                                    🔗 Live Preview
                                </a>
                            </div>
                        )}

                    </motion.div>
                </motion.div>
            )}
        </section>
    );
};

export default Projects;
