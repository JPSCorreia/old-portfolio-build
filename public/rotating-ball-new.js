import * as THREE from './build/three.module.js';
import { OrbitControls } from './OrbitControls.js';
import { FlakesTexture } from './FlakesTexture.js';


function main() {

  const canvas = document.querySelector('#ball-place');
  const renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:true});
  // const renderer = new THREE.WebGLRenderer({alpha:true,antialias:true})

  // camera and position
  const fov = 75;
  const aspectRatio = window.innerWidth / window.innerHeight;  // the canvas default
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
  camera.position.z = 75;
  const scene = new THREE.Scene();

  console.log(window.innerWidth/window.innerHeight)

  if (window.innerWidth/window.innerHeight > 0.84) {
    // renderer.setSize(window.innerWidth/1.5,window.innerHeight/1.5);
    camera.position.z = 75;
  } else if ( window.innerWidth/window.innerHeight > 0.7 && window.innerWidth/window.innerHeight <= 0.84) {
    // renderer.setSize(window.innerWidth/1.3,window.innerHeight/1.3);
    camera.position.z = 85;
  } else if ( window.innerWidth/window.innerHeight > 0.62 && window.innerWidth/window.innerHeight <= 0.7){
    // renderer.setSize(window.innerWidth/1.2,window.innerHeight/1.2);
    camera.position.z = 95;
  } else if ( window.innerWidth/window.innerHeight > 0.55 && window.innerWidth/window.innerHeight <= 0.62) {
    // renderer.setSize(window.innerWidth/1,window.innerHeight/1);
    camera.position.z = 100;
  } else if ( window.innerWidth/window.innerHeight >= 0.4 && window.innerWidth/window.innerHeight <= 0.55) {
    // renderer.setSize(window.innerWidth/1,window.innerHeight/1);
    camera.position.z = 115;
  } else {
    // renderer.setSize(window.innerWidth/1,window.innerHeight/1);
    camera.position.z = 150;
  }


  // colors
  const color1 = new THREE.Color("#9ddb64");
  const color2 = new THREE.Color("#30aa50");

  // controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1;
  controls.enableDamping = true;

  // light
  const pointlight = new THREE.PointLight(color1,1);
  pointlight.position.set(200,1,1);
  scene.add(pointlight);
  const pointlight2 = new THREE.PointLight(color2,1);
  pointlight2.position.set(-200,1,1);
  scene.add(pointlight2);
  const pointlight3 = new THREE.PointLight(color2,1);
  pointlight3.position.set(1,200,1);
  scene.add(pointlight3);
  const pointlight4 = new THREE.PointLight(color1,1);
  pointlight4.position.set(1,-200,1);
  scene.add(pointlight4);
  const pointlight5 = new THREE.PointLight(color1,1);
  pointlight5.position.set(1,1,200);
  scene.add(pointlight5);
  const pointlight6 = new THREE.PointLight(color2,1);
  pointlight6.position.set(1,1,-200);
  scene.add(pointlight6);

  // texture and material
  let texture = new THREE.CanvasTexture(new FlakesTexture());
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.x = 10;
  texture.repeat.y = 6;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  const material = {
    clearcoat: 1.0,
    cleacoatRoughness:0.1,
    metalness: 0.9,
    roughness:0.5,
    color: color1,
    normalMap: texture,
    normalScale: new THREE.Vector2(0.15,0.15),
    transparent: true,
    opacity: 1,
    wireframe: true
  };
  const radius = 40;
  const widthSegments = 40;
  const heightSegments = 40;
  const ballGeometry = new THREE.SphereGeometry(radius,widthSegments,heightSegments);

  function makeInstance(geometry) {
    const ballMaterial = new THREE.MeshPhysicalMaterial(material);
    const ballMesh = new THREE.Mesh(ballGeometry,ballMaterial);
    scene.add(ballMesh);

    // ballMesh.position.x = x;

    return ballMesh
  }

  const spheres = [
    makeInstance(ballGeometry)
  ]
  
  // ???
  renderer.setSize(window.innerWidth/2,window.innerHeight/2);

  function render(time) {
    
    // time *= 0.001;
    // spheres.forEach((sphere, ndx) => {
    //   const speed = 1 + ndx * .1;
    //   const rot = time * speed;
    //   sphere.rotation.x = rot;
    //   sphere.rotation.y = rot;
    // });

    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();