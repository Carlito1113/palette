import React from 'react'
import MiniPalette from './MiniPalette'
import { Link } from 'react-router-dom'

const PaletteList = ({ palettes }) => {
  return (
    <div>
    <MiniPalette />
      <h1>React colors</h1>
      {palettes.map(palette => (
        <p>
          <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
        </p>
      ))}
    </div>
  )
}

export default PaletteList
