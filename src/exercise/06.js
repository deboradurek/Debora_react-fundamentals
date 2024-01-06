// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// EXERCISE

// function UsernameForm({onSubmitUsername}) {
//   const handleSubmit = event => {
//     event.preventDefault()

//     const eventValue = event.target.elements.usernameInput.value

//     onSubmitUsername(eventValue)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input id="usernameInput" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// export default App

// 1. 💯 using refs

// function UsernameForm({onSubmitUsername}) {
//   const inputRef = React.useRef()

//   const handleSubmit = event => {
//     event.preventDefault()

//     onSubmitUsername(inputRef.current.value)
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input id="username" type="text" ref={inputRef} />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// export default App

// 2. 💯 Validate lower-case

// function UsernameForm({onSubmitUsername}) {
//   const [error, setError] = React.useState(null)
//   const inputRef = React.useRef()

//   const handleSubmit = event => {
//     event.preventDefault()

//     onSubmitUsername(inputRef.current.value)
//   }

//   const handleChange = event => {
//     const {value} = event.target

//     const isValueLowerCase = value === value.toLowerCase()
//     setError(isValueLowerCase ? null : 'Username must be lower case')
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           id="username"
//           type="text"
//           ref={inputRef}
//           onChange={handleChange}
//         />
//       </div>
//       {Boolean(error) && (
//         <div role="alert" style={{color: 'red'}}>
//           {error}
//         </div>
//       )}
//       <button type="submit" disabled={Boolean(error)}>
//         Submit
//       </button>
//     </form>
//   )
// }

// function App() {
//   const onSubmitUsername = username => alert(`You entered: ${username}`)
//   return <UsernameForm onSubmitUsername={onSubmitUsername} />
// }

// export default App

// 3. 💯 Control the input value

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('')

  const handleSubmit = event => {
    event.preventDefault()

    onSubmitUsername(username)
  }

  const handleChange = event => {
    const {value} = event.target

    setUsername(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleChange}
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
