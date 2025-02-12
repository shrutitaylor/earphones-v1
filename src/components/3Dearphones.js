import React, { useEffect, useRef } from "react";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Earphone } from "./earphone";

gsap.registerPlugin(ScrollTrigger);

export default function EarphoneModel({ progress }) {
  const cameraRef = useRef(null);

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(0, 3, 0); // Keep camera focused on the model
    }
  });

  useEffect(() => {
    if (!cameraRef.current) return; // Ensure the camera exists

    const positions = [
      [6, -2, 6],  // Front view
      [10, 3, 0],  // Side view
      [7, 5, 7],   // 45-degree view
      [-7, 3, 7],  // Back to front view
    ];

    const totalSegments = positions.length - 1; // Number of segments
    const segmentProgress = 1 / totalSegments; // Progress per segment
    let segmentIndex = Math.floor(progress / segmentProgress);

    // Clamp the index to avoid out-of-bounds errors
    segmentIndex = Math.max(0, Math.min(segmentIndex, totalSegments - 1));

    const percentage = (progress - segmentIndex * segmentProgress) / segmentProgress;

    // Get start and end positions safely
    const startPos = positions[segmentIndex];
    const endPos = positions[segmentIndex + 1];

    if (!startPos || !endPos) return; // Safety check

    // Interpolated values for smooth transition
    const x = startPos[0] + (endPos[0] - startPos[0]) * percentage;
    const y = startPos[1] + (endPos[1] - startPos[1]) * percentage;
    const z = startPos[2] + (endPos[2] - startPos[2]) * percentage;

    cameraRef.current.position.set(x, y, z); // Directly update position

  }, [progress]); // Re-run whenever `progress` changes

  return (
    <>
      <PerspectiveCamera
        ref={cameraRef}
        fov={45}
        near={0.1}
        far={10000}
        makeDefault
        position={[0, 3, 10]} // Initial position
      />

      {/* Lighting Setup */}
      <ambientLight intensity={1} /> {/* Soft overall light */}
      <directionalLight
        position={[200, 1, 1]} // Light from the top-right
        intensity={2}
        castShadow // Enable shadows
        shadow-mapSize-width={2048} // Shadow quality
        shadow-mapSize-height={2048}
      />
      <directionalLight
        position={[0, 100, 360]} // Light from the top-right
        intensity={2}
        castShadow // Enable shadows
        shadow-mapSize-width={2048} // Shadow quality
        shadow-mapSize-height={2048}
      />
      <directionalLight
        position={[0, 0, 360]} // Light from the top-right
        intensity={2}
        castShadow // Enable shadows
        shadow-mapSize-width={2048} // Shadow quality
        shadow-mapSize-height={2048}
      />
      <pointLight
        position={[-10, 15, 15]} // Light from the left
        intensity={0.8}
        color="#ffcc99" // Warm light color
      />
      <spotLight
        position={[100, 10, 10]} // Light from above
        angle={0.3} // Cone angle
        intensity={2}
        penumbra={0.5} // Soft edges
        castShadow // Enable shadows
      />

      {/* Environment and Model */}
      <Environment preset="city" /> {/* Adds realistic environment lighting */}
      <Earphone />
    </>
  );
}