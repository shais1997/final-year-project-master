import React from 'react';
import LoginCSS from'./login.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Login=()=>{
  const navigate=useNavigate();
       return(
        <>
        <div className={LoginCSS.footer}></div>
        <div className={LoginCSS.company}><img src='./final-year-project/images/Capture.jpg' alt=''/></div>
        <div className={LoginCSS.btn}>
          <div className={LoginCSS.border}>
          <h5>Login</h5>
          <input type='text' placeholder='Email' className={LoginCSS.textbox}/>
            <label class='form-label'>
              
            </label>
            <br></br>
            <br></br>
            <input type='text' placeholder='Password' className={LoginCSS.textbox}/>
            <label className='form-label'>
              
            </label>
          </div> 
          <div className={LoginCSS.forget}><Link to='/'>Forget Password</Link></div>
        <div className={LoginCSS.loginbtn}>
        <Button onClick={()=>navigate('/placeorder')}>
          Login
        </Button>
        </div>
      </div>
        </>
       
        
       )
    
    }
export default Login


