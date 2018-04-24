import React, { Component } from 'react'
import Label from './Label'
import SignUpForm from './SignUpForm'

class App extends Component {
  render() {
    return (
      <div>
        <SignUpForm 
          onSubmit={() => console.log('test')}
        />
      </div>
    )
  }
}

export default App
