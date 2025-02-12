import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { ChromePicker } from "react-color";
import { Earphone } from "./earphone";


export default function EarphoneColorChanger() {
  const [color, setColor] = useState("#ffffff"); // Default color is Red

  // Function to handle color selection
  const handleColorSelect = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div className="flex flex-col md:flex-row h-[100vh]">
      {/* Color Picker on the Side */}
      <div className="flex felx-col" style={{ width: "20%", padding: "20px" }}>
      <ChromePicker
        color={color}
        onChange={(updatedColor) => setColor(updatedColor.hex)}
      />
      </div>

      {/* 3D Earphone Model in the Center */}
      <div className="flex h-[100vh] w-[100vw] " >
        <Canvas>

            <PerspectiveCamera
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
        </Canvas>
      </div>
    </div>
  );
}