import React from 'react';
import AccountCss from'./account-form.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Account=()=>{
  const navigate=useNavigate();
       return(
        <>
        <div className={AccountCss.footer}></div>
        <div className={AccountCss.company}><img src='./final-year-project/images/Capture.jpg' alt=''/></div>
        <div className={AccountCss.btn}>
          <div className={AccountCss.border}>
          <h5>Create an Account</h5>
          <input type='text' placeholder='Email' className={AccountCss.textbox}/>
            <label class='form-label'>
            </label>
            <br></br>
            <input type='text' placeholder='Password' className={AccountCss.textbox}/>
            <label className='form-label'>
            </label>
            <br></br>
            <input type='text' placeholder='Password' className={AccountCss.textbox}/>
            <label className='form-label'>
            </label>
            <br></br>
            <input type='text' placeholder='Password' className={AccountCss.textbox}/>
            <label className='form-label'>
            </label>
          </div> 
          <p className='forget-password'>login</p>
        <div className={AccountCss.createaccount} >
        <Button onClick={()=>navigate('/login')}>
          Create Account
        </Button>
        </div>
      </div>
        </>
       
        
       )
    
    }
export default Account


