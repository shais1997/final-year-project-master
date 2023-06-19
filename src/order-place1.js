import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import orderplaceCss from './orderplace.module.css'



class Orderplace1 extends React.Component{
    render(){
       return(
        <>
        <div className={orderplaceCss.footer}>
            <header>User Name</header>
            <ul>
                <li><a href=''>Place Order</a></li>
                <li><a href=''>Status</a></li>
                <li><a href=''>History</a></li>
                <li><a href=''>Logout</a></li>
            </ul>
        </div>
        <div className={orderplaceCss.container}>
        <div><img src='./final-year-project/images/Capture.jpg' alt=''/></div>
        </div>
        <div className={orderplaceCss.btn}>
        <button>Place New Order </button>
        </div>
     
      
    
        </>
       
        
       )
    
    }
}
export default Orderplace1


