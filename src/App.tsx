import {motion} from 'framer-motion';
import React from "react";
import HeroSection from "./sections/hero-section.tsx";
import Navbar from "./sections/nav-bar.tsx";
import AboutSection from "./sections/about-section.tsx";
import SkillsSection from "./sections/skills-section.tsx";

const App: React.FC = () => {

    return (
        <>
            <div className="h-screen overflow-y-scroll no-scrollbar scroll-smooth">
                <Navbar/>
                {/* Hero Section */}
                <HeroSection/>
                {/* About Section */}
                <AboutSection/>
                {/* Skills  Section */}
                <SkillsSection/>
                {/* Section 4 */}
                <section
                    id="projects"
                    className="snap-start flex flex-col items-center justify-center h-[100dvh] bg-black">
                    <motion.div
                        initial={{opacity: 0, scale: 0.5}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5}}
                    >
                        <h1 className="text-center text-3xl font-bold text-white">
                            Projects
                        </h1>
                    </motion.div>
                </section>
                <section
                    id="contact"
                    className="snap-start flex flex-col items-center justify-center h-[100dvh] bg-gray-200">
                    <motion.div
                        initial={{opacity: 0, scale: 0.5}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.5}}
                    >
                        <h1 className="text-center text-3xl font-bold">
                            Contact
                        </h1>
                    </motion.div>
                </section>
            </div>
        </>
    );
};

export default App;
