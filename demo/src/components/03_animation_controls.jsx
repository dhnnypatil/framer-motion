import React from "react";
import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

const AnimationControls = () =>{
    const controls = useAnimationControls();

    const handleClick = () => {
        controls.start("flip");
    }

    return(
        <div
            style={{
                display: "grid",
                placeContent: "center",
                height: "100vh",
                gap: "0.8rem",
            }}>
                <button 
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={handleClick}>
                        Flip
                </button>

                <motion.div 
                    style = {{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "yellow",
                    }}
                    variants={{
                        initial:{
                            rotate: 0,
                        },
                        flip:{
                            rotate: 360,
                        }
                    }}
                    initial="initial"
                    animate={controls}
                >                               
                </motion.div>  
        </div>
    )
}

export default AnimationControls;