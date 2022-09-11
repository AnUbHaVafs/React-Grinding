// import logo from './logo.svg';
import React,{Component} from 'react'
import './App.css'; 
import Greet from './component/Greet'
import Welcome from './component/Welcome'
import hello from './component/hello'
import Message from "./component/Message"
import Counter from './component/Counter'
import f_des from './component/f_destructuring'
import Classdes from './component/Classdes'
import EventBind from './component/EventBind'
import ParetnComponent from './component/ParetnComponent';
import ConditionalRendering1 from './component/ConditionalRendering1';
import NameList from './component/NameList';

class App extends Component {
  render(){

    return (
      <div className="App">
        {/* <mytest></mytest>
         <Welcome></Welcome>
        <hello></hello>
        <mytest name="Bruce">
          <button>Action</button>
        </mytest> */}

{/* 
        <Welcome class="Anubhav" name = "Agrawal" >
          <p>This is <b>[this.props.children]</b> paragraph </p>
        </Welcome> */}
     
        {/* <Message></Message> */}

        {/* <Counter></Counter> */}
        {/* <f_des name="Anubhav" Heroname="Agrawal" ></f_des> */}
        {/* <Classdes name="Ankit" Heroname="Kishore Singh" ></Classdes> */}
        {/* <EventBind></EventBind> */}
        {/* <ParetnComponent/> */}
        {/* <ConditionalRendering1/> */}
        <NameList/>
      </div>
    );

  }
  
}

export default App;
