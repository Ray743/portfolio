import React, { useEffect, useState } from "react";

export default function Topbar() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-10 bg-black/60 backdrop-blur-sm border-b border-white/5 flex justify-between items-center px-4 text-sm text-white fixed top-0 z-20">
      <div className="flex gap-4 items-center">
        <span className="font-bold">Raynold Bobola</span>
        <span className="hidden sm:inline text-red-500 font-mono">
          ~/portfolio <span className="text-blue-500">v2.1</span>
        </span>
      </div>
      <div className="flex items-center gap-3 font-mono">
        <span className="hidden sm:flex items-center gap-1.5 text-xs text-gray-300">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> Port Moresby, PNG
        </span>
        <time dateTime={now.toISOString()}>
          {now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
        </time>
      </div>
    </div>
  );
}
