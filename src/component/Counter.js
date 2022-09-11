import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increment(){
        // this.setState({
        //     count: this.state.count +1
        // },()=> console.log('Callback Value : ',this.state.count)
        // )
        // this.setState({
        //     count: this.state.count +1
        // })
        // console.log('Callback Value : ',this.state.count)

        this.setState(prevState=>({
            count: prevState.count +1
        }))
        console.log(this.state.count)

        // this.setState((prevState,props)=>({
        //     count: prevState.count + props.addVal
        // }))
        // console.log(this.state.count)

    }

    // increment(){
    //     this.state.count = this.state.count+1;----------->this is wrong
    // }
    // console.log(this.state.count)
    
   incrementFive(){
    this.increment()
    this.increment() // ===============> this will not work because it cannot the store the prevstate
    this.increment()
    this.increment()
    this.increment()
   }


  render() {
    return (
      <div>
        <div>Count : {this.state.count}</div>
        <button onClick={()=> this.incrementFive()}>Click Me!</button>
      </div>
    )
  }
}

export default Counter
