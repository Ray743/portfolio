import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import data from "../../data/resumeData.json";

const Heading = ({ icon: Icon, children }) => (
  <h3 className="flex items-center gap-2 text-lg font-semibold text-cyan-400 mb-4">
    <Icon className="w-5 h-5" /> {children}
  </h3>
);

const Resume = () => {
  return (
    <section className="max-w-3xl mx-auto py-4 sm:py-6 space-y-10">
      <header className="text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold">{data.name}</h2>
        <p className="text-blue-400 font-medium">{data.headline}</p>
        <p className="text-sm text-gray-400">{data.location}</p>
        <p className="mt-4 text-sm sm:text-base text-gray-300 leading-relaxed">{data.summary}</p>
        <div className="mt-4 flex flex-wrap justify-center sm:justify-start gap-3">
          <a href={data.links.github} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 px-3 py-1.5 text-sm text-white border border-gray-600 rounded hover:bg-white/10">
            <FaGithub /> GitHub
          </a>
          <a href={data.links.linkedin} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 px-3 py-1.5 text-sm text-white border border-gray-600 rounded hover:bg-white/10">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </header>

      <div>
        <Heading icon={Briefcase}>Experience</Heading>
        <ol className="relative border-l border-gray-700 ml-2 space-y-6">
          {data.experience.map((job, i) => (
            <motion.li
              key={job.role + job.org}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="pl-5"
            >
              <span className="absolute -left-[6px] mt-1.5 w-3 h-3 rounded-full bg-cyan-400" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h4 className="font-semibold">{job.role}</h4>
                <span className="text-xs text-gray-400 font-mono">{job.years}</span>
              </div>
              <p className="text-sm text-gray-400 mb-2">{job.org}</p>
              <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-gray-300">
                {job.achievements.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>

      <div>
        <Heading icon={GraduationCap}>Education</Heading>
        {data.education.map((e) => (
          <div key={e.title} className="p-4 border border-gray-700 rounded-lg bg-white/5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3">
              <h4 className="font-semibold">{e.title}</h4>
              <span className="text-xs text-gray-400 font-mono">{e.years}</span>
            </div>
            <p className="text-sm text-gray-400">{e.org}</p>
            <p className="text-sm text-gray-300 mt-2">{e.detail}</p>
          </div>
        ))}
      </div>

      <div>
        <Heading icon={Award}>Certifications</Heading>
        <div className="flex flex-wrap gap-3">
          {data.certifications.map((c) => (
            <span key={c} className="px-3 py-1.5 text-sm rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-200">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
