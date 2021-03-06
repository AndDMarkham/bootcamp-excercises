import React, { useState } from "react";

const formStyle = { display: "flex", flexDirection: "column", height: '300px', width:  '300px', alignItems: 'space-between'}
const divStyle = { display: "flex", width:  '300px', justifyContent: 'space-between' }
const buttonStyle = { border: '1px solid blue', margin: '5px'}

const URL = 'https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod'
const App = props => {
  // Declare the proper variables for state using useState
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  // Make the inputs 'controlled input' using the function below
  const handleTextValueChange = e => {
    const id = e.target.id;
    const value = e.target.value;
    setFormData(prev => {
      return {
        ...prev,
        [id]: value
      }
    })
  };

  const handleSubmitClick = (e) => {
    e.preventDefault()
    // When the submit button is clicked, submit a POST request to the above URL
    // It will always return an error
    // Find the error message in the returned body and add the error message to the bottom of the form
    async function submission(url) {
      try {
        const response = await fetch(url, {method: 'post'});
        const data = response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    submission(URL);
  }

  return (
    <form style={formStyle}>
      <div style={divStyle}>
        <p>Email</p>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={handleTextValueChange}
        />
      </div>
      <div style={divStyle}>
        <p>Password</p>
        <input
          type="password"
          id="password"
          value={formData.password}
          onChange={handleTextValueChange}
        />
      </div>
      <button style={buttonStyle} onClick={handleSubmitClick}>Submit</button>
    </form>
  );
};

export default App;