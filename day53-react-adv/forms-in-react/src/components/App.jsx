import React, { useState, useEffect } from "react";

const App = props => {
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [formSubmitSuccess, setSubmitSuccess] = useState(false);

  const handleFormInput = (e) => {
    setFormInput({
      ...formInput,
      [e.target.id]: e.target.value
    })
    console.log('id', e.target.id)
    console.log(formInput[e.target.id])
  };

  const handleSubmitButtonClick = (e) => {
    e.preventDefault()

    console.log('clicked', formInput)
    fetch('wwww.whatever.com')
    .then(() => {
      setSubmitSuccess(true);
    })
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column' }}>
      <input 
        id="name" 
        type="text" 
        value={formInput.name} 
        onChange={handleFormInput} 
      />
      <input 
        id="email" 
        type="email" 
        value={formInput.email} 
        onChange={handleFormInput} 
      />
      <input 
        id="password" 
        type="password" 
        value={formInput.password} 
        onChange={handleFormInput} 
      />
      <button onClick={handleSubmitButtonClick}> Submit </button>

      {formSubmitSuccess && <h4>Congrats!</h4>}

    </form>
  )
}

export default App;
