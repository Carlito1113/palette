import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ColorBox from './ColorBox'
import '../styles/Palette.css'

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500)
  const [format, setFormat] = useState('hex')

  const colorBoxes = palette.colors[level].map(color => {
    return <ColorBox background={color[format]} name={color.name} />
  })

  const changeLevel = value => {
    setLevel(value)
  }

  const changeFormat = (val) => {
    setFormat(val)
  }

  return (
    <div className="Palette">
      <Navbar level={level} changeLevel={changeLevel} handleChange={changeFormat} />
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  )
}

export default Palette
