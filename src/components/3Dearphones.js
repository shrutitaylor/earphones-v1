import React, { useEffect, useRef } from "react";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Earphone } from "./earphone";

gsap.registerPlugin(ScrollTrigger);

export default function EarphoneModel() {
  const cameraRef = useRef(null);

  useEffect(() => {
    gsap.to(cameraRef.current.position, {
      y: -100,
      z: 100,
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, 3, 10);
    }
  });

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        fov={45}
        near={0.1}
        far={10000}
        makeDefault
        position={[0, 3, 10]}
      />
      <Environment preset="city" />
      <Earphone />
    </>
  );
}
