      import * as THREE from './build/three.module.js';
      import { OrbitControls } from './OrbitControls.js';
      import { FlakesTexture } from './FlakesTexture.js';
      import { RGBELoader } from './RGBELoader.js';

      let scene, camera, renderer, controls, pointlight;

      function init() {
        scene = new THREE.Scene();

        renderer = new THREE.WebGLRenderer({alpha:true,antialias:true});
        console.log(window.innerWidth/22)
        console.log(window.innerHeight/22)
        console.log(window.innerWidth/window.innerHeight)
       
        // renderer.setSize(window.innerWidth/24,window.innerHeight/24);
        renderer.setSize(116,60);
        // 1642, 1323
        renderer.domElement.classList.add('ball')
        document.body.appendChild(renderer.domElement);

        console.log(renderer.domElement)

        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.25;

        camera = new THREE.PerspectiveCamera(100,2,1,1000);
        camera.position.set(0,0,132);
        controls = new OrbitControls(camera, renderer.domElement);

        controls.autoRotate = true;
        controls.autoRotateSpeed = 10;
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

          const ballMaterial = {
            clearcoat: 1.0,
            cleacoatRoughness:0.1,
            metalness: 0.9,
            roughness:0.5,
            color: 0x66d41a,
            normalMap: texture,
            normalScale: new THREE.Vector2(0.15,0.15),
            envMap: envmap.texture
          };

          let ballGeo = new THREE.SphereGeometry(100,64,64);
          let ballMat = new THREE.MeshPhysicalMaterial(ballMaterial);
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