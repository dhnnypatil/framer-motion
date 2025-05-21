import React from "react";
import { useState } from "react";
import { motion, MotionConfig } from "motion/react";

const Gestures = () => {
    return(
        <div
            style={{
            display: "grid",
            placeContent: "center",
            height: "100vh",
            gap: "0.8rem",
        }}>     
            <MotionConfig             
                transition = {{
                    duration: 0.125,
                    ease: "easeInOut",
                }}>
                <motion.button 
                    whileHover = {{scale: 1.05}} 
                    whileTap = {{scale: 0.95, rotate: "2.5deg"}}
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    click
                </motion.button>

                <motion.button 
                    whileHover = {{scale: 1.15}} 
                    whileTap = {{scale: 0.95, rotate: "-2.5deg"}}
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                    click
                </motion.button>
            </MotionConfig>
        </div>
    )
}

export default Gestures;