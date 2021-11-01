import React, {Fragment, useState} from 'react';

const UseStateObject = () => {
    const [person, setPerson] = useState({name: 'peter', age: 24, message: 'random message'})

    const [name, setName] = useState('peter')
    const [age, setAge] = useState(24)
    const [message, setMessage] = useState('random message')

    const changeMessage = () => {
        //spread operator to copy original object and overwrite only message
        //setPerson({...person, message: 'hello world'})
        setMessage('Hello World')
    }
    return (
        <Fragment>
            <h3>{name}</h3>
            <h3>{age}</h3>
            <h3>{message}</h3>
            <button className='btn' onClick={changeMessage}>Change Message</button>
        </Fragment>);
};

export default UseStateObject;
