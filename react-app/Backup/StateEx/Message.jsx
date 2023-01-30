import React from 'react';
class Message extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            msg:"Hello"
        }
    }
    gmHandler = ()=>{
        this.setState({msg:"Good Morning Dileep"})
    }
    gaHandler = ()=>{
        this.setState({msg:"It's Time To Lunch"})
    }
    geHandler = ()=>{
        this.setState({msg:"Practise React"})
    }
    gnHandler = ()=>{
        this.setState({msg:"Go To Bed And Sleep"})
    }
    render(){
        console.log("Render Method Executing")
        return <div>
            <h1>Message Component</h1>
            <hr/>
            <h2>Msg:{this.state.msg}</h2>
            <button onClick={this.gmHandler}>Good Morning</button>
            <button onClick={this.gaHandler}>Good Afternoon</button>
            <button onClick={this.geHandler}>Good Evening</button>
            <button onClick={this.gnHandler}>Good Night</button>
        </div>
    }
}
export default Message