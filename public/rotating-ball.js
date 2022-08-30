// import * as THREE from './build/three.module.js';
// import { OrbitControls } from './OrbitControls.js';
// import { FlakesTexture } from './FlakesTexture.js';


// function main() {

//   const canvas = document.querySelector('#ball-place');
//   const renderer = new THREE.WebGLRenderer({canvas, alpha:true, antialias:true});

//   // camera and position
//   const fov = 75;
//   const aspectRatio = window.innerWidth / window.innerHeight;  // the canvas default
//   renderer.setSize(window.innerWidth,window.innerHeight);
//   const near = 0.1;
//   const far = 1000;
//   const camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
//   camera.position.z = 75;
//   camera.position.y = 40;
//   const scene = new THREE.Scene();

//   console.log(window.innerWidth/window.innerHeight)
//   console.log(window.innerWidth)

//   if ( window.innerWidth/window.innerHeight >= 1.6 && window.innerWidth/window.innerHeight <= 1.9 && window.innerHeight < 820) {
//     camera.position.z = 150;
//   }
//     else if (window.innerWidth/window.innerHeight > 1) {
//     camera.position.z = 115;
//   } else if (window.innerWidth/window.innerHeight > 0.84 && window.innerWidth/window.innerHeight <= 1) {
//     camera.position.z = 115;
//   } else if ( window.innerWidth/window.innerHeight > 0.7 && window.innerWidth/window.innerHeight <= 0.84) {
//     camera.position.z = 125;
//   } else if ( window.innerWidth/window.innerHeight > 0.62 && window.innerWidth/window.innerHeight <= 0.7){
//     camera.position.z = 125;
//   } else if ( window.innerWidth/window.innerHeight > 0.55 && window.innerWidth/window.innerHeight <= 0.62) {
//     camera.position.z = 150;
//   } else if ( window.innerWidth/window.innerHeight >= 0.4 && window.innerWidth/window.innerHeight <= 0.55) {
//     camera.position.z = 160;
//   } else {
//     camera.position.z = 180;
//   }



//   // colors blue: #A5F3FC (200), #67E8F9 (300), #22D3F8 (400) and #0891B2, old colors green: #9ddb64 and #30aa50

//   const color1 = new THREE.Color("#67E8F9");
//   const color2 = new THREE.Color("#22D3F8");
//   const color3 = new THREE.Color("#ffffff");


//   //controls
//   const controls = new OrbitControls(camera, renderer.domElement);
//   controls.autoRotate = true;
//   controls.autoRotateSpeed = 1;
//   controls.enableDamping = true;




//   // light
//   const pointlight = new THREE.PointLight(color1,1);
//   pointlight.position.set(200,1,1);
//   scene.add(pointlight);
//   const pointlight2 = new THREE.PointLight(color2,1);
//   pointlight2.position.set(-200,1,1);
//   scene.add(pointlight2);
//   const pointlight3 = new THREE.PointLight(color2,1);
//   pointlight3.position.set(1,200,1);
//   scene.add(pointlight3);
//   const pointlight4 = new THREE.PointLight(color1,1);
//   pointlight4.position.set(1,-200,1);
//   scene.add(pointlight4);
//   const pointlight5 = new THREE.PointLight(color1,1);
//   pointlight5.position.set(1,1,200);
//   scene.add(pointlight5);
//   const pointlight6 = new THREE.PointLight(color2,1);
//   pointlight6.position.set(1,1,-200);
//   scene.add(pointlight6);

//   // texture and material
//   let texture = new THREE.CanvasTexture(new FlakesTexture());
//   texture.wrapS = THREE.RepeatWrapping;
//   texture.wrapT = THREE.RepeatWrapping;
//   texture.repeat.x = 10;
//   texture.repeat.y = 6;
//   renderer.outputEncoding = THREE.sRGBEncoding;
//   renderer.toneMapping = THREE.ACESFilmicToneMapping;
//   renderer.toneMappingExposure = 0.75;
//   const material = {
//     clearcoat: 1.0,
//     cleacoatRoughness:0.1,
//     metalness: 0.9,
//     roughness:0.5,
//     color: color1,
//     normalMap: texture,
//     normalScale: new THREE.Vector2(0.15,0.15),
//     lightMapIntensity: 2,
//     attenuationColor: color1,
//     sheenColor: color1,
//     specularColor: color1,
//     ior: 0,
//     reflectivity: 1,
//     transparent: true,
//     opacity: 1,
//     wireframe: true,
//   };
//   const radius = 40;
//   const widthSegments = 40;
//   const heightSegments = 40;
//   const ballGeometry = new THREE.SphereGeometry(radius,widthSegments,heightSegments);



