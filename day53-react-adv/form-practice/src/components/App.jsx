import React, { useState, useEffect } from "react";

const url = "https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/"

const App = props => {
  const [formInputs, setFormInputs] = useState({
      name: '',
      email: '',
      password: '',
      checked: false
  })

  const handleFormChange = e => {
    const id = e.target.id
    const value = e.target.value
    setFormInputs(prev => {
        return {
          ...prev,
          [id]: value
        }
    })
  }

  const handleCheckChange = e => {
    const id = e.target.id
    const value = e.target.value
    console.log(e.target.id)
    setFormInputs(prev => {
        return {
          ...prev,
          [id]: !value
        }
    })
  }

  useEffect(() => {
    console.log(formInputs)
  }, [formInputs])



  return (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="first_name"> What's your name? </label>
      <input 
        id="name"
        name="name"
        type="text"
        value={formInputs.name}
        onChange={handleFormChange}
        style={{ margin: '0.5rem' }}
      />
      <label htmlFor="email"> Enter your email </label>
      <input 
        id="email"
        name="email"
        type="email"
        value={formInputs.email}
        onChange={handleFormChange}
        style={{ margin: '0.5rem' }}
      />
      <label htmlFor="password"> Choose a unique password </label>
      <input 
        id="password"
        name="password"
        type="password"
        value={formInputs.password}
        onChange={handleFormChange}
        style={{ margin: '0.5rem' }}
      />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <label htmlFor="mailing-list"> Join Our Mailing List! </label>
        <input 
          id="checked"
          name="mailing-list"
          type="checkbox"
          value={formInputs.checked}
          onChange={handleCheckChange}
          style={{ margin: '0.25rem 0.5rem 0 0.5rem' }}
        />
      </div>
      <button> Submit </button>
    </form>
  )
}

export default App;
