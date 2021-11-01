import React from 'react';

const BirthdayCard = (props) => {
    console.log(props)
    const {name, birthday, image} = props.data;

    return (
        <>
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{new Date().getFullYear() - birthday.getFullYear()}</p>
        </>
    )
}

export default BirthdayCard;