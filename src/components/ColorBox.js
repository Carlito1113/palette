import React from 'react'
import '../styles/ColorBox.css'

const ColorBox = ({ background, name }) => {
  return (
    <div style={{ background }} className='ColorBox' >
      <div className="copy-container">
        <div className="box-content">
          <span>{name}</span>
        </div>
      </div>
    </div>
  )
}

export default ColorBox
