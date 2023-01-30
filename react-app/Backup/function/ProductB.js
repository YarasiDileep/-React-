import React from 'react'
function ProductB(props){
    return <div>
            <h1>ProductB</h1>
            <pre>{JSON.stringify(props)}</pre>
            <h3>property1: {props.prop1}</h3>
            <h3>property2: {props.prop2}</h3>
            <h3>property3: {props.prop3}</h3>
            <h3>property4: {props.prop4}</h3>
        </div>
}
export default ProductB