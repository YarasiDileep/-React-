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
        return <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="card" >
                                <div className="card-header bg-primary text-white " >
                                    <h1>Digital Clock</h1>
                                </div>
                                <div className="card-body">
                                    <h3>Time:{this.state.ct}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    }
}
export default Digital