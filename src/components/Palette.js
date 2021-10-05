import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ColorBox from './ColorBox'
import '../styles/Palette.css'

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500)

  const colorBoxes = palette.colors[level].map(color => {
    return <ColorBox background={color.hex} name={color.name} />
  })

  const changeLevel = value => {
    setLevel(value)
  }

  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={changeLevel} />
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  )
}

export default Palette
