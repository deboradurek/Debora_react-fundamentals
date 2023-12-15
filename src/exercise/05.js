// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// EXERCISE

/*
const smallBox = (
  <div
    className="box box--small"
    style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
  >
    small lightblue box
  </div>
)
const mediumBox = (
  <div
    className="box box--medium"
    style={{backgroundColor: 'pink', fontStyle: 'italic'}}
  >
    medium pink box
  </div>
)
const largeBox = (
  <div
    className="box box--large"
    style={{backgroundColor: 'orange', fontStyle: 'italic'}}
  >
    large orange box
  </div>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
 */

// 1. 💯 Create a custom component

/*
const Box = ({className = '', children, style, ...rest}) => {
  return (
    <div
      className={`box ${className}`.trim()}
      style={{fontStyle: 'italic', ...style}}
      {...rest}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        medium lightblue box
      </Box>
      <Box className="box--large" style={{backgroundColor: 'orange'}}>
        large lightblue box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
 */

// 2. 💯 accept a size prop to encapsulate styling

const Box = ({size, children, style, ...rest}) => {
  const classNameSize = size ? `box--${size}` : ''

  return (
    <div
      className={`box ${classNameSize}`.trim()}
      style={{fontStyle: 'italic', ...style}}
      {...rest}
    >
      {children}
    </div>
  )
}

function App() {
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium lightblue box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large lightblue box
      </Box>
      <Box>sizeless box</Box>
    </div>
  )
}

export default App
