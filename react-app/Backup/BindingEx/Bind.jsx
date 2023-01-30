import React from "react";
class Bind extends React.Component{
    state={
        msg:"Hello"
    }
    
    updateHandler=(value)=>{
        this.setState({
            msg:value
        })
    }
    
    render(){
        return <div>
            <h1>Binding Component</h1>
            <h3>Bind:{this.state.msg}</h3>
            <button onClick={this.updateHandler.bind(this,"Good Morning")}>GM</button>
            <button onClick={this.updateHandler.bind(this,"Good Afternoon")}>GA</button>
            <button onClick={this.updateHandler.bind(this,"Good Evening")}>GE</button>
            <button onClick={this.updateHandler.bind(this,"Good Night")}>GN</button>
        </div>
    }
}
export default Bind