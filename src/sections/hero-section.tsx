import {motion} from "framer-motion";
import {BiArrowFromTop} from "react-icons/bi";

const HeroSection = () => {

    const handleCTAClick = () => {
        // Scroll to the section of the clicked tab
        document.getElementById("about")?.scrollIntoView({behavior: 'smooth'});
    };
    return (
        <section id="home" className="snap-start object-fill flex flex-col items-center justify-center px-5 h-[100dvh] bg-gray-100"
                 style={{
                     backgroundImage: "url('/assets/grid-bg.png')",
                 }}>
            {/*bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-500 to-black px-10"*/}
            <motion.div
                className="items-center justify-center flex flex-col"
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 1}}
            >
                <h1 className="text-center mt-4 text-5xl font-bold">
                    I am Aaron Will Djaba
                </h1>
                <p className="mt-2 text-center text-lg px-12">
                    A Full Stack Web and Mobile Developer and
                    a Cyber Security Enthusiast
                </p>
                <img src="/assets/web-developer.png" alt="web-developer" className="h-72"/>
            </motion.div>
            <motion.div>
                <div
                    onClick={handleCTAClick}
                    className="bg-gray-200 mt-4 rounded-full items-center p-2 hover:bg-gray-300 transition-all 
                    duration-300 animate-bounce justify-center flex h-12 w-12 cursor-pointer">
                    <BiArrowFromTop className="w-5 h-5"/>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;