import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import {IoCloseOutline, IoMenu} from "react-icons/io5";

const tabs = ['Home', 'About', 'Skills', 'Projects', 'Contact'];
const Navbar = () => {
    const [activeTab, setActiveTab] = useState('Home');
    const [isOpen, setIsOpen] = useState(false);

    // Handle tab click
    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
        // Scroll to the section of the clicked tab
        document.getElementById(tab.toLowerCase())?.scrollIntoView({behavior: 'smooth'});
    };

    // Handle dynamic active tab based on scroll
    useEffect(() => {
        const sectionElements = tabs.map(tab => document.getElementById(tab.toLowerCase()));

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id.charAt(0).toUpperCase() + entry.target.id.slice(1));
                }
            });
        }, {threshold: 0.6}); // Trigger when 60% of the section is visible

        // Observe each section
        sectionElements.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionElements.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <nav className="p-4 fixed top-0 left-0 w-full z-10 flex justify-center items-center">
            <div className="container mx-auto flex justify-center items-center">
                <div
                    className="hidden md:block relative bg-white md:bg-white/20 backdrop-blur-xl rounded-full shadow-lg">
                    {/* Background slider */}
                    <motion.div
                        className="absolute bg-white rounded-full py-1 shadow-sm"
                        layoutId="activeTab"
                        initial={false}
                        transition={{type: 'spring', stiffness: 500, damping: 30}}
                        style={{
                            height: '100%',
                            width: `${100 / tabs.length}%`,
                            top: 0,
                            left: `${(tabs.indexOf(activeTab) / tabs.length) * 100}%`,
                        }}
                    />
                    {/* Nav Items */}
                    <ul className="relative z-10 flex space-x-3 px-4 py-2">
                        {tabs.map((item, index) => (
                            <motion.li
                                key={index}
                                className="relative items-center text-center p-2 w-32 cursor-pointer"
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.1 * index, duration: 0.5}}
                                whileHover={{scale: 1.1}}
                                onClick={() => handleTabClick(item)}
                            >
                                <motion.a
                                    className={`px-6 py-3 rounded-full text-center transition-all duration-200`}
                                >
                                    {item}
                                </motion.a>
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col items-center">
                    <div className="md:hidden bg-white p-3 items-center justify-center rounded-full font-black flex">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <IoCloseOutline className="h-6 w-6"/> : <IoMenu className="h-6 w-6"/>}
                        </button>
                    </div>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{
                                    height: 0,
                                }}
                                animate={{
                                    transition: {
                                        duration: 0.5
                                    },
                                    height: 'auto'
                                }}
                                exit={{
                                    height: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: 0.6,
                                    },
                                }}
                                className="md:hidden mt-4 p-4 backdrop-blur-xl bg-white/20 h-screen w-screen bg-opacity-90 rounded-lg space-y-3 items-center text-center justify-center">
                                <ul>
                                    {tabs.map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="relative items-center text-center p-2 cursor-pointer"
                                            initial={{opacity: 0, y: 20}}
                                            animate={{opacity: 1, y: 0}}
                                            transition={{delay: 0.1 * index, duration: 0.5}}
                                            exit={{opacity: 0, y: -20}}
                                            whileHover={{scale: 1.1}}
                                            onClick={() => {
                                                setIsOpen(false);
                                                handleTabClick(item);
                                            }}
                                        >
                                            <motion.a
                                                className={`px-6 py-3 flex-1 rounded-md text-center text-3xl w-full transition-all duration-200 text-black ${
                                                    activeTab === item ? 'font-black bg-white' : ''
                                                }`}
                                            >
                                                {item}
                                            </motion.a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
