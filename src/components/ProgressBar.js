import React from 'react'
import propTypes from 'prop-types'

const ProgressBar = ({percent, width, height}) => {
  const progressColor = () => {
    if (percent < 33) return 'rgb(200,0,0)'
    if (percent < 67) return 'rgb(242, 242, 0)'
    if (percent < 99) return 'rgb(127, 242, 0)'
    if (percent === 100) return 'rgb(0, 255, 0)'
  }

  const progressBarWidth = () => Math.floor(percent / 100 * width)

  const barBorderStyle = {
    width: width,
    margin: '5px',
    border: '1px solid rgb(0,0,0)'
  }

  const colorBarStyle = {
    height: height,
    backgroundColor: progressColor(),
    width: progressBarWidth()
  }

  return (
    <div style={barBorderStyle}>
      <div style={colorBarStyle}></div>
    </div>
  )
}

ProgressBar.propTypes = {
  percent: propTypes.number.isRequired,
  width: propTypes.number,
  height: propTypes.number
}

ProgressBar.defaultProps = {
  height: 8,
  width: 150
}

export default ProgressBar