import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import orderplaceCss from './orderplace.module.css'
import { useNavigate, Link } from 'react-router-dom';



const Orderplace1=()=>{
    const navigate=useNavigate();
       return(
        <>
        <div className={orderplaceCss.footer}>
            <header>User Name</header>
            <ul>
                <li><Link to='/uploadfile'>Place Order</Link></li>
                <li><a href=''>Status</a></li>
                <li><a href=''>History</a></li>
                <li><Link to='/'>Logout</Link></li>
            </ul>
        </div>
        <div className={orderplaceCss.container}>
        <div><img src='./final-year-project/images/Capture.jpg' alt=''/></div>
        </div>
        <div className={orderplaceCss.btnn}>
        <button onClick={()=>navigate('/uploadfile')}>Place New Order </button>
        </div>
     
      
    
        </>
       
        
       )
    
    }

export default Orderplace1


