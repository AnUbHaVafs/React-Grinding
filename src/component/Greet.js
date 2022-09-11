import React from 'react'

// function Greet(){
//     {
//         return( <h1>This is functional component</h1>);
//     }
// }        
    
    // return <h1>Hello Anubhav this side </h1>

    const Greet = (props)=>{
        
        console.log(props)
        return (
            <div>
                <h1>Hello {props.name}</h1>
                {props.children}
            </div>
        
        )
    }

// const Greet = ()=> <h1>Hello Anubhav this side</h1>
export default Greet