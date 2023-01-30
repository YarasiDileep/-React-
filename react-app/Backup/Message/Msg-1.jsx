import React from "react";
class Msg extends React.Component{
    state = {
        msg : "Hello"
    }
    gmHandler (){
        console.log("Handler Working")
        this.msg = "Good Morning"
        console.log(this.msg);
    }
    render(){
        console.log("Second Render Method");
        return <div>
            <h1>Message Component</h1>
            <h3>Message_Value:{this.state.msg}</h3>
            <button onClick={this.gmHandler}>GM</button>
        </div>
    }
}
export default Msg