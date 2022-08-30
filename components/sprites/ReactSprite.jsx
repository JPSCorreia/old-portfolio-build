import { useRef, useState } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import * as THREE from '../../public/build/three.module.js';


function ReactSprite(props) {

  // This reference gives us direct access to the THREE.Mesh object
  const sprites = useRef()

  // useFrame((state, delta) => {
  //   (sprites.current.rotation.y += 0.0025)
  // })

  // const loader = new THREE.TextureLoader();
  const spriteNewReactMap = useLoader(THREE.TextureLoader, '../../assets/react-icon2.png')
  const spriteNewHtmlMap = useLoader(THREE.TextureLoader, '../../assets/html-icon.png' );
  // const spriteReactMap = loader.load('../../assets/react-icon2.png');

  // const spriteReactMaterial = new THREE.SpriteMaterial( { map: spriteReactMap, color: '#00ccff', fog: false } );
  // const spriteReact = new THREE.Sprite( spriteReactMaterial );
  // spriteReact.position.set(0, 0, 50)
  // spriteReact.scale.set( 15, 15, 15);

  const color1 = new THREE.Color("#67E8F9");
  const color2 = new THREE.Color("#22D3F8");
  const color3 = new THREE.Color("#ffffff");

  
  return (
     <group ref={sprites} scale={1} {...props}>
      <sprite scale={[15, 15, 15]} position={[0, 0, 50]}>
        <spriteMaterial color='#00ccff' fog={false} map={spriteNewReactMap} />
      </sprite>
      <sprite scale={[15, 15, 15]} position={[0, 0, 30]}>
        <spriteMaterial color='#dd4b25' fog={false} map={spriteNewHtmlMap} />
      </sprite>
    </group>

  )
}

export default ReactSprite