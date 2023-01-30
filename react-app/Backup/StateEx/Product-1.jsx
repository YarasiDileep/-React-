import React from 'react'
class Product extends React.Component{
    state={
        Product_Name:"SONY Alpha ILCE-6400L" ,
        Price : 127559,
        qty : 1,
        image :"https://rukminim1.flixcart.com/image/312/312/kc0u7bk0/dslr-camera/f/r/s/alpha-6400-vlogger-starter-kit-alpha-6400-vlogger-starter-kit-original-imaft8hwtuyxyg7t.jpeg?q=70"
    }
    decrHandler = ()=>{
        this.setState({
            qty: this.state.qty - 1
        })
    }
    incrHandler = ()=>{
        this.setState({
            qty : this.state.qty + 1
        })
    }
    render(){
        return <div className="container">
            <div className="row">
                <div className="col-8">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.Product_Name}</td>
                                <td><img src={this.state.image} width="80px" alt="" /></td>
                                <td>{this.state.Price}</td>
                                <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.qty} <i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                <td>{this.state.qty * this.state.Price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    }
}
export default Product