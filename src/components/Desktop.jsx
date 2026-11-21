import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Topbar from "./Topbar.jsx";
import DesktopIcons from "./DesktopIcons.jsx";
import Win from "./Win.jsx";
import ModernContact from "./sections/contact.jsx";
import About from "./sections/about.jsx";
import Resume from "./sections/resume.jsx";
import Skills from "./sections/skills.jsx";
import Projects from "./sections/projects.jsx";
import SocialLinks from "./sections/SocialLinks.jsx";
import { sections } from "./sectionsConfig.jsx";

const views = {
  about: About,
  resume: Resume,
  skills: Skills,
  projects: Projects,
  contact: ModernContact,
};

export default function Desktop() {
  const [activeWindow, setActiveWindow] = useState(null);
  const openWindow = useCallback((win) => setActiveWindow(win), []);
  const closeWindow = useCallback(() => setActiveWindow(null), []);

  const active = sections.find((s) => s.name === activeWindow);
  const View = active && views[active.name];

  return (
    <div className="w-screen h-screen overflow-hidden bg-center text-white relative">
      <div className="circuit-overlay" />
      <div className="motherboard-bg" />
      <Topbar />
      <DesktopIcons openWindow={openWindow} />

      {/* Hero greeting, shown on the bare desktop */}
      {!active && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-x-0 bottom-28 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 px-6 text-center pointer-events-none z-0"
        >
          <p className="font-mono text-cyan-400 text-sm mb-2">raynold@portfolio:~$ whoami</p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">Raynold Bobola</h1>
          <p className="mt-3 text-gray-300 text-sm sm:text-lg">
            Full-Stack Developer · Python · Linux · AI
          </p>
          <p className="mt-4 text-gray-500 text-xs sm:text-sm">Open a window from the desktop or the dock to explore.</p>
        </motion.div>
      )}

      {active && (
        <Win key={active.name} title={active.title} onClose={closeWindow}>
          <View />
        </Win>
      )}

      <SocialLinks activeWindow={activeWindow} openWindow={openWindow} />
    </div>
  );
}
