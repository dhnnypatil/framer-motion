import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion"; 

const ViewBasedAnimations = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        console.log("is in View: ", isInView);
    }, [isInView]);

    return(
        <>
            <div 
                style={{
                    height: "150vh",
                }}
            ></div>
            <motion.div
                style={{
                    height: "100vh",
                    backgroundColor: "black",
                }}
                initial={{ 
                    opacity: 0,
                }}
                whileInView={{ 
                    opacity: 1,
                }}
                transition={{
                    duration: 1,
                }}
            ></motion.div>     
            <div
                ref={ref}
                style={{
                    height: "100vh",
                    backgroundColor: isInView ? "black" : "grey",
                    transition: "2.2s background-color",
                }}
            ></div>
        </>
    );
};

export default ViewBasedAnimations;