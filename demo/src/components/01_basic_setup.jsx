import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

const BasicSetup = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <div 
        style={{
            display: "grid",
            placeContent: "center",
            height: "100vh",
            gap: "0.8rem",
        }}>

            <motion.button layout type="button" onClick={() => setIsVisible(!isVisible)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <span className="text-l">Click</span>
            </motion.button>
            <AnimatePresence mode="popLayout">
                {isVisible && (
                <motion.div
                initial={{ 
                    opacity: 0, 
                    rotate: 0,
                    y: 0,
                }}
                animate={{ 
                    opacity: 1, 
                    rotate: 180,
                    y: [0, 50, -50,-50,0],
                }}
                exit={{
                    opacity: 0, 
                    rotate: 360
                }} 
                transition={{ 
                    duration: 1, 
                    ease: "easeInOut",
                    times: [0, 0.25, 0.5, 0.85, 1]
                }}
                style={{
                    height: "100px",
                    width: "100px",
                    backgroundColor: "lightblue", 
                }}>
                </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default BasicSetup;