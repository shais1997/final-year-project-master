import './App.css';
import Home from './home';
import Login from './login';
import Account from './account-form';
import Orderplace1 from './order-place1';
import Fileupload from './fileupload'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
  <div>
<BrowserRouter basename='/final-year-project-master'>
<Routes>
<Route path='/' element={<Home/>} /> 
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Account/>}/>
<Route path='/placeorder' element={<Orderplace1/>}/>
<Route path='/uploadfile' element={<Fileupload />}/>

</Routes>
</BrowserRouter>

  </div>
  );
}

export default App;

