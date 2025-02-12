import React, { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'

export function Earphone({ color, ...props }) {
  const { nodes, materials } = useGLTF('/bose_qc35_wireless_headphone_high_poly.glb')
  // Create a new material with the selected color
  const coloredMaterial = useMemo(() => {
    const material = materials.material.clone();
    material.color.set(color);
    return material;
  }, [color, materials.material]);
  return (
    <group scale={35} {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Sphere001_������7_0'].geometry}
          material={materials.material}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_Material014_0.geometry}
          material={materials['Material.014']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_Material006_0.geometry}
          material={materials['Material.006']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_Material015_0.geometry}
          material={materials['Material.015']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007_Material009_0.geometry}
          material={materials['Material.009']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath002_Material008_0.geometry}
          material={materials['Material.008']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.NurbsPath004_Material024_0.geometry}
          material={materials['Material.024']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere013_Material003_0.geometry}
          material={materials['Material.003']}
          position={[-4.326, 2.519, 2.66]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere014_Material001_0.geometry}
          material={materials['Material.001']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere015_Material013_0.geometry}
          material={materials['Material.013']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere018_Material012_0.geometry}
          material={materials['Material.012']}
          position={[3.9, 1.665, 2.169]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere019_Material004_0.geometry}
          material={materials['Material.004']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_Material022_0.geometry}
          material={materials['Material.022']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_Material002_0.geometry}
          material={materials['Material.002']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder020_Material019_0.geometry}
          material={materials['Material.019']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder022_Material017_0.geometry}
          material={materials['Material.017']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder023_Material016_0.geometry}
          material={materials['Material.016']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder024_Material018_0.geometry}
          material={materials['Material.018']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder025_Material020_0.geometry}
          material={materials['Material.020']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere022_Material023_0.geometry}
          material={materials['Material.023']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_Material007_0.geometry}
          material={materials['Material.007']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Circle006_������7001_0'].geometry}
          material={materials['7.001']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere023_Material010_0.geometry}
          material={materials['Material.010']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.texture_texture_0.geometry}
          material={materials.texture}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['Sphere002_������7002_0'].geometry}
          material={materials['7.002']}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.texture2_texture2_0.geometry}
          material={materials.texture2}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.texture1_texture1_0.geometry}
          material={materials.texture1}
          position={[-0.001, 8.576, 0.121]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={3.809}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_Material005_0.geometry}
          material={materials['Material.005']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_Material011_0.geometry}
          material={materials['Material.011']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_Material025_0.geometry}
          material={materials['Material.025']}
          position={[7.571, 4.697, 0.823]}
          rotation={[1.251, 1.102, -2.756]}
          scale={0.152}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/bose_qc35_wireless_headphone_high_poly.glb')


