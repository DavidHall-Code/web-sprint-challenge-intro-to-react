import React from 'react'
import styled from 'styled-components'
import image from '../images/space.jpg'


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
color: #d5f6f7;
text-transform: uppercase;
text-align: center;
font-family: 'Comic Sans MS', cursive;
padding: 1rem;
letter-spacing = 2px;
`;

const P2 = styled(P1) `
font-family: 'Courier New', cursive;
color: #A52A2A;
font-size: 2rem;
text-shadow: 1px 1px white;
`;

const Plate = styled.div `
background-image: url(${image});
background-size: cover;
border: 1px solid gold;
width: 90%;
margin: 20px 50px;
display: flex;
flex-direction: row;
justify-content: space-between;
`;


export default Profile