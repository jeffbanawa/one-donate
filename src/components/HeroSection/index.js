import React from "react"
import "./HeroSection.css"

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Donations made simple</h1>
      <p>
        {" "}
        To provide a simple centralized platform that will allow everyone to
        contribute, monitor, and see the impact their donations make on the
        world
      </p>
      <div className="hero-btns">
        <button>Apple store</button>
        <button>Play store</button>
      </div>
    </div>
  )
}

export default HeroSection
