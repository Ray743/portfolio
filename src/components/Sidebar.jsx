import React from "react";
import { FaUser, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const icons = [
  { name: "about", icon: <FaUser />, label: "About" },
  { name: "skills", icon: <FaTools />, label: "Skills" },
  { name: "projects", icon: <FaProjectDiagram />, label: "Projects" },
  { name: "contact", icon: <FaEnvelope />, label: "Contact" },
];

export default function Sidebar({ openWindow }) {
  return (
    <div className="absolute top-12 left-0 h-[90%] w-16 flex flex-col items-center gap-4 py-4 bg-black/40 backdrop-blur-sm rounded-r-xl">
      {icons.map((item) => (
        <button
          key={item.name}
          onClick={() => openWindow(item.name)}
          className="p-2 rounded-lg text-white hover:text-cyan-400 transition duration-200 bg-transparent"
          title={item.label}
          style={{ backgroundColor: "transparent" }}
        >
          {item.icon}
        </button>
      ))}
    </div>
  );
}

