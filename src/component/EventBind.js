// import React, { Component } from 'react'

//  class EventBind extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          message:'Hello!'
//       }
//     }
//     clickHandler(){
//         this.setState({
//             message:'GoodBye!'
//         })
//         console.log(this)
//     }

    
//   render() {
//     return (
//       <div>
//         <div>{this.state.message}</div>
//         <button onClick={this.clickHandler}>Click</button>
//       </div>
//     )
//   }
// }

// export default EventBind
// ---------------------error vaala part uppar hai jahan this keyword is undefined 

// import React, { Component } from 'react'

//  class EventBind extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          message:'Hello!'
//       }
//     }
//     clickHandler(){
//         this.setState({
//             message:'GoodBye!'
//         })
//         console.log(this)
//     }

    
//   render() {
//     return (
//       <div>
//         <div>{this.state.message}</div>
//         {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}---1st method use bind keyword when you click on the button this will cause the UI to re-render this might not effect in small application in web performance but can cause severe effect in mid and large applications
//         <button onClick={()=> this.clickHandler()}>Click</button> -------> 2nd method using arrow functions note that since we are giving input and returning a string output so we are using paranthesis as well ()
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello!'
      }
      this.clickHandler = this.clickHandler.bind(this) //---->3rd method instead of binding this keyword in the render method we bind it in constructor method
      // this method is also in the actual react documentation why?
      // because this method bind the "this" keyword only once and not results in multiple re-render of UI as render method do!
      //-->4th methios is to define the eventHandler method using arrow function instead of regular function
    }
    // clickHandler(){
    //     this.setState({
    //         message:'GoodBye!'
    //     })
    //     console.log(this)
    // }
    clickHandler = ()=>{
        this.setState({
            message:'GoodBye!'
        })
    }

    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
