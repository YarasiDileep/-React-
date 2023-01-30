import React from "react";
class Bindex extends React.Component{
    state = {
        msg : "Hello"
    }
    updateHandler(value){
            this.setState({
                msg: value
            })
    }
    render(){
        return <div>
            <h1>Bindex Component</h1>
            <h3>Bind_Value:{this.state.msg}</h3>
            <button onClick={this.updateHandler.bind(this,"Number 1")}>1</button>
            <button onClick={this.updateHandler.bind(this,"Number 2")}>2</button>
            <button onClick={this.updateHandler.bind(this,"Number 3")}>3</button>
            
        </div>
    }
}
export default Bindex