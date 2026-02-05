import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

export default function BrainBackground() {
  async function particlesInit(engine: Engine) {
    await loadSlim(engine);
  }

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "#0f0f1a",
        },
        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 800 },
          },
          color: {
            value: ["#a78bfa", "#60a5fa", "#34d399"],
          },
          shape: { type: "circle" },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              speed: 0.3,
              minimumValue: 0.2,
            },
          },
          size: {
            value: { min: 2, max: 4 },
          },
          links: {
            enable: true,
            distance: 120,
            color: "#c7d2fe",
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
