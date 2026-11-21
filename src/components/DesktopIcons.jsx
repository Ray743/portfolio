import React, { useState, useEffect } from "react";
import { sections } from "./sectionsConfig.jsx";

function DesktopIcons({ openWindow }) {
  // Shake the About icon once on load to hint where to start.
  const [shakeAbout, setShakeAbout] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShakeAbout(false), 800); // matches .icon-shake-on-load
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="absolute top-16 sm:top-20 left-4 sm:left-10 md:left-14 grid grid-cols-3 sm:grid-cols-1 gap-4 sm:gap-5 z-10">
      {sections.map(({ name, label, Icon }) => (
        <button
          key={name}
          type="button"
          onClick={() => openWindow(name)}
          className={`w-24 flex flex-col items-center justify-center rounded-xl border border-white/10 bg-black/20 backdrop-blur-sm px-3 py-3 text-white shadow-lg transition duration-200 hover:text-cyan-400 hover:bg-black/40 ${
            name === "about" && shakeAbout ? "icon-shake-on-load" : ""
          }`}
          title={label}
        >
          <Icon size={34} />
          <span className="mt-2 text-xs font-medium text-white">{label}</span>
        </button>
      ))}
    </div>
  );
}

export default DesktopIcons;
