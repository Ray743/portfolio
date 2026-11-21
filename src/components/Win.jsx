import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { FaTimes, FaWindowMaximize, FaWindowRestore } from "react-icons/fa";

const TOPBAR = 40;
const DOCK = 72;

const desktopSize = () => ({
  width: Math.min(820, window.innerWidth - 48),
  height: Math.min(600, window.innerHeight - TOPBAR - DOCK - 24),
});

const centred = () => {
  const { width, height } = desktopSize();
  return {
    x: Math.max(16, (window.innerWidth - width) / 2),
    y: Math.max(TOPBAR + 8, TOPBAR + (window.innerHeight - TOPBAR - DOCK - height) / 2),
  };
};

const Win = ({ title = "Window", children, onClose }) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 640);
  const [isMaximized, setIsMaximized] = useState(false);
  const [size, setSize] = useState(desktopSize);
  const [position, setPosition] = useState(centred);
  const drag = useRef(null);

  // Keep the window sane when the viewport changes.
  useEffect(() => {
    const onResize = () => {
      setIsMobile(window.innerWidth < 640);
      setSize(desktopSize());
      setPosition(centred());
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Esc closes the window.
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const onPointerMove = useCallback((e) => {
    if (!drag.current) return;
    const { dx, dy } = drag.current;
    setPosition({
      x: Math.min(Math.max(e.clientX - dx, 0), window.innerWidth - 120),
      y: Math.min(Math.max(e.clientY - dy, TOPBAR), window.innerHeight - 60),
    });
  }, []);

  const onPointerUp = useCallback(() => {
    drag.current = null;
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  }, [onPointerMove]);

  useEffect(() => onPointerUp, [onPointerUp]);

  const onPointerDown = (e) => {
    if (isMobile || isMaximized || e.target.closest("button")) return;
    drag.current = { dx: e.clientX - position.x, dy: e.clientY - position.y };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  const full = isMobile || isMaximized;
  const style = full
    ? { top: isMobile ? 0 : TOPBAR, left: 0, width: "100vw", height: isMobile ? "100dvh" : `calc(100vh - ${TOPBAR}px)` }
    : { top: position.y, left: position.x, width: size.width, height: size.height };

  return (
    <motion.div
      role="dialog"
      aria-label={title}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.18 }}
      className={`fixed bg-[#0a0a0a]/95 backdrop-blur-md border border-gray-700 shadow-2xl shadow-black/60 flex flex-col ${
        full ? "rounded-none" : "rounded-lg"
      }`}
      style={{ ...style, zIndex: 70 }}
    >
      <div
        className={`bg-black/70 border-b border-[#364153] text-white px-3 py-2 flex items-center justify-between select-none touch-none ${
          full ? "" : "rounded-t-lg cursor-grab active:cursor-grabbing"
        }`}
        onPointerDown={onPointerDown}
        onDoubleClick={() => !isMobile && setIsMaximized((m) => !m)}
      >
        <span className="font-semibold text-sm">
          <span className="text-cyan-400">~/</span>
          {title}
        </span>

        <div className="flex items-center gap-2">
          {!isMobile && (
            <button
              type="button"
              onClick={() => setIsMaximized((m) => !m)}
              className="w-7 h-7 p-0 rounded-full bg-green-500 hover:scale-110 flex items-center justify-center"
              title={isMaximized ? "Restore" : "Maximise"}
              aria-label={isMaximized ? "Restore window" : "Maximise window"}
            >
              {isMaximized ? (
                <FaWindowRestore className="text-[13px] text-black" />
              ) : (
                <FaWindowMaximize className="text-[13px] text-black" />
              )}
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="w-7 h-7 p-0 rounded-full bg-red-500 hover:scale-110 flex items-center justify-center"
            title="Close (Esc)"
            aria-label="Close window"
          >
            <FaTimes className="text-[13px] text-black" />
          </button>
        </div>
      </div>

      <div className={`flex-1 overflow-auto p-4 text-white ${isMobile ? "pb-24" : ""}`}>{children}</div>
    </motion.div>
  );
};

export default Win;
