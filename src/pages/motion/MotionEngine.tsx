import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const MotionEngine: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0, vX: 0, vY: 0, lastX: 0, lastY: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uVelo: { value: 0 },
        uColor1: { value: new THREE.Color("#084939") },
        uColor2: { value: new THREE.Color("#084939") }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uVelo;
        uniform vec3 uColor1;
        uniform vec3 uColor2;

        void main() {
          vec2 p = vUv;
          float d = distance(p, uMouse);
          float ripple = sin(d * 20.0 - uTime * 2.0) * 0.02 * uVelo;
          
          vec3 finalColor = mix(vec3(1.0), uColor2, smoothstep(0.4, 0.7, d + ripple));
          finalColor = mix(finalColor, uColor1, ripple * 5.0);
          
          gl_FragColor = vec4(finalColor, 0.08 + ripple);
        }
      `
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = 1.0 - e.clientY / window.innerHeight;
      
      mouse.current.vX = x - mouse.current.lastX;
      mouse.current.vY = y - mouse.current.lastY;
      mouse.current.lastX = x;
      mouse.current.lastY = y;
      
      material.uniforms.uMouse.value.set(x, y);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      material.uniforms.uTime.value += 0.02;
      const velocity = Math.sqrt(mouse.current.vX**2 + mouse.current.vY**2);
      material.uniforms.uVelo.value += (velocity - material.uniforms.uVelo.value) * 0.1;
      
      // Decay velocity
      mouse.current.vX *= 0.9;
      mouse.current.vY *= 0.9;
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-0" />;
};

export default MotionEngine;