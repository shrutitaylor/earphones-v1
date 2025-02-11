import "aframe";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function ThreeDModel() {
    const { scrollYProgress } = useScroll();
    const xPosition = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-50%", "50%"]);
    const rotation = useTransform(scrollYProgress, [0, 0.5, 1], ["0deg", "90deg", "-90deg"]);
    useEffect(() => {
        require("aframe");
    }, []);

    return (
           
            <a-scene xr-mode-ui="enabled: false" embedded style={{ width: "100vw", height: "100vh" }}>
                 
                <a-entity position="0 0 2" camera>
                    
                </a-entity>
                <a-entity
                    gltf-model="/models/scene.gltf"
                    position="0 -3 -3"
                    scale="40 40 40"
                    // rotation="0 270 10" // side view straight
                    // rotation="340 300 25" // side view x y z 45 degree
                    rotation="0 0 0"
                ></a-entity>
                <a-light type="ambient" intensity="0.5"></a-light>
                <a-light type="directional" position="3 3 3" intensity="1.8"></a-light>
            </a-scene>
      
    );
}