//   const spriteReactMap = new THREE.TextureLoader().load( '../assets/react-icon2.png' );
//   const spriteReactMaterial = new THREE.SpriteMaterial( { map: spriteReactMap, color: '#00ccff', fog: false } );
//   const spriteReact = new THREE.Sprite( spriteReactMaterial );
//   spriteReact.position.set(0, 0, 50)
//   spriteReact.scale.set( 15, 15, 15);
//   scene.add( spriteReact );

//   const spriteHtmlMap = new THREE.TextureLoader().load( '../assets/html-icon.png' );
//   const spriteHtmlMaterial = new THREE.SpriteMaterial( { map: spriteHtmlMap, color: '#dd4b25' , fog: false } );
//   const spriteHtml = new THREE.Sprite( spriteHtmlMaterial );
//   spriteHtml.position.set(-37.5, 0, 37.5)
//   spriteHtml.scale.set( 15, 15, 15);
//   scene.add( spriteHtml );

//   const spriteCssMap = new THREE.TextureLoader().load( '../assets/css-icon.png' );
//   const spriteCssMaterial = new THREE.SpriteMaterial( { map: spriteCssMap, color: '#2762e9', fog: false } );
//   const spriteCss = new THREE.Sprite( spriteCssMaterial );
//   spriteCss.position.set(-50, 0, 0)
//   spriteCss.scale.set( 15, 15, 15);
//   scene.add( spriteCss )

//   const spriteJavascriptMap = new THREE.TextureLoader().load( '../assets/javascript-icon.png' );
//   const spriteJavascriptMaterial = new THREE.SpriteMaterial( { map: spriteJavascriptMap, color: '#efd81f', fog: false } );
//   const spriteJavascript = new THREE.Sprite( spriteJavascriptMaterial );
//   spriteJavascript.position.set(-37.5, 0, -37.5)
//   spriteJavascript.scale.set( 15, 15, 15);
//   scene.add( spriteJavascript );

//   const spriteNodeMap = new THREE.TextureLoader().load( '../assets/node-icon.png' );
//   const spriteNodeMaterial = new THREE.SpriteMaterial( { map: spriteNodeMap, color: '#43853d', fog: false } );
//   const spriteNode = new THREE.Sprite( spriteNodeMaterial );
//   spriteNode.position.set(0, 0, -50)
//   spriteNode.scale.set( 15, 15, 15);
//   scene.add( spriteNode );

//   const spriteExpressMap = new THREE.TextureLoader().load( '../assets/express-icon.png' );
//   const spriteExpressMaterial = new THREE.SpriteMaterial( { map: spriteExpressMap, color: '#ffffff', fog: false } );
//   const spriteExpress = new THREE.Sprite( spriteExpressMaterial );
//   spriteExpress.position.set(37.5, 0, -37.5)
//   spriteExpress.scale.set( 15, 15, 15);
//   scene.add( spriteExpress );

//   const spritePostgreSQLMap = new THREE.TextureLoader().load( '../assets/postgresql-icon.png' );
//   const spritePostgreSQLMaterial = new THREE.SpriteMaterial( { map: spritePostgreSQLMap, color: '#31648d', fog: false } );
//   const spritePostgreSQL = new THREE.Sprite( spritePostgreSQLMaterial );
//   spritePostgreSQL.position.set(50, 0, 0)
//   spritePostgreSQL.scale.set( 15, 15, 15);
//   scene.add( spritePostgreSQL );

//   const spriteReduxMap = new THREE.TextureLoader().load( '../assets/redux-icon.png' );
//   const spriteReduxMaterial = new THREE.SpriteMaterial( { map: spriteReduxMap, color: '#764abc', fog: false } );
//   const spriteRedux = new THREE.Sprite( spriteReduxMaterial );
//   spriteRedux.position.set(37.5, 0, 37.5)
//   spriteRedux.scale.set( 15, 15, 15);
//   scene.add( spriteRedux );













//   function makeInstance(geometry, x = 0, y = 0) {
//     const ballMaterial = new THREE.MeshPhysicalMaterial(material);
//     const ballMesh = new THREE.Mesh(geometry,ballMaterial);
//     scene.add(ballMesh);
    
//     ballMesh.position.x = x;
//     ballMesh.position.y = y;

//     return ballMesh
//   }




//   const spheres = [
//     makeInstance(ballGeometry),
//   ]
  
  

//   function render(time) {
//     time *= 0.001;

//     spheres.forEach((sphere, ndx) => {
//       const speed = 1 + ndx * .1;
//       const rot = time * speed;
//       sphere.rotation.x = 0;
//       sphere.rotation.y = rot/8;
//       // imageMesh.rotation.y = rot/2
//       // imageMesh2.rotation.y = rot/2
//       // card.rotation.y = rot/2;

//     });
    
//     controls.update();
//     renderer.render(scene, camera);
//     requestAnimationFrame(render);
//   }

//   requestAnimationFrame(render);
// }

// main();
