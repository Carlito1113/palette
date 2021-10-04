import React, { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import '../styles/ColorBox.css'

const ColorBox = ({ background, name }) => {
  const [copied, setCopied] = useState(false)

  const changeCopy = () => setCopied(true)

  useEffect(() => {
    return (
      copied &&
      setTimeout(() => {
        setCopied(false)
      }, 1500)
    )
  }, [copied])

  return (
    <CopyToClipboard text={background} onCopy={changeCopy}>
      <div style={{ background }} className="ColorBox">
        <div
          style={{ background }}
          className={`copy-overlay ${copied && 'show'}`}
        />
        <div className={`copy-msg ${copied && 'show'}`}>
          <h1>copied!</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">More</span>
      </div>
    </CopyToClipboard>
  )
}

export default ColorBox
