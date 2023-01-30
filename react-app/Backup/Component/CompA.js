import React from 'react'
import CompB from "./CompB";
function CompA (){
        let P_Name = "Iphone12"
        let P_Price = 65000
    return <div>
        <h1>Component A</h1>
        <hr />
        <CompB props1={P_Name} props2={P_Price}/>
    </div>
}
export default CompA