import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import RadialMenu from './components/RadialMenu';


function App() {
  return (
    <div className="relative bg-dark text-neon font-techno w-full h-screen overflow-hidden overflow-x-hidden no-scrollbar">
      {/* Scroll snapping container */}
      <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar overflow-x-hidden">
        <section id="hero" className="snap-start h-screen w-full "><Hero /></section>
        <section id="skills" className="snap-start h-screen w-full"><Skills /></section>
        <section id="projects" className="snap-start h-screen w-full"><Projects /></section>
        <section id="contact" className="snap-start h-screen w-full"><Contact /></section>
      </div>
    </div>
  );
}

export default App;
{/*<div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar"></div>*/ }
