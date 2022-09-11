import React from 'react'

// const f_des = props =>{
//     return(
//         <div>
//             <h1>
//                 Hello {props.name} a.k.a {props.Heroname}
//             </h1>
//         </div>
//     )
// }

// const f_des = (name, Heroname) =>{
//     return(
//         <div>
//             <h1>
//                 Hello {name} a.k.a {Heroname}
//             </h1>
//         </div>
//     )
// }

const f_des = props =>{

    const {name,Heroname} = props
    return(
        <div>
            <h1>
                Hello {props.name} a.k.a {props.Heroname}
            </h1>
        </div>
    )
}


export default f_des