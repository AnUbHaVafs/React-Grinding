import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParetnComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName : 'Parent'
      }
      this.callbychildmethod=this.callbychildmethod.bind(this)
    }

    callbychildmethod(){
        
            alert(`hello ${this.state.parentName}`)
        
    }
    



  render() {
    return (
      <div>
        <ChildComponent name={this.callbychildmethod}></ChildComponent>
      </div>
    )
  }
}

export default ParetnComponent
