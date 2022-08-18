      import * as THREE from './build/three.module.js';
      import { OrbitControls } from './OrbitControls.js';
      import { FlakesTexture } from './FlakesTexture.js';
      import { RGBELoader } from './RGBELoader.js';

      let scene, camera, renderer, controls;
      let pointlight, pointlight2, pointlight3, pointlight4, pointlight5, pointlight6,directlight;
      let color1, color2, color3;

      function init() {

        // render options
        scene = new THREE.Scene();
        renderer = new THREE.WebGLRenderer({alpha:true,antialias:true});
        renderer.domElement.classList.add('ball')
        document.getElementById('ball-place').appendChild(renderer.domElement);
        renderer.outputEncoding = THREE.sRGBEncoding;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.25;
        let envmaploader = new THREE.PMREMGenerator(renderer);

        // camera and position
        camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        renderer.setSize(window.innerWidth/2,window.innerHeight/2);
        camera.position.z = 75;

        // colors
        color1 = new THREE.Color("#9ddb64");
        color2 = new THREE.Color("#30aa50");

        // controls
        controls = new OrbitControls(camera, renderer.domElement);
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1;
        controls.enableDamping = true;

        // light
        pointlight = new THREE.PointLight(color1,1);
        pointlight.position.set(200,1,1);
        scene.add(pointlight);
        pointlight2 = new THREE.PointLight(color2,1);
        pointlight2.position.set(-200,1,1);
        scene.add(pointlight2);
        pointlight3 = new THREE.PointLight(color2,1);
        pointlight3.position.set(1,200,1);
        scene.add(pointlight3);
        pointlight4 = new THREE.PointLight(color1,1);
        pointlight4.position.set(1,-200,1);
        scene.add(pointlight4);
        pointlight5 = new THREE.PointLight(color1,1);
        pointlight5.position.set(1,1,200);
        scene.add(pointlight5);
        pointlight6 = new THREE.PointLight(color2,1);
        pointlight6.position.set(1,1,-200);
        scene.add(pointlight6);
        // directlight = new THREE.DirectionalLight(color1, 1);
        // directlight.position.set(200, 200, 200);
        // scene.add(directlight);

        
        new RGBELoader().setPath('textures/').load('cayley_interior_4k.hdr', function(hdrmap) {

          // texture and material
          let envmap = envmaploader.fromCubemap(hdrmap);
          let texture = new THREE.CanvasTexture(new FlakesTexture());
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;
          texture.repeat.x = 10;
          texture.repeat.y = 6;
          const color1 = new THREE.Color("#9ddb64");
          const color2 = new THREE.Color("#30aa50");
          const ballMaterial = {
            clearcoat: 1.0,
            cleacoatRoughness:0.1,
            metalness: 0.9,
            roughness:0.5,
            color: color1,
            normalMap: texture,
            normalScale: new THREE.Vector2(0.15,0.15),
            // envMap: envmap.texture,
            transparent: true,
            opacity: 1,
            wireframe: true
          };

          // set configurations
          let ballGeo = new THREE.SphereGeometry(40,40,40);
          let ballMat = new THREE.MeshPhysicalMaterial(ballMaterial);
          let ballMesh = new THREE.Mesh(ballGeo,ballMat);
          scene.add(ballMesh);
          animate();

        });

        // check if renderer's canvas is not already the size its being displayed as and if so set its size.
        function resizeRendererToDisplaySize(renderer) {
          const canvas = renderer.domElement;
          const width = canvas.clientWidth;
          const height = canvas.clientHeight;
          console.log('testetet')
          const needResize = canvas.width !== width || canvas.height !== height;
          if (needResize) {
            renderer.setSize(width, height, false);
          }
          return needResize;
        }
        if (resizeRendererToDisplaySize(renderer)) {
          const canvas = renderer.domElement;
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }
      }




      // animate
      function animate() {
        controls.update();
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
      init();
































      






              // function redimensionate() {
        //   console.log(window.innerWidth/window.innerHeight)
        //   console.log(window.innerWidth)
        //   console.log(window.innerHeight)
        //   console.log(50 / (window.innerWidth/window.innerHeight))
        //   camera.position.z = (50 / (window.innerWidth/window.innerHeight));
        //   camera.aspect = window.innerWidth/window.innerHeight;
        //   camera.updateProjectionMatrix();
        //   renderer.setSize(window.innerWidth/2, window.innerHeight/2);
        //   renderer.render(scene, camera);
        // }
        // window.addEventListener('resize', redimensionate)
        

                // if (window.innerWidth/window.innerHeight > 0.84) {
        //   // renderer.setSize(window.innerWidth/1.5,window.innerHeight/1.5);
        //   camera.position.z = 75;
        // } else if ( window.innerWidth/window.innerHeight > 0.7 && window.innerWidth/window.innerHeight <= 0.84) {
        //   // renderer.setSize(window.innerWidth/1.3,window.innerHeight/1.3);
        //   camera.position.z = 85;
        // } else if ( window.innerWidth/window.innerHeight > 0.62 && window.innerWidth/window.innerHeight <= 0.7){
        //   // renderer.setSize(window.innerWidth/1.2,window.innerHeight/1.2);
        //   camera.position.z = 95;
        // } else if ( window.innerWidth/window.innerHeight > 0.55 && window.innerWidth/window.innerHeight <= 0.62) {
        //   // renderer.setSize(window.innerWidth/1,window.innerHeight/1);
        //   camera.position.z = 100;
        // } else if ( window.innerWidth/window.innerHeight >= 0.4 && window.innerWidth/window.innerHeight <= 0.55) {
        //   // renderer.setSize(window.innerWidth/1,window.innerHeight/1);
        //   camera.position.z = 115;
        // } else {
        //   // renderer.setSize(window.innerWidth/1,window.innerHeight/1);
        //   camera.position.z = 150;
        // }