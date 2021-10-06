import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// MUI - MATERIAL
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import Snackbar from '@mui/material/Snackbar'
import IconButton from '@mui/material/IconButton'
// MUI - ICONS
import CloseIcon from '@mui/icons-material/Close'

import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import '../styles/Navbar.css'

const Navbar = ({ level, changeLevel, handleChange }) => {
  const [format, setFormat] = useState('hex')
  const [open, setOpen] = useState(false)

  const handleFormatChange = e => {
    setFormat(e.target.value)
    setOpen(true)
    handleChange(e.target.value)
  }

  const closeSnackbar = () => {
    setOpen(false)
  }

  return (
    <nav className="Navbar">
      <div className="logo">
        <Link to="/">Palette.</Link>
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
        <Select value={format} onChange={handleFormatChange}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        autoHideDuration={3000}
        message={<span id="message-id">Format Changed To {format}</span>}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        onClose={closeSnackbar}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </nav>
  )
}

export default Navbar
