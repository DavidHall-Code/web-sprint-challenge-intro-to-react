import React from 'react'
import styled from 'styled-components'



const Profile = (props) => {
    const {name, birthYear} = props


return (
    <Plate className='character'>
        <P1>{name}</P1>
        <P2>{birthYear}</P2>
    </Plate>
)
}

const P1 = styled.h1 `
color: white;
text-transform: uppercase;
text-align: center;
font-family: 'Comic Sans MS', cursive;
padding: 0.5rem;
letter-spacing = 2px;
`;

const P2 = styled.h2 `
font-family: 'Courier New', cursive;
color: #A52A2A;
font-size: 150%;
`;

const Plate = styled.div `
border: 1px solid gold;
width: 90%;
margin: 20px 50px;

`


export default Profile