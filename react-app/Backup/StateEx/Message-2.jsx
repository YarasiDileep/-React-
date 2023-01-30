import React from 'react';
class Message extends React.Component{
    constructor(props){
        super(props)
        console.log("First Const")
        this.msg="Hello"

    }
    gmHandler = ()=>{
        console.log("GM Handler working")
        this.msg = " GM Hello World "
        console.log(this.msg)
        this.forceUpdate()
    }
    render(){
        console.log("Second Render")
        return <div>
            <h1>Message Component</h1>
            <hr/>
            <h2>Msg:{this.msg}</h2>
            <button onClick={this.gmHandler}>Good Morning</button>
        </div>
    }
}
export default Message