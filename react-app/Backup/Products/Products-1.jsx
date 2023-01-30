import React from "react";
class Product extends React.Component{
    state={
        product_Name : "SAMSUNG Q Series 138 cm (55 inch) QLED Ultra HD (4K) Smart Tizen TV  (55Q8C)",
        price : 344900,
        qty : 1,
        image : "https://rukminim1.flixcart.com/image/416/416/j7m7y4w0/television/s/h/z/samsung-65q8c-original-imaevyz6fm2t3bzq.jpeg?q=70"

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
                                <td>{this.state.product_Name}</td>
                                <td><img src={this.state.image} width="80px" alt="" /></td>
                                <td>{this.state.price}</td>
                                <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.qty} <i className="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                                <td>{this.state.price * this.state.qty}</td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>

    }
}
export default Product