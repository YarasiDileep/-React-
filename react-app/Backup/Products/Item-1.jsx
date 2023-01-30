import React from "react";
class Item extends React.Component{
    state={
        Product_Name : " Hybrid Cycle",
        Price : 5499,
        qty : 1
    }
    render(){
        return <div className="container">
            <div className="row">
                <div className="col-8">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.Product_Name}</td>
                                <td>{this.state.Price}</td>
                                <td>{this.state.qty}</td>
                                <td>{this.state.qty * this.state.Price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    }
}
export default Item