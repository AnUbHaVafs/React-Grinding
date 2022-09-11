import React, { Component } from 'react'

// class Classdes extends Component {
//   render() {    
//     return (
//       <div>
//         <h1>Welcome {this.props.name} and {this.props.Heroname}</h1>
        
//       </div>
//     )
//   }
// }
class Classdes extends Component {
  render() {    
    const {name,Heroname} = this.props
    return (
      <div>
        <h1>Welcome {name} and {Heroname}</h1>
        
      </div>
    )
  }
}

export default Classdes
