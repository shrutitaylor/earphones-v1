import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion"; // Import Framer Motion
import EarphoneModel from "../components/3Dearphones";
import EarphoneColorChanger from "../components/earphoneColorChange";
import LandingFooter from "../components/landingFooter";
import Navbar from "../components/navbar";
import RippleEffect from "../components/rippleEffect";
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import Features from "../components/features";
import Loader from "../components/loader";
import Pattern from "../components/backPattern";
import Faq from "./Review";
import ParallaxText from "../components/scrollText";
import Footer from "../components/footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home({loaded}) {
    const mainRef = useRef(null);
    const sceneRef = useRef(null);
    const [progress, setProgress] = useState(0);
    

    useEffect(() => {
        // Animation for the 3D scene
        gsap.timeline({
            scrollTrigger: {
                trigger: mainRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
                onUpdate: (self) => {
                    setProgress(self.progress);
                },
            },
        })
        .to(sceneRef.current, {
            x: '-25vw',
            y: '100vh',
            ease: "linear"
        })
        .to(sceneRef.current, {
            x: '25vw',
            y: '200vh',
            ease: "linear"
        })
        .to(sceneRef.current, {
            x: '-25vw',
            y: '320vh',
            ease: "linear"
        });
    }, []);

    return (
        <>
        {/* <Suspense fallback={  <Loader isLoading />  }> */}
       
        <div 
        className={` transition-all duration-1000 ease-in-out ${
          loaded ? "opacity-1 flex flex-col h-full" : "opacity-0 h-0"
        }`}>
            <Pattern />
            <main ref={mainRef} className="overflow-hidden text-black">
                <Navbar />
                
                    {/* Section 1 */}
                    <motion.section
                        
                        className="relative grid place-items-center h-[100vh]"
                    >
                        <p className="font-pressStart text-right md:text-center absolute top-[6%] mx-4 w-fit text-[9vw] leading-[9vw] font-bold">
                            BOSE<br></br> HEADPHONES
                        </p>
                        <LandingFooter />

                        {/* Canvas (independent of fade effects) */}
                        <div ref={sceneRef} className="h-[100vh] w-[100vw]">
                            <Canvas>
                                <EarphoneModel progress={progress} />
                            </Canvas>
                        </div>
                    </motion.section>

                    {/* Section 2 */}
                    <motion.section
                        className="relative text-right flex items-center justify-start h-[100vh]"
                    >
                        <p className="w-[40%] border-0 border-red-700"></p>
                        <div className="w-full bg-opacity-50 bg-white md:bg-transparent md:m-0 md:w-[60%] text-right px-4">
                            <Section1 />
                        </div>
                    </motion.section>
                    <ParallaxText baseVelocity={-5}>BOSE headphones</ParallaxText>
                    {/* Section 3 */}
                    <motion.section
                        
                        className="relative flex text-left items-center justify-oddly h-[100vh]"
                    >
                        <div className="w-full bg-opacity-50 bg-white md:bg-transparent md:m-0 md:w-[60%] px-4">
                            <Section2 />
                        </div>
                        <p className="md:w-[40%] order-2"></p>
                    </motion.section>
                    
                    <ParallaxText baseVelocity={5}>BOSE headphones</ParallaxText>
                    {/* Section 4 */}
                    <motion.section
                        
                        className="relative flex items-center justify-oddly h-[100vh]"
                    >
                        <p className="md:w-[30%] border-0 border-red-700"></p>
                        <div className="w-full bg-opacity-50 bg-white md:bg-transparent md:m-0 md:w-[70%] text-right px-4">
                            <Features />
                        </div>
                    </motion.section>
               
            </main>
            <div>
              <Faq />
            </div>
            <Footer />
            </div>
          
            {/* <EarphoneColorChanger /> */}
        </>
    );
}