import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
    // Create refs for each paragraph and the heading
    const headingRef = useRef(null);
    const imageRef = useRef(null);
    const paragraphRefs = [useRef(null), useRef(null), useRef(null)];

    // Use the useInView hook to check if the heading and image are in view
    const headingInView = useInView(headingRef, { once: true });
    const imageInView = useInView(imageRef, { once: true });

    // Use the useScroll hook to get scroll position
    const { scrollY } = useScroll();
    const yDirection = scrollY.get() > 0 ? -20 : 20;

    // Get the inView states for each paragraph
    const inViewStates = [
        useInView(paragraphRefs[0], { once: true }),
        useInView(paragraphRefs[1], { once: true }),
        useInView(paragraphRefs[2], { once: true }),
    ];

    return (
        <section
            id="about"
            className="flex flex-col items-center justify-center h-screen bg-gray-100 px-10 flex-1"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 gap-4 items-center justify-center">
                    <div className="text-justify">
                        <motion.h1
                            ref={headingRef}
                            initial={{ opacity: 0, y: 20 }}
                            animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4"
                        >
                            About Me
                        </motion.h1>
                        {inViewStates.map((inView, index) => (
                            <motion.p
                                key={index}
                                ref={paragraphRefs[index]}
                                initial={{
                                    opacity: 0,
                                    y: yDirection
                                }}
                                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: yDirection }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="text-lg md:text-xl lg:text-2xl mt-4 tracking-wide"
                            >
                                {index === 0 && "Hello! I’m Aaron Will Djaba, a passionate full-stack web and mobile app developer with a strong focus on cyber security."}
                                {index === 1 && "I specialize in creating innovative, secure, and user-friendly applications that make a difference. I thrive in fast-paced environments where I can tackle complex challenges."}
                                {index === 2 && "When I'm not coding, you can find me diving into cyber security topics or sharing my knowledge through various platforms. Let’s connect and create something amazing together!"}
                            </motion.p>
                        ))}
                    </div>
                    <div className="flex justify-center h-full">
                        <motion.img
                            ref={imageRef}
                            src="/assets/me.jpg"
                            alt="me"
                            className="w-72 h-40 md:w-3/4 md:h-96 lg:w-96 lg:h-96 object-cover rounded-lg shadow-lg"
                            initial={{ x: '100%', opacity: 0 }}
                            animate={imageInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutSection;
