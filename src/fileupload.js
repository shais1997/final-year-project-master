import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import fileuploadCss from './fileupload.module.css'
import { Link } from 'react-router-dom';



class Orderplace1 extends React.Component{
    render(){
    
        const openPopup=()=>{
            
        }
       return(
        <>
        <div className={fileuploadCss.footer}>
            <header>User Name</header>
            <ul>
                <li><Link to='/uploadfile'>Place Order</Link></li>
                <li><a href=''>Status</a></li>
                <li><a href=''>History</a></li>
                <li><Link to='/'>Logout</Link></li>
            </ul>
        </div>
        <div className={fileuploadCss.container}>
        <div><img src='./final-year-project/images/Capture.jpg' alt=''/></div>
        </div>
        <div className={fileuploadCss.header}>
            <h4>Place New Order</h4>
            <div className={fileuploadCss.line}></div>
        </div>
        <div className={fileuploadCss.radio}>
        <input type='radio' id='sup' name='p'/>
        <label for='sup'>SUP</label>
        <input type='radio' id='fbp' name='p' />
        <label for='fbp'>FBP</label>
        <input type='radio' id='drip' name='p' />
        <label for='drip'>Drip</label>
        </div>
        <div className={fileuploadCss.radio}>
        <input type='radio' id='trp' name='t'/>
        <label for='trp'>TRP</label>
        <input type='radio' id='mltz' name='t'/>
        <label for='mltz'>MLTZ</label>
        <input type='radio' id='paper' name='t'/>
        <label for='paper'>Paper</label>
        </div>
        <div className={fileuploadCss.radio}>
        <input type='radio' id='s' name='z'/>
        <label for='s'>S</label>
        <input type='radio' id='m' name='z'/>
        <label for='m'>M</label>
        <input type='radio' id='l'name='z'/>
        <label for='l'>L</label>
        </div>
        <div className={fileuploadCss.upload}>
            <input type='file' className={fileuploadCss.inp}/>
        </div>
        <div className={fileuploadCss.btnf}>
        <button onClick={openPopup}>Next</button>
        </div>
        <div className={fileuploadCss.popup} id='popup'>
            <h3>Hellow World</h3>
            <Button>ok</Button>
        </div>
        </>
       
        
       )
    
    }
}
export default Orderplace1


