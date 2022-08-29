import React from 'react'

const NewTest = (props) => {
    if(props.name){
        return <h1>Hello, {props.name}</h1>
    }else{
        return <h1>Hey, str</h1>
    }
}

export default NewTest