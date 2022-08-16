      import * as THREE from './build/three.module.js';
      import { OrbitControls } from './OrbitControls.js';
      import { FlakesTexture } from './FlakesTexture.js';
      import { RGBELoader } from './RGBELoader.js';

      let scene, camera, renderer, controls, pointlight;

      function init() {
        scene = new THREE.Scene();

        renderer = new THREE.WebGLRenderer({alpha:true,antialias:true});


        console.log(window.innerWidth/window.innerHeight)
        console.log(window.innerWidth)
        console.log(window.innerHeight)

        renderer.setSize(window.innerWidth/2,window.innerHeight/2);
        // renderer.setSize(window.innerWidth, window.innerHeight);
        // 1642, 1323
        renderer.domElement.classList.add('ball')
        document.getElementById('ball-place').appendChild(renderer.domElement);
        // document.body.appendChild(renderer.domElement);
       

        console.log(renderer.domElement)

        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.25;

        // camera = new THREE.PerspectiveCamera(100,2,1,1000);
        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        // camera.position.set(500,50,500);
        camera.position.z = 80;
        // camera.position.y = 500;
        controls = new OrbitControls(camera, renderer.domElement);

        controls.autoRotate = true;
        controls.autoRotateSpeed = 2;
        controls.enableDamping = true;

        pointlight = new THREE.PointLight(0xffffff,1);
        pointlight.position.set(200,200,200);
        scene.add(pointlight);

        let envmaploader = new THREE.PMREMGenerator(renderer);

        new RGBELoader().setPath('textures/').load('cayley_interior_4k.hdr', function(hdrmap) {

          let envmap = envmaploader.fromCubemap(hdrmap);
          let texture = new THREE.CanvasTexture(new FlakesTexture());
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          texture.repeat.x = 10;
          texture.repeat.y = 6;


          const color1 = new THREE.Color("#9ddb64");

          const ballMaterial = {
            clearcoat: 1.0,
            cleacoatRoughness:0.1,
            metalness: 0.9,
            roughness:0.5,
            color: color1,
            normalMap: texture,
            normalScale: new THREE.Vector2(0.15,0.15),
            envMap: envmap.texture,
            transparent: true,
            opacity: 0.5,
            wireframe: true //set's the wireframe
            
          };

          
          let ballGeo = new THREE.SphereGeometry(40,40,40);
          let ballMat = new THREE.MeshPhysicalMaterial(ballMaterial);
          const material = new THREE.MeshStandardMaterial({
            color: color1,
            opacity: 0.4,
            transparent: true,
            wireframe: true //set's the wireframe
          });
          let ballMesh = new THREE.Mesh(ballGeo,ballMat);
          scene.add(ballMesh);

          animate();

        });
      }
      function animate() {
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
      init();