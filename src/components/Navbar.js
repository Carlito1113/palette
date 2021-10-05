import React, { useState } from 'react'
import { Select, MenuItem } from '@material-ui/core'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import '../styles/Navbar.css'

const Navbar = ({ level, changeLevel, handleChange }) => {
  const [format, setFormat] = useState('hex')

  const handleFormat = (e) => {
    setFormat(e.target.value)
    handleChange(e.target.value)
  }

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
      <div className="select-container">
        <Select value={format} onChange={handleFormat}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
        </Select>
      </div>
    </nav>
  )
}

export default Navbar
