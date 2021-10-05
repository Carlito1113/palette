import React from 'react'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import '../styles/Navbar.css'

const Navbar = ({ level, changeLevel }) => {
  return (
    <nav className="Navbar">
      <div className="logo">
        <a href="#">Palette.</a>
      </div>
      <div className="slider-container">
      <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onChange={value => {
              changeLevel(value)
            }}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
