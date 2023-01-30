import React from "react";

class Counter extends React.Component{
    state = {
        qty : 1
    }
    decrHandler = () =>{
        this.setState({qty:this.state.qty - 1})
    }
    incrHandler = () =>{
        this.setState({qty:this.state.qty + 1})
    }
    render(){
        return <div>
            <h1>Qty Value:{this.state.qty}</h1>
            <button onClick={this.decrHandler}>DECR</button>
            <button onClick={this.incrHandler}>INCR</button>
        </div>
    }
}
export default Counter