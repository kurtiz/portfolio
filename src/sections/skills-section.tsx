import {motion, useInView} from "framer-motion";
import {skills} from "../data/skills-repository.ts";
import {useRef} from "react";


const circleVariants = {
    initial: {
        scale: 0,
        x: 0,
        y: 0,
    },
    move1: {
        scale: [1, 1.5, 1],
        x: [0, 100, 150, 100, 0],
        y: [0, -30, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
        },
    },
    move2: {
        scale: [1, 1.5, 1],
        x: [0, -30, 0],
        y: [0, 100, 150, 100, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    },
    move3: {
        scale: [1, 1.5, 1],
        x: [0, 100, 150, 0],
        y: [0, -30, 100, 0],
        transition: {
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }
};

const SkillsSection = () => {

    const headingRef = useRef(null);
    const cardsRef = useRef(null);

    const headingInView = useInView(headingRef, {once: true});
    const cardsInView = useInView(cardsRef, {once: true});

    return (
        <section id="skills"
                 className="flex py-4 md:py-auto items-center justify-center min-h-[100dvh] bg-gray-100 relative object-fill">
            {/* Background circles */}
            <motion.div
                className="absolute top-20 left-70 w-48 h-48 md:w-72 md:h-72 bg-yellow-500 rounded-full opacity-30 blur-2xl"
                variants={circleVariants}
                initial="initial"
                animate="move1"
            />
            <motion.div
                className="absolute bottom-40 right-60 w-48 h-48 md:w-80 md:h-80 bg-purple-500 rounded-full opacity-30 blur-2xl"
                variants={circleVariants}
                initial="initial"
                animate="move2"
            />
            <motion.div
                className="absolute bottom-32 left-60 w-48 h-48 md:w-64 md:h-64 bg-pink-500 rounded-full opacity-30 blur-2xl"
                variants={circleVariants}
                initial="initial"
                animate="move3"
            />
            <motion.div
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
            >
                <motion.h1
                    ref={headingRef}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={headingInView? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ duration: 1 }}
                    className="text-center text-3xl font-bold">
                    Skills And Tools
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={headingInView? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ duration: 1 }}
                    className="text-gray-500 text-center text-lg px-4 mb-4">
                    Here are my skills and some of the tools and technologies I have worked with.
                </motion.p>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-5 lg:grid-cols-7 px-4 mb-5">
                    {skills.map((skill) =>
                        <motion.div
                            ref={cardsRef}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={cardsInView? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                            transition={{ duration: 1 }}
                            key={skill.name}
                            className="bg-white/60 backdrop-blur-3xl rounded-lg p-4 flex items-center justify-center flex-col">
                            <motion.img
                                initial={{
                                    rotate: 0,
                                    scale: 1,
                                }}
                                whileHover={{
                                    rotate: [0, 20, -20, 20, 0],
                                    scale: 1.5,
                                    transition: {
                                        duration: 0.5,
                                    }
                                }}
                                src={skill.icon}
                                alt={skill.name}
                                className="w-12 h-12 mx-auto my-4"/>
                            <p>
                                {skill.name}
                            </p>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </section>
    );
};

export default SkillsSection;


