import React from 'react'
import { withStyles } from '@mui/styles'

const styles = {
  main: {
    backgroundColor: 'purple',
    border: '3px solid teal',
  },
  secondary: {
    backgroundColor: 'pink',
    '& h1': {
      color: 'white',
      '& span': {
        backgroundColor: 'yellow'
      }
    }
  },
}

const MiniPalette = props => {
  const { classes } = props

  return (
    <div className={classes.main}>
      <h1>Mini Palette</h1>
      <section className={classes.secondary} >
        <h1>Mini Palette <span>span</span></h1>
        <span>who?</span>
      </section>
    </div>
  )
}

export default withStyles(styles)(MiniPalette)
