import { motion } from "framer-motion";
import { BiArrowFromTop } from "react-icons/bi";

const HeroSection = () => {

    const handleCTAClick = () => {
        // Scroll to the section of the clicked tab
        document.getElementById("about")?.scrollIntoView({ behavior: 'smooth' });
    };

    const circleVariants = {
        initial:{
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

    return (
        <motion.section
            id="home"
            className="object-fill relative flex flex-col items-center
            justify-center px-5 min-h-[100dvh] bg-gray-100 overflow-hidden"
        >
            {/* Background circles */}
            <motion.div
                className="absolute top-40 left-70 w-48 h-48 md:w-72 md:h-72 bg-yellow-500 rounded-full opacity-50 blur-2xl"
                variants={circleVariants}
                initial="initial"
                animate="move1"
            />
            <motion.div
                className="absolute bottom-40 right-60 w-48 h-48 md:w-80 md:h-80 bg-purple-500 rounded-full opacity-50 blur-2xl"
                variants={circleVariants}
                initial="initial"
                animate="move2"
            />
            <motion.div
                className="absolute bottom-32 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-pink-500 rounded-full opacity-50 blur-2xl"
                variants={circleVariants}
                initial="initial"
                animate="move3"
            />

            {/* Content */}
            <motion.div
                className="items-center justify-center flex flex-col"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <h1 className="text-center mt-4 text-5xl font-bold">
                    I am Aaron Will Djaba
                </h1>
                <p className="mt-2 text-center text-lg px-12">
                    A Software Engineer, Full Stack Web and Mobile Developer and
                    a Cyber Security Enthusiast
                </p>
                <img src="/assets/web-developer.png" alt="web-developer" className="h-72" />
            </motion.div>

            {/* CTA button */}
            <motion.div>
                <div
                    onClick={handleCTAClick}
                    className="bg-gray-200 mt-4 rounded-full items-center p-2 hover:bg-gray-300 transition-all
                    duration-300 animate-bounce justify-center flex h-12 w-12 cursor-pointer"
                >
                    <BiArrowFromTop className="w-5 h-5" />
                </div>
            </motion.div>
        </motion.section>
    );
};

export default HeroSection;
