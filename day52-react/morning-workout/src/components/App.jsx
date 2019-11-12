import React, { useState, useEffect } from "react";

// class App extends Component {
//   constructor(props) {
//     super(props); 

//     this.state = {
//       users: [],
//       loading: true
//     };
//   }
//   async componentDidMount() {
//     try {
//       const res = await fetch('https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/')
//       const data = await res.json()
//       this.setState({
//         users: data,
//         loading: false
//       })
//     } catch (err) {
//       console.log('componentDidMount', err);
//     }
//   }

//   render() {
//     const userCards = this.state.users.map((user, index) => <UserCard user={user} index={index} />)
//     return (
//       <>
//         {this.state.loading && <div style={{ fontSize: "6rem" }}>Loading...</div>}
//         {userCards}
//       </>
//     );
//   }
// }

// export default App;

const App = () => {
  const [loading, setLoad] = useState(true);
  const [character, setChar] = useState();
  const [planet, setPlanet] = useState();

  useEffect(() => {
    async function fetchChar() {
      const response = await fetch('https://swapi.co/api/people/10/')
      const data = await response.json()
      setChar(data)
      setLoad(false)
    };

    fetchChar();
  }, []);


  useEffect(() => {
    const planetUrl = character.homeworld
    async function fetchPlanet() {
      const response = await fetch(planetUrl)
      const data = await response.json()
      setPlanet(data)
    };

    fetchPlanet();
  }, [character]);

  return (
    <>
      {loading && <div style={{ fontSize: "6rem" }}>Loading...</div>}
      
      <div>
        <h1>{ character && character.name }</h1>
        <p>Hails from { planet && planet.name }</p>
      </div>
    </>
  );


}

export default App;