import { Canvas } from '@react-three/fiber'
import RotatingGlobeMesh from './RotatingGlobeMesh'
import * as THREE from '../public/build/three.module.js';
// import { OrbitControls } from '../public/OrbitControls';
import { OrbitControls } from '@react-three/drei'
import ReactSprite from './sprites/ReactSprite';

function RotatingGlobe(props) {

  // const aspectRatio = window.innerWidth / window.innerHeight;
  // const options = WebGLRendererParameters = { 
  //   toneMapping: THREE.ACESFilmicToneMapping,
  //   toneMappingExposure: 0.75
  // };
  const color1 = new THREE.Color("#67E8F9");
  const color2 = new THREE.Color("#22D3F8");


  return (
    <Canvas 
      gl={
        { 
          alpha:true, 
          antialias:true,
          toneMapping: THREE.AcesFilmicToneMapping,
          toneMappingExposure: 0.75
        }
      } 
      camera={{ position: [0, 50, 125], fov: 75 }}
      data-aos='fade-in' 
      data-aos-mirror='false' 
      data-aos-delay='200' 
      data-aos-duration='2000'
    >
      <ambientLight />
      <directionalLight color={color2} position={[0, -1, 0]} intensity={0.75}/>
      <directionalLight color={color2} position={[0, 1, 0]} intensity={0.75} />
      <directionalLight color={color2} position={[0, 0, 1]} intensity={0.75}/>
      <directionalLight color={color2} position={[0, 0, -1]} intensity={0.75} />
      <directionalLight color={color2} position={[1, 0, 0]} intensity={0.75}/>
      <directionalLight color={color2} position={[-1, 0, 0]} intensity={0.75} />
      <RotatingGlobeMesh  />
      <ReactSprite />
      <OrbitControls enablePan={false} enableZoom={false}  />
    </Canvas>
  )
}

export default RotatingGlobe