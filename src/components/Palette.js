import React, { useState, useEffect } from 'react'
import ColorBox from './ColorBox'
import '../styles/Palette.css'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const Palette = ({ palette }) => {
  const [level, setLevel] = useState(500)

  const colorBoxes = palette.colors[level].map(color => {
    return <ColorBox background={color.hex} name={color.name} />
  })

  return (
    <div className="Palette">
      <Slider
        defaultValue={level}
        min={100}
        max={900}
        step={100}
        onChange={value => {
          setLevel(value)
        }}
      />
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  )
}

export default Palette
