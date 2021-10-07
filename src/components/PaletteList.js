import React from 'react'
import MiniPalette from './MiniPalette'
import { Link } from 'react-router-dom'

const PaletteList = ({ palettes }) => {
  return (
    <div>
    <MiniPalette />
      <h1>React colors</h1>
      {palettes.map(palette => (
        <MiniPalette {...palette} />
      ))}
    </div>
  )
}

export default PaletteList
