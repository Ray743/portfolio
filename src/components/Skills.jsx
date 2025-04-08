import { motion } from 'framer-motion';
import {
    SiReact,
    SiTailwindcss,
    SiJavascript,
    SiFramer,
    SiNodedotjs,
    SiExpress,
    SiMysql,
    SiGit,
    SiAxios,
    SiReactrouter,
    SiVite,
    SiWordpress
} from "react-icons/si";

const skillCategories = {
    "Frontend": ['React', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'React Router', 'Vite'],
    "Backend": ['Node.js', 'Express JS', 'RESTful APIs', 'Axios'],
    "Database & DevOps": ['MySQL', 'Git', 'Production & DevOps', 'WordPress']
};

const iconMap = {
    "React": SiReact,
    "Tailwind CSS": SiTailwindcss,
    "JavaScript": SiJavascript,
    "Framer Motion": SiFramer,
    "React Router": SiReactrouter,
    "Vite": SiVite,
    "Node.js": SiNodedotjs,
    "Express JS": SiExpress,
    "RESTful APIs": SiAxios,
    "Axios": SiAxios,
    "MySQL": SiMysql,
    "Git": SiGit,
    "WordPress": SiWordpress,
};

const Skills = () => {
    return (
        <section className="relative h-screen bg-[#0a0a0a] overflow-hidden py-12 px-4">
            {/* Background layers */}
            <div className="motherboard-bg absolute inset-0 w-screen h-full"></div>
            <div className="circuit-overlay absolute inset-0"></div>

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl font-bold text-center mb-12 text-[#39FF14] drop-shadow-[0_0_10px_#39FF14] relative z-10"
            >
                My Skills
            </motion.h2>

            {/* Skill Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto z-10 relative">
                {Object.entries(skillCategories).map(([category, items], catIndex) => (
                    <motion.div
                        key={catIndex}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: catIndex * 0.2, duration: 0.6 }}
                        className="bg-black/30 p-6 rounded-xl border-t border-neon h-full"
                    >
                        <h3 className="text-xl font-semibold mb-6 text-center text-[#39FF14] tracking-wide drop-shadow-[0_0_5px_#39FF14]">
                            {category}
                        </h3>

                        <div className="flex flex-wrap justify-center gap-x-10 gap-y-8 px-2">
                            {items.map((skill, index) => {
                                const Icon = iconMap[skill];
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.03 }}
                                        className="flex flex-col items-center justify-center gap-2 w-[110px] h-[110px] bg-black/50 text-center rounded-xl shadow-[0_0_8px_#39FF14]"
                                    >
                                        {Icon && <Icon size={32} className="text-[#39FF14]" />}
                                        <div className="text-sm text-[#39FF14] font-medium">{skill}</div>
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