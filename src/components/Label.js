import React from 'react'
import PropTypes from 'prop-types'

const Label = ({labelName, required}) => {
  // Set the color of the style we want:
  let requiredStyle = {
    color: 'rgb(255, 0, 0)'
  }

  // use the required style to render a span with a *
  const fieldRequired = <span style={requiredStyle}>*</span>

  // This is the constructor which will show a label and whether or not something is required
  return (
    <label>
      {labelName} {required && fieldRequired}
    </label>
  )
}

Label.propTypes = {
  labelName: PropTypes.string.isRequired,
  // LabelName is a string and is required

  required: PropTypes.bool
}

export default Label