import React from 'react'
import PropTypes from 'prop-types'
import ProgressBar from './ProgressBar'
import TextInput from './TextInput'

class PasswordInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showPassword: false
    }
    this.toggleShowPassword = this.toggleShowPassword.bind(this)
  }

  // This is a unique syntax to toggle the true and false. It is letting us set an object and passing in the previous state
  toggleShowPassword () {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render () {
    const {
      name,
      labelName,
      value,
      placeholder,
      onChange,
      maxLength,
      strengthPercentage,
      error,
      showVisibilityToggle,
      ...props
    } = this.props

    const inputType = this.state.showPassword ? 'text' : 'password'
    const toggleShowStyle = {
      marginLeft: 5,
      textDecoration: 'none',
      display: 'inline'
    }

    return (
      <TextInput 
        type={inputType}
        labelName={labelName}
        name={name}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
        error={error}
        onChange={onChange}
        required
        {...props}
      >
        <p onClick={this.toggleShowPassword}>Show</p>
        {value.length > 0 && strengthPercentage && <ProgressBar percent={strengthPercentage} width={150} />}
      </TextInput>
    )
  }
}

PasswordInput.PropTypes = {
  name: PropTypes.string.isRequired,
  labelName: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
  strengthPercentage: PropTypes.number,
  error: PropTypes.string,
  showVisibilityToggle: PropTypes.bool
}

PasswordInput.defaultProps = {
  labelName: 'password',
  maxLength: 24,
  showVisibilityToggle: false
}

export default PasswordInput