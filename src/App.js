
import './App.css';
import Login from './Components/Login';

import Home from './Components/Home';
import Product from './Components/Product';
import User from './Components/User'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import ContactUs from './Components/ContactUs';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
  <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/User' element={<User/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Contact' element={<ContactUs/>}/>
        
      </Routes>
      </BrowserRouter>
      
      {/* <Navbar/> */}
      
     
    </div>
  );
}

export default App;
