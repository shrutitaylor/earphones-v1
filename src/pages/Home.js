import React, { Suspense, useEffect, useRef, useState } from "react";
import ThreeDModel from "../components/ThreeDModel";
// import { Canvas } from "@react-three/fiber"
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import EarphoneModel from "../components/3Dearphones";

gsap.registerPlugin(ScrollTrigger) ;
export default function Home() {
    const mainRef = useRef(null);
    const sceneRef = useRef(null);
    const [progress, setProgress] = useState(0)

    useEffect(() => {
       gsap.timeline(
        {
            scrollTrigger:{
                trigger: mainRef.current,
                start:"top top",
                end: "bottom bottom",
                scrub:1,
                onUpdate:(self) => {
                    setProgress(self)
                }

            }
        }
       ).to(sceneRef.current,{
        x: '-25vw',
        y:'100vh',
        ease:"linear"
       }).to(sceneRef.current,{
        x: '25vw',
        y:'200vh',
        ease:"linear"
       }).to(sceneRef.current,{
        x: '-25vw',
        y:'300vh',
        ease:"linear"
       })
    },[])
    return (
        <>
         <main ref={mainRef} className=" md:overflow-x-hidden text-black">
            <Suspense
                fallback={
                <div className="fixed inset-0 grid place-items-center bg-black ">
                    Loading...
                </div>
                }
            >
        <section className="relative grid place-items-center h-[100vh]">
          <p className=" text-center absolute top-[5%] mx-4 w-fit text-8xl font-bold">
           BOSS EARPHONES
          </p>
        

          <div ref={sceneRef} className="h-[100vh] w-[100vw]">
            <Canvas >
                <EarphoneModel progress={progress}/>
            </Canvas>
          </div>
        </section>

        <section className=" relative flex items-center justify-start h-[100vh]">
          <p className="w-[50%] border-0 border-red-700"></p>

          <p className=" w-[50%] text-right px-4 text-4xl font-semibold">
            Effortlessly scroll, zoom, and navigate with the re-engineered
            Digital Crown, now more precise than ever.
          </p>
        </section>

        <section className=" relative flex items-center justify-oddly h-[100vh]">
          <p className=" order-1 w-[50%] text-left px-4 text-4xl font-semibold">
            Built for adventure, the rugged straps are as tough as you are,
            ready for any challenge.
          </p>
          <p className="w-[50%] order-2"></p>
        </section>

        <section className=" relative flex items-center justify-oddly h-[100vh]">
          <p className="w-[50%] border-0 border-red-700"></p>

          <p className=" w-[50%] text-right px-4 text-4xl font-semibold">
            The brightest display ever on an Apple Watch, so you can see it
            clearly even under the harshest sun.
          </p>
        </section>
      </Suspense>
    </main>
        </>
    );
}