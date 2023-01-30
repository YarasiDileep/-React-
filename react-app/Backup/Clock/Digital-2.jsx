import React from "react";
class Digital extends React.Component{
    state = {
        ct : new Date().toLocaleTimeString()
    }
    componentDidMount = ()=>{
        setInterval(() => {
            this.setState({
                ct: new Date().toLocaleTimeString()
            })
        }, [1000]);
    }
    render(){
        return <div>
            <h1>Digital Clock</h1>
            <h3>Time:{this.state.ct}</h3>
        </div>
    }
}
export default Digital