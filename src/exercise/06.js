// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const [errorMessage, setErrorMessage] = useState(null)

  const handleSubmit = event => {
    event.preventDefault()

    console.dir(event)

    const value = event.target.elements.usernameInput.value
    onSubmitUsername(value)
  }

  const handleChange = event => {
    const value = event.target.value
    const isValid = value === value.toLowerCase()

    if (isValid) {
      setErrorMessage(null)
    } else {
      setErrorMessage('Only lowercase values accepted')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" onChange={handleChange} type="text" />
      </div>
      <button type="submit" disabled={errorMessage}>
        Submit
      </button>

      {errorMessage && <div style={{color: 'red'}}>{errorMessage}</div>}
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
