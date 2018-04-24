import React from 'react'
import PropTypes from 'prop-types'
import Label from './Label'

const TextInput = ({
  labelName,
  name,
  type,
  required,
  placeholder,
  value,
  error,
  children,
  onChange,
  ...props
}) => {
  const errorStyle = { color: 'red' }
  const errorBorderStyle = { border: '1px solid red' }
  const inputStyle = { margin: 5 }

  const errorMessageDiv = <div style={errorStyle}>{error}</div>

  return (
    <div style={inputStyle}>
      <Label 
        labelName={labelName}
        required={required}
      />
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={error && errorBorderStyle}
        {...props}
      />
      {children}
      {error && errorMessageDiv}
    </div>
  )
}

TextInput.propTypes = {
  labelName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'number', 'password']),
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  error: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func.isRequired
}

TextInput.defaultProps = {
  type: 'text',
  required: false
}

export default TextInput