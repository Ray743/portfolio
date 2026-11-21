import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'The Seeker',
    tagline: "PNG's automated job board",
    status: 'Flagship',
    description: 'Full-stack platform that aggregates job postings from multiple Papua New Guinea job boards into one searchable hub.',
    tech: ['Python', 'FastAPI', 'MySQL', 'React', 'Crawl4AI', 'Linux'],
    repoUrl: 'https://github.com/Ray743/The-Seeker',
    details: `The Seeker centralises job postings from key PNG sources (PNG JobSeek, PNG Workboard, PNG Workforce, Vodafone PNG Careers) into one hub, so job seekers stop hopping between sites.
- Python scrapers (Crawl4AI + BeautifulSoup) on a Linux server, scheduled with cron, with error logging for debugging
- MySQL relational database with a structured schema for job data
- FastAPI backend behind an Apache reverse proxy with SSL, kept alive by pm2
- React + Vite + Tailwind frontend with search, filtering, sorting, pagination and job detail modals
- Solved production issues: CORS, HTTPS configuration and API integration
- Git hooks push every commit straight to the live system`,
  },
  {
    title: 'Ray-I',
    tagline: 'AI Linux & pentest assistant',
    status: 'AI',
    description: 'Terminal assistant powered by Google Gemini that turns natural-language requests into Linux, automation and pentesting workflows.',
    tech: ['Python', 'Gemini API', 'Linux', 'Bash'],
    repoUrl: 'https://github.com/Ray743/ray-i',
    details: `Ray-I is a conversational command-line assistant for power users and sysadmins.
- Uses the Gemini 2.5 API to interpret instructions and propose real CLI operations
- Automates system tasks: updates, package installs, log monitoring
- Pentest module scans open ports and flags likely vulnerabilities for ethical testing
- Modular design, so new tools plug in as modules`,
  },
  {
    title: 'Red',
    tagline: 'Fine-tuned Linux CLI model',
    status: 'In progress',
    description: 'Fine-tuning a model to map natural language to safe, accurate Linux commands.',
    tech: ['Python', 'TensorFlow', 'Hugging Face', 'JSONL'],
    repoUrl: 'https://github.com/Ray743/Red',
    details: `Red is an early-stage project to fine-tune a model into a Linux CLI assistant.
- Curating a JSONL dataset of command and response pairs with context, mission tags, tool usage and OS compatibility
- Training pipeline built on TensorFlow and Hugging Face Transformers
- YAML-based configs for safe, repeatable experiments
- Next: expand dataset coverage and evaluate command accuracy and safety`,
  },
  {
    title: 'SmartBiz Dashboard',
    tagline: 'Business management dashboard',
    status: 'Full-stack',
    description: 'Business dashboard with an ASP.NET Web API backend in C# and a React + Vite frontend.',
    tech: ['C#', 'ASP.NET API', 'React', 'Vite'],
    repoUrl: 'https://github.com/Ray743/smartbiz-dashboard',
    details: `SmartBiz Dashboard is a full-stack business dashboard split into a C# backend and a dedicated frontend app.
- SmartBiz.API backend written in C#
- React + Vite frontend consuming the API
- Shows range beyond the Python and JavaScript stack`,
  },
  {
    title: 'Code Writer',
    tagline: 'In-browser word processor',
    status: 'Web app',
    description: 'Lightweight browser editor for writing notes and code-heavy documents, with pagination and export.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    repoUrl: 'https://github.com/Ray743/web-word',
    details: `Code Writer is a lightweight word processor that runs entirely in the browser.
- Pagination, export and code-friendly formatting
- Responsive layout for writing on any screen
- Plain JavaScript, no framework, built for speed and simplicity`,
  },
  {
    title: 'Aronga PNG Limited',
    tagline: 'Freelance company website',
    status: 'Client work',
    description: 'Company website for a civil engineering contractor in Papua New Guinea, from design to VPS deployment.',
    tech: ['React', 'Tailwind', 'Formspree', 'Linux VPS'],
    details: `A freelance build, from the first design to deployment on a VPS running a Linux stack.
- React + Tailwind, fully responsive
- Embedded Google Maps for the office location
- Contact form with email notifications via Formspree
- Handled DNS (A and MX records), SEO and Google indexing`,
  },
  {
    title: 'Portfolio 2.0',
    tagline: 'This site',
    status: 'Live',
    description: 'A desktop-inspired portfolio with draggable windows, a dock and a live clock.',
    tech: ['React', 'Vite', 'Tailwind', 'Framer Motion', 'EmailJS'],
    repoUrl: 'https://github.com/Ray743/portfolio',
    details: `The site you're on: a Linux-desktop-style portfolio.
- Draggable, maximisable windows with keyboard support (Esc closes)
- Dock and desktop icons, live clock in the top bar
- Framer Motion animations and a fully responsive mobile layout
- Contact form powered by EmailJS
- Deployed to GitHub Pages`,
  },
];

const Projects = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        setActive(null);
      }
    };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [active]);

  return (
    <section className="py-6 px-2 sm:px-4">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-8"
      >
        Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {projects.map((proj, i) => (
          <motion.button
            type="button"
            key={proj.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            onClick={() => setActive(proj)}
            className="text-left p-4 bg-black text-white border border-gray-700 rounded-xl hover:border-cyan-400/60 hover:bg-white/5 transition duration-200 cursor-pointer flex flex-col"
          >
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="text-lg font-semibold">{proj.title}</h3>
              <span className="shrink-0 text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full border border-cyan-500/40 text-cyan-300">
                {proj.status}
              </span>
            </div>
            <p className="text-xs text-blue-400 mb-2">{proj.tagline}</p>
            <p className="text-sm text-gray-300 mb-3 flex-1">{proj.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {proj.tech.map((t) => (
                <span key={t} className="text-[11px] px-2 py-0.5 rounded bg-white/10 text-gray-200">{t}</span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center p-4 z-[90]"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a] w-full max-w-lg max-h-[85vh] overflow-y-auto p-6 rounded-2xl border border-gray-600 shadow-xl"
            >
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xl font-bold">{active.title}</h3>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="w-7 h-7 p-0 rounded-full bg-red-500 hover:scale-110 flex items-center justify-center"
                  title="Close"
                  aria-label="Close"
                >
                  <X className="w-4 h-4 text-black" />
                </button>
              </div>
              <p className="text-sm text-blue-400 mb-4">{active.tagline}</p>

              <p className="text-sm mb-4 whitespace-pre-line text-gray-200">{active.details}</p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {active.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded bg-white/10 text-gray-200">{t}</span>
                ))}
              </div>

              <div className="flex justify-center gap-3">
                {active.previewUrl && (
                  <a
                    href={active.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded hover:bg-white/20 text-white"
                  >
                    <ExternalLink className="w-4 h-4" /> Visit Site
                  </a>
                )}
                {active.repoUrl && (
                  <a
                    href={active.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-600 rounded hover:bg-white/20 text-white"
                  >
                    <Github className="w-4 h-4" /> View Repo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
