import React from 'react'
import ProductB from "./ProductB"
function ProductA(){
    let Name = "Samsung"
    let Model = "S22 Ultra"
    let Price = 120000
    let Rating = 4.5
    return <div>
        <h1>Product A</h1>
        <h3></h3>
        <ProductB prop1={Name} prop2={Model} prop3={Price} prop4={Rating}/>
        </div>
}
export default ProductA