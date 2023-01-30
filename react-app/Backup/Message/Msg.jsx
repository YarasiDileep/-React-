import React from "react";
class Msg extends React.Component{
    state = {
        msg : "Hello"
    }
    gmHandler = ()=>{
        console.log("Handler Working")
        this.setState({msg:"Good Morning"})
    }
    gaHandler =()=>{
        this.setState({msg:"Good Afternoon"})
    }
    geHandler =()=>{
        this.setState({msg:"Good Evening"})
    }
    gnHandler =()=>{
        this.setState({msg:"Good Night"})
    }
    render(){
        console.log("Second Render Method");
        return <div>
            <h1>Message Component</h1>
            <h3>Message_Value:{this.state.msg}</h3>
            <button onClick={this.gmHandler}>GM</button>
            <button onClick={this.gaHandler}>GA</button>
            <button onClick={this.geHandler}>GE</button>
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}
export default Msg