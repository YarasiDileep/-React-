import React from "react";
class Digital extends React.Component{
    state = {
        ct : new Date().toLocaleTimeString()
    }
    updateHandler = ()=>{
        this.setState({ct: new Date().toLocaleTimeString()})
    }
    render(){
        return <div>
            <h1>Digital Clock</h1>
            <h3>Time:{this.state.ct}</h3>
            <button onClick={this.updateHandler}>Refresh</button>
        </div>
    }
}
export default Digital