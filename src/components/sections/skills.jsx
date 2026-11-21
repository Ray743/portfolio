import { motion } from 'framer-motion';
import {
  SiReact, SiTailwindcss, SiJavascript, SiFramer, SiNodedotjs, SiExpress, SiMysql, SiGit, SiAxios,
  SiReactrouter, SiVite, SiPython, SiLinux, SiGithubactions, SiTensorflow, SiCplusplus, SiDotnet,
  SiGnubash, SiBootstrap, SiFastapi, SiApache, SiPm2, SiGithub, SiHuggingface, SiCisco, SiKalilinux, SiUbuntu
} from "react-icons/si";
import { FaJava, FaDatabase, FaServer, FaLock, FaClock, FaRobot, FaCertificate, FaShieldAlt } from "react-icons/fa";

const skillCategories = {
  Languages: ['Python', 'JavaScript', 'Java', 'C++', 'C#', 'SQL', 'Bash'],
  Frontend: ['React', 'Vite', 'Tailwind CSS', 'Bootstrap', 'Framer Motion', 'React Router'],
  Backend_APIs: ['FastAPI', 'Node.js', 'Express JS', 'JSP / Servlets', 'REST APIs', 'ASP.NET'],
  Databases: ['MySQL', 'SQL Server', 'Query Optimization'],
  DevOps_Hosting: [
    'Linux CLI',
    'VPS Hosting',
    'Apache Reverse Proxy',
    'SSL / TLS',
    'pm2',
    'Cron Jobs',
    'Git',
    'GitHub Actions',
    'GitHub Pages'
  ],
  AI_Automation: [
    'LLM APIs',
    'Fine-tuning',
    'Hugging Face Transformers',
    'TensorFlow',
    'Crawl4AI',
    'BeautifulSoup'
  ],
  Networking_Security: ['CCNA', 'CompTIA A+', 'Kali Linux', 'Ubuntu', 'Network Security']
};

const iconMap = {
  Python: SiPython,
  JavaScript: SiJavascript,
  Java: FaJava,
  'C++': SiCplusplus,
  'C#': SiDotnet,
  SQL: SiMysql,
  Bash: SiGnubash,
  React: SiReact,
  Vite: SiVite,
  'Tailwind CSS': SiTailwindcss,
  Bootstrap: SiBootstrap,
  'Framer Motion': SiFramer,
  'React Router': SiReactrouter,
  FastAPI: SiFastapi,
  'Node.js': SiNodedotjs,
  'Express JS': SiExpress,
  'JSP / Servlets': FaJava,
  'REST APIs': SiAxios,
  'ASP.NET': SiDotnet,
  MySQL: SiMysql,
  'SQL Server': FaDatabase,
  'Query Optimization': FaDatabase,
  'Linux CLI': SiLinux,
  'VPS Hosting': FaServer,
  'Apache Reverse Proxy': SiApache,
  'SSL / TLS': FaLock,
  pm2: SiPm2,
  'Cron Jobs': FaClock,
  Git: SiGit,
  'GitHub Actions': SiGithubactions,
  'GitHub Pages': SiGithub,
  'LLM APIs': FaRobot,
  'Fine-tuning': SiHuggingface,
  'Hugging Face Transformers': SiHuggingface,
  TensorFlow: SiTensorflow,
  Crawl4AI: SiPython,
  BeautifulSoup: SiPython,
  CCNA: SiCisco,
  'CompTIA A+': FaCertificate,
  'Kali Linux': SiKalilinux,
  Ubuntu: SiUbuntu,
  'Network Security': FaShieldAlt
};

const Skills = () => {
  return (
    <section className="relative py-6">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center mb-8 text-white relative z-10"
      >
        My Skills
      </motion.h2>

      {/* Skill Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto px-4 z-10 relative">
        {Object.entries(skillCategories).map(([category, skills], catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.08, duration: 0.4 }}
            className="bg-black/30 p-6 rounded-xl border-t border-gray-600 backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold mb-6 text-center text-white">
              {category.replaceAll('_', ' ')}
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => {
                const Icon = iconMap[skill];
                return (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.03 }}
                    className="flex flex-col items-center justify-center gap-2 w-[96px] h-[88px] p-1 bg-white/85 text-center rounded-xl
                     hover:scale-105 transition-transform duration-200"
                  >
                    {Icon && <Icon size={28} className="text-black" />}
                    <span className="text-xs font-medium text-center text-black leading-tight">{skill}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
