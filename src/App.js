import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import './App.css';
import CharacterCard from './components/Character'




const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([])
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect (() => {
    axios
      .get ('https://swapi.dev/api/people/')
      .then ((res) => {
        console.log('Here is your requested API data: ', res.data.results)
        setData (res.data.results)
      })
      .catch ((err) => {
        console.log('An ERROR has populated: ', err)
      })
  }, [])

  return (
    <Wrapper className="App">
      <Title className="Header">The Births of Star Wars</Title>
      <CharacterCard data={data} />
    </Wrapper>
  );
}

const Wrapper = styled.div `
width: 100%;
height: 100%;
margin: 0;
`;

const Title = styled.h1 `
color: #6054c4;
font-size: 5rem;
text-shadow: 2px 2px black;
`
export default App;
