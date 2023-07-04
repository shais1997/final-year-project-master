import React from 'react';
import HomeCss from './home.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Home=()=>{
  const navigate=useNavigate();
       return(
        <>
        <div className={HomeCss.footer}></div>
        <div className={HomeCss.container}>
        <div className={HomeCss.welcom}>
            <h2>Welcome To</h2>
          </div>
        <div className={HomeCss.company}><img src='./final-year-project/images/Capture.jpg' alt=''/></div>
        <div className={HomeCss.btn}>
        <Button onClick={()=>navigate('/signup')}>
        Create an Account
        </Button>{' '}
        <Button onClick={()=>navigate('/login')}>
          Log-In
        </Button>
        </div>
      </div>
        </>
       
        
       )
    
    }

export default Home


