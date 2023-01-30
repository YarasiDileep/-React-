import Navbar from './Navbar/Navbar'
import Message from './FuninStateEx/Message'
import Counter from './FuninStateEx/Counter'
import Digital from './FuninStateEx/Digital'
import Product from './FuninStateEx/Product'
import Employee from './FileHandling/Employee'
import Salary from './Salary/Salary'
import Login from './FormRendering/Login'
import Registration from './FormRendering/Registration'
import User from './Axios/User'

function App (){
    return <div>
        <Navbar/>
        <h1>User Data</h1>
        <hr/>
        <User/>
     </div>
  
}
export default App