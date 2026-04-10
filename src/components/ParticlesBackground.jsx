import React, { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="fixed inset-0 -z-10"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: {
            grab: {
              distance: 100,
              links: { opacity: 0.08, color: "#8B5CF6" },
            },
          },
        },
        particles: {
          number: {
            value: 50,
            density: { enable: true, value_area: 1200 },
          },
          color: {
            value: ["#ffffff", "#8B5CF6"],
          },
          shape: { type: "circle" },
          opacity: {
            value: { min: 0.03, max: 0.15 },
            animation: { enable: true, speed: 0.3, sync: false },
          },
          size: {
            value: { min: 0.5, max: 1.5 },
          },
          links: { enable: false },
          move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            straight: false,
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
