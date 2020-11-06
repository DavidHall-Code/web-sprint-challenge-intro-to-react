import React from 'react'



const Profile = (props) => {
    const {name, birthYear} = props


return (
    <div className='character'>
        <p>{name}</p>
        <p>{birthYear}</p>
    </div>
)
}

export default Profile