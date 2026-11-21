import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { sections } from "../sectionsConfig.jsx";

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/raynold-bobola-740b64341/", icon: FaLinkedin, cls: "bg-blue-600 hover:bg-blue-700" },
  { label: "GitHub", href: "https://github.com/Ray743", icon: FaGithub, cls: "bg-gray-800 hover:bg-gray-700" },
];

// Bottom dock: open any window, plus social links.
const SocialLinks = ({ activeWindow, openWindow }) => {
  return (
    <nav
      aria-label="Dock"
      className="fixed bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 px-3 py-2 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 shadow-xl z-[80]"
    >
      {sections.map(({ name, label, Icon }) => (
        <button
          key={name}
          type="button"
          onClick={() => openWindow(name)}
          title={label}
          aria-label={`Open ${label}`}
          className={`relative w-10 h-10 p-0 rounded-xl flex items-center justify-center text-white transition hover:scale-110 hover:text-cyan-400 ${
            activeWindow === name ? "bg-white/15 text-cyan-400" : "bg-white/5"
          }`}
        >
          <Icon size={18} />
          {activeWindow === name && <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-cyan-400" />}
        </button>
      ))}
      <span className="w-px h-7 bg-white/15 mx-1" />
      {links.map(({ label, href, icon: Icon, cls }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          title={label}
          aria-label={label}
          className={`w-10 h-10 rounded-full ${cls} flex items-center justify-center text-white shadow-lg transition hover:scale-110 hover:text-white`}
        >
          <Icon size={18} />
        </a>
      ))}
    </nav>
  );
};

export default SocialLinks;
