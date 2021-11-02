import React, {useState, useEffect} from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
    const [value, setValue] = useState(0)
    useEffect(() => {
        console.log('runs each time value changes')
        if (value >= 1) {
            document.title = `New Messages(${value})`
        }
    },[value])

    useEffect(() => {
        console.log('runs only the first time the component is rendered')
    }, [])

    useEffect(() => {
        console.log('runs each time the component is rendered')
    })


    console.log('render component')

    return (
        <>
            <h1>{value}</h1>
            <button className='btn' onClick={() => setValue(value + 1)}>Click Me!</button>
        </>);
};

export default UseEffectBasics;
