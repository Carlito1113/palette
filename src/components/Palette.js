import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ColorBox from './ColorBox'
import '../styles/Palette.css'

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500)
  const [format, setFormat] = useState('hex')

  const { colors, paletteName, emoji } = palette

  const colorBoxes = colors[level].map(color => {
    return <ColorBox background={color[format]} name={color.name} key={color.id}/>
  })

  const changeLevel = value => {
    setLevel(value)
  }

  const changeFormat = val => {
    setFormat(val)
  }

  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeFormat}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <footer className='Palette-footer'>
        {paletteName}
        <span className="emoji">{emoji}</span>
      </footer>
    </div>
  )
}

export default Palette
