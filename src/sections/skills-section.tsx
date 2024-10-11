import {motion} from "framer-motion";

const SkillsSection = () => {
    return (
        <section id="skills" className="snap-start flex flex-col items-center justify-center h-[100dvh]
        bg-gray-200">
            <motion.div
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
            >
                <h1 className="text-center text-3xl font-bold">
                    Skills
                </h1>
            </motion.div>
        </section>
    );
};

export default SkillsSection;