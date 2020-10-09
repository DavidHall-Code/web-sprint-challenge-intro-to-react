import React from 'react';

import Profile from "./Profile";


const CharacterCard = (props) => {
    const {data} = props;

return (
    <div className="character-profile">
        {data.map((element, index) => {
            return <Profile key={index} name={element.name} birthYear={element.birth_year} />
        })}
    </div>
);
};

export default CharacterCard;