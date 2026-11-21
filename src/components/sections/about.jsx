import photo from "../../assets/photo.webp";
import data from "../../data/resumeData.json";

const stats = [
  { value: "4+", label: "Years in IT" },
  { value: "CCNA", label: "Cisco certified" },
  { value: "A+", label: "CompTIA certified" },
];

const About = () => {
  return (
    <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 md:p-8 text-white bg-black/90 border border-gray-700 rounded-xl shadow-2xl">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <img
          src={photo}
          alt="Portrait of Raynold Bobola"
          width="524"
          height="476"
          className="w-40 sm:w-48 md:w-56 h-auto object-cover shadow-lg rounded-full aspect-square shrink-0"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-1">{data.name}</h2>
          <p className="text-lg font-semibold text-blue-400 mb-1">Full-Stack Developer · Python · Linux</p>
          <p className="text-sm text-gray-400 mb-4">{data.location}</p>
          <p className="text-sm sm:text-base leading-relaxed text-gray-300">
            I'm Raynold, a full-stack developer and ICT professional who likes building things people actually use.
            I take projects from idea to production: Python scrapers and FastAPI services, SQL databases, React frontends,
            and the Linux servers, reverse proxies and SSL that keep them running.
            <br /><br />
            My flagship project, <span className="text-white font-medium">The Seeker</span>, pulls job listings from across
            Papua New Guinea into one searchable hub. I'm formally trained in Java EE, hold CCNA and CompTIA A+ certifications,
            and right now I'm focused on AI: LLM-powered command-line assistants and fine-tuning models for Linux automation.
            <br /><br />
            Have a look at the Projects window, or reach out if you'd like to collaborate.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3 mt-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center p-3 rounded-lg border border-gray-700 bg-white/5">
            <div className="text-xl sm:text-2xl font-bold text-cyan-400">{s.value}</div>
            <div className="text-xs text-gray-400">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
