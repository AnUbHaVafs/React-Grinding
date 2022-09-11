import React from 'react'

function hello() {
    // return (
    //     <div>
    //         <h1>Hello My name is Anubhav</h1>
    //     </div>
    // )

    // return React.createElement(
    //     'div',
    //     null,
    //     React.createElement('h1', null, 'Hello Anubhav Here')
    // )

    return React.createElement(
        'div',
        {id:'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Anubhav Here')
    )
}
export default hello