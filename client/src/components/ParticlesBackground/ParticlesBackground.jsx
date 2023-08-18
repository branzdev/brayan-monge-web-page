import React from "react";

import Particles from "react-particles";

import "./particlesBackground.scss";

import { loadStarsPreset } from "tsparticles-preset-stars";

export default function ParticlesBackground() {
  // this customizes the component tsParticles installation

  async function customInit(engine) {
    // this adds the preset to tsParticles, you can safely use the
    await loadStarsPreset(engine);
  }

  const options = {
    preset: "stars",
  };

  return (
    <Particles className="particles" options={options} init={customInit} />
  );
}
