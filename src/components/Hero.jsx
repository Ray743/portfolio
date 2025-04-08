import { useCallback } from 'react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/photo.jpg';


const heroText = `
Hi, I'm Raynold — a full-stack developer who loves building modern, scalable, and impactful web apps. 
From frontend finesse to backend logic, I bring ideas to life through clean code and solid architecture.
Currently building my dream projects in fintech, VPN access systems, and full-stack dashboards.
Scroll below to view my skills and get a glimpse of my completed and progressing projects. Shoot me a message for enquiries!
`;

const Hero = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <section className="relative h-screen bg-[#0a0a0a] overflow-hidden">
            {/* Pulsing Motherboard Background */}
            <div className="motherboard-bg w-sreen h-screen"></div>

            {/* Circuit overlay */}
            <div className="circuit-overlay"></div>

            {/*<div className="pulse-background"></div> */}

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center text-neon">
                <motion.img
                    src={myPhoto}
                    alt="Raynold Bobola"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="w-[300px] h-[300px] md:w-[100px] md:h-[100px] object-cover rounded-full border-2 border-[#39FF14] shadow-[0_0_15px_#39FF14] mb-6"
                />

                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl md:text-7xl font-bold tracking-wide text-center drop-shadow-[0_0_15px_#39FF14]"
                >
                    Hi, I’m Raynold Bobola
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-6 text-xl md:text-2xl font-light text-center max-w-2xl"
                >
                    UI Architect · Full-Stack Developer
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 1 }}
                    className="mt-6 text-sm md:text-base max-w-3xl text-[#39FF14]/80 leading-relaxed"
                >
                    {heroText}
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
