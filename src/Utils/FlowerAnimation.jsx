import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const FlowerAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvasEl = canvasRef.current;
    let renderer, sceneShader, sceneBasic, camera, clock, shaderMaterial, basicMaterial;
    let renderTargets = [];

    const vertexShader = `
      varying vec2 vUv;

      void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.);
      }
    `;

    const fragmentShader = `
      #define PI 3.14159265359

      uniform float u_ratio;
      uniform float u_moving;
      uniform float u_stop_time;
      uniform float u_speed;
      uniform vec2 u_stop_randomizer;
      uniform float u_clean;
      uniform vec2 u_point;
      uniform sampler2D u_texture;
      varying vec2 vUv;

      float rand(vec2 n) {
          return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
      }
      float noise(vec2 n) {
          const vec2 d = vec2(0., 1.);
          vec2 b = floor(n), f = smoothstep(vec2(0.), vec2(1.), fract(n));
          return mix(mix(rand(b), rand(b + d.yx), f.x), mix(rand(b + d.xy), rand(b + d.yy), f.x), f.y);
      }

      float flower_shape(vec2 _point, float _size, float _outline, float _tickniess, float _noise, float _angle_offset) {
          float random_by_uv = noise(vUv);

          float petals_thickness = .5;
          float petals_number = 5. + floor(u_stop_randomizer[0] * 4.);
          float angle_animated_offset = .7 * (random_by_uv - .5) / (1. + 30. * u_stop_time);
          float flower_angle = atan(_point.y, _point.x) - angle_animated_offset;
          float flower_sectoral_shape = abs(sin(flower_angle * .5 * petals_number + _angle_offset)) + _tickniess * petals_thickness;

          vec2 flower_size_range = vec2(14., 18.);
          float flower_radial_shape = length(_point) * (flower_size_range[0] + flower_size_range[1] * u_stop_randomizer[0]);
          float radius_noise = sin(flower_angle * 13. + 15. * random_by_uv);
          flower_radial_shape += _noise * radius_noise;

          float flower_radius_grow = min(20000. * u_stop_time, 1.);
          flower_radius_grow = 1. / flower_radius_grow;

          float flower_shape = 1. - smoothstep(0., _size * flower_sectoral_shape, _outline * flower_radius_grow * flower_radial_shape);
          flower_shape *= (1. - u_moving);

          flower_shape *= (1. - step(1., u_stop_time));

          return flower_shape;
      }

      void main() {
          vec3 base = texture2D(u_texture, vUv).xyz;
          vec2 cursor = vUv - u_point.xy;
          cursor.x *= u_ratio;

          vec3 stem_color = vec3(0., 2., 1.5);
          float stem_radius = .003 * u_speed * u_moving;
          float stem_shape = 1. - pow(smoothstep(0., stem_radius, dot(cursor, cursor)), .03);
          vec3 stem = stem_shape * stem_color;

          vec3 flower_color = vec3(.9 + u_stop_randomizer[1], .8 * u_stop_randomizer[1], 2.9 + u_stop_randomizer[0] * .6);
          vec3 flower_new = flower_color * flower_shape(cursor, 1., .96, 1., .15, 0.);
          vec3 flower_mask = 1. - vec3(flower_shape(cursor, 1.05, 1.07, 1., .15, 0.));
          vec3 flower_mid = vec3(-.6) * flower_shape(cursor, .15, 1., 2., .1, 1.9);

          vec3 color = base * flower_mask + (flower_new + flower_mid + stem);
          color *= u_clean;

          color = clamp(color, vec3(0.0), vec3(37.0/255.0, 99.0/255.0, 235.0/255.0));

          gl_FragColor = vec4(color, 1.);
      }
    `;

    const pointer = {
      x: 0.5,
      y: 0.65,
      moved: false,
      speed: 0,
      vanishCanvas: false,
      drawingAllowed: true,
    };

    const init = () => {
      renderer = new THREE.WebGLRenderer({
        canvas: canvasEl,
        alpha: false,
        antialias: true,
        preserveDrawingBuffer: true,
      });
      renderer.setClearColor(0x000000, 1);
      renderer.setPixelRatio(window.devicePixelRatio);

      sceneShader = new THREE.Scene();
      sceneBasic = new THREE.Scene();
      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 10);
      clock = new THREE.Clock();

      renderTargets = [
        new THREE.WebGLRenderTarget(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, {
          minFilter: THREE.LinearFilter,
          magFilter: THREE.LinearFilter,
          format: THREE.RGBAFormat,
          stencilBuffer: false
        }),
        new THREE.WebGLRenderTarget(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, {
          minFilter: THREE.LinearFilter,
          magFilter: THREE.LinearFilter,
          format: THREE.RGBAFormat,
          stencilBuffer: false
        })
      ];

      createPlane();
      //updateSize();
    };

    const createPlane = () => {
      shaderMaterial = new THREE.ShaderMaterial({
        uniforms: {
          u_stop_time: { value: 0 },
          u_point: { value: new THREE.Vector2(pointer.x, pointer.y) },
          u_moving: { value: 0 },
          u_speed: { value: 0 },
          u_stop_randomizer: { value: new THREE.Vector2(Math.random(), Math.random()) },
          u_clean: { value: 1 },
          u_ratio: { value: window.innerWidth / window.innerHeight },
          u_texture: { value: null },
        },
        vertexShader,
        fragmentShader,
      });
      basicMaterial = new THREE.MeshBasicMaterial();

      const planeGeometry = new THREE.PlaneGeometry(2, 2);
      const planeBasic = new THREE.Mesh(planeGeometry, basicMaterial);
      const planeShader = new THREE.Mesh(planeGeometry, shaderMaterial);
      sceneBasic.add(planeBasic);
      sceneShader.add(planeShader);
    };

    const updateSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      shaderMaterial.uniforms.u_ratio.value = width / height;
      renderer.setSize(width, height);
      renderTargets.forEach((target) => {
        target.setSize(width * window.devicePixelRatio, height * window.devicePixelRatio);
      });
    };

    const render = () => {
      shaderMaterial.uniforms.u_clean.value = pointer.vanishCanvas ? 0 : 1;
      shaderMaterial.uniforms.u_point.value = new THREE.Vector2(
        pointer.x,
        1 - pointer.y
      );
      shaderMaterial.uniforms.u_texture.value = renderTargets[0].texture;

      if (pointer.moved) {
        shaderMaterial.uniforms.u_moving.value = 1;
        shaderMaterial.uniforms.u_stop_randomizer.value = new THREE.Vector2(
          Math.random(),
          Math.random()
        );
        if (window.innerWidth < 650) {
          shaderMaterial.uniforms.u_stop_randomizer.value.x *= 0.2;
          shaderMaterial.uniforms.u_stop_randomizer.value.x += 0.8;
        }
        shaderMaterial.uniforms.u_stop_time.value = 0;
        pointer.moved = false;
      } else {
        shaderMaterial.uniforms.u_moving.value = 0;
      }

      shaderMaterial.uniforms.u_stop_time.value += clock.getDelta();
      shaderMaterial.uniforms.u_speed.value = pointer.speed;

      renderer.setRenderTarget(renderTargets[1]);
      renderer.render(sceneShader, camera);

      basicMaterial.map = renderTargets[1].texture;

      renderer.setRenderTarget(null);
      renderer.render(sceneBasic, camera);

      let tmp = renderTargets[0];
      renderTargets[0] = renderTargets[1];
      renderTargets[1] = tmp;

      requestAnimationFrame(render);
    };

    init();
    render();

    const handleResize = () => {
      //updateSize();
    };

    const handleMouseMove = (e) => {
      if (pointer.drawingAllowed) {
        const dx = 12 * (e.pageX / window.innerWidth - pointer.x);
        const dy = 12 * (e.pageY / window.innerHeight - pointer.y);
        pointer.x = e.pageX / window.innerWidth;
        pointer.y = e.pageY / window.innerHeight;
        pointer.speed = Math.min(2, Math.pow(dx, 2) + Math.pow(dy, 2));
        pointer.moved = true;
      }
    };

    const handleTouchMove = (e) => {
      const dx = 5 * (e.touches[0].pageX / window.innerWidth - pointer.x);
      const dy = 5 * (e.touches[0].pageY / window.innerHeight - pointer.y);
      pointer.x = e.touches[0].pageX / window.innerWidth;
      pointer.y = e.touches[0].pageY / window.innerHeight;
      pointer.speed = Math.min(2, 20 * (Math.pow(dx, 2) + Math.pow(dy, 2)));
      pointer.moved = true;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      renderer.dispose();
      renderTargets.forEach((target) => target.dispose());
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default FlowerAnimation;

