import React, { Component } from 'react'

class ConditionalRendering1 extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin:true
      }
    }
    



  render() {
/////----------------------1st method----------------////////////////
    // if(this.state.isLoggedin){
    //     return(
    //         <div>
    //         <div>Welcome Anubhav Agrawal! </div>
    //         <div> You have successfully Logged in .</div>
    //         </div>
    //     )
    // }
    // else{
    //     return(
    //         <div>Welcome Guest !</div>
    //     )
    // }

/////----------------------2nd method----------------////////////////

// let message
// if(this.state.isLoggedin){
//     message=<div>Welcome Anubhav Agrawal</div>
// }
// else{
//     message=<div>Welcome Guest</div>
// }
// return <div>{message}</div>

//////////===================3rd appraoch==================///////////////
// return this.state.isLoggedin ? (
//     <div>Welcome Anubhav Agrawal</div>
//     ) : (
//         <div>Welcome guest</div>
//     )

//////--------------------->4th method-------------/////////////////

return this.state.isLoggedin && <div>Welcome Anubhav Agrawal</div>



    // return (
    //   <div>
    //     <div>Welcome Anubhav </div>
    //   </div>
    // )
  }
}

export default ConditionalRendering1
