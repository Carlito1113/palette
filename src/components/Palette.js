import React from 'react'
import ColorBox from './ColorBox'
import '../styles/Palette.css'

const Palette = ({ colors }) => {
  const colorBoxes = colors.map(color => {
    return <ColorBox background={color.color} name={color.name} />
  })

  return (
    <div className="Palette">
      <div className="Palette-colors">{colorBoxes}</div>
    </div>
  )
}

export default Palette
