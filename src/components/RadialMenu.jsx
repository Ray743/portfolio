// src/components/RadialMenu.jsx
import './RadialMenu.css';
import React, { useState, useRef, useEffect } from 'react';
import {
  Code, Folder, Mail, Home
} from 'lucide-react';

const menuItems = [
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: Folder },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

const RadialMenu = () => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [position, setPosition] = useState({ x: 50, y: window.innerHeight / 2 - 150 });
  const isDragging = useRef(false);
  const offset = useRef({ x: 0, y: 0 });
  const [showHint, setShowHint] = useState(true);
  const hintTimeout = useRef(null);

  const radius = 140;
  const center = 150;
  const anglePerItem = Math.PI / 4;

  const handleMouseDown = (e) => {
    isDragging.current = true;
    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y
    };
    if (showHint) setShowHint(false);
    if (hintTimeout.current) clearTimeout(hintTimeout.current);
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      setPosition({
        x: e.clientX - offset.current.x,
        y: e.clientY - offset.current.y
      });
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    hintTimeout.current = setTimeout(() => setShowHint(true), 5000);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      clearTimeout(hintTimeout.current);
    };
  }, []);

  return (
    <div
      onMouseDown={handleMouseDown}
      style={{ position: 'fixed', top: `${position.y}px`, left: `${position.x}px`, width: '300px', height: '300px', zIndex: 10, cursor: 'grab' }}
    >
      {showHint && (
        <div className="grab-me-blink absolute top-[200px] left-[80px] text-xs font-bold">
          Move Me
        </div>

      )}
      <svg width="300" height="300" viewBox="0 0 300 300">
        <path d="M150,150 L300,150 A150,150 0 0,0 150,0 Z" fill="#0a0a0add" stroke="#39FF14" strokeWidth="2" />

        {menuItems.map((item, i) => {
          const angle = (i * anglePerItem) - Math.PI / 2;
          const x1 = center + radius * Math.cos(angle);
          const y1 = center + radius * Math.sin(angle);
          const x2 = center + radius * Math.cos(angle + anglePerItem);
          const y2 = center + radius * Math.sin(angle + anglePerItem);

          const pathData = `M${center},${center} L${x1},${y1} A${radius},${radius} 0 0,1 ${x2},${y2} Z`;

          const midAngle = angle + anglePerItem / 2;
          const iconX = center + (radius - 50) * Math.cos(midAngle);
          const iconY = center + (radius - 50) * Math.sin(midAngle);

          const labelX = center + (radius - 25) * Math.cos(midAngle);
          const labelY = center + (radius - 25) * Math.sin(midAngle);

          const Icon = item.icon;

          return (
            <g
              key={i}
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex(null)}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer"
            >
              <path d={pathData} fill={hoverIndex === i ? '#39FF1455' : 'transparent'} stroke="#39FF14" strokeWidth="1" />
              <foreignObject x={iconX - 12} y={iconY - 12} width="24" height="24">
                <div className="text-neon w-6 h-6 flex items-center justify-center">
                  <Icon size={20} />
                </div>
              </foreignObject>
              <text x={labelX} y={labelY + 16} fill="#39FF14" fontSize="8" textAnchor="middle">{item.label}</text>
            </g>
          );
        })}

        <circle cx="150" cy="150" r="30" fill="#39FF14" stroke="#39FF14" strokeWidth="2" onClick={() => scrollToSection('hero')} className="cursor-pointer" />
        <foreignObject x="138" y="138" width="24" height="24">
          <div className="text-dark w-6 h-6 flex items-center justify-center">
            <Home size={20} />
          </div>
        </foreignObject>
      </svg>
    </div>
  );
};

export default RadialMenu;
