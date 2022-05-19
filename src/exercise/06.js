// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import React, {useState} from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    onSubmitUsername(username)
  }

  const handleChange = event => {
    const value = event.target.value.toLowerCase()

    setUsername(value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          onChange={handleChange}
          value={username}
          type="text"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
