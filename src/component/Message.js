import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()
        this.state = {
            message: 'Welcome Visitors'

        }
    }

    changeMessage(){
        this.setState({
            message:'Thank you for visiting'
        })
        console.log(this)
    }


    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()} >Click Me !</button>
            </div>
        )
    }
}











// class Message extends Component{
//     render(){
//         return(
//             <h1>Welcome Visitors</h1>
//         )
//     }
// }


export default Message