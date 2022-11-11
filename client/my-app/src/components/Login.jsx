import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../redux/actions/authaction'
import styles from "../styles/login.module.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const [cred,setCred]=useState({});
  
    const handleChange=(e)=>{
      let {name,value}=e.target;
      setCred({
        ...cred,
        [name]:value
      })
      
    }
    const handleSubmit=async()=>{
      if(!cred.email ){
        toast("email can not be empty", {
          position: toast.POSITION.BOTTOM_CENTER,
          className: 'toast-message'
      });
      }else if(!cred.password){
        toast('password can not be empty', {
          position: toast.POSITION.BOTTOM_CENTER,
          className: 'toast-message'
      });
      } else{
         dispatch(login(cred,navigate))
      }   
    }

  return (
    <div id={styles.logindiv}>
         <label>Email</label>
         <input type="text" name="email" required onChange={(e)=>handleChange(e)} />
         <label >Password</label>
         <input type="password" required  name="password" onChange={(e)=>handleChange(e)} />
         <button onClick={()=>handleSubmit()}>Login</button>
         <p>Dont? have an account create one</p>
         <Link to="/auth/signup">Signup</Link>
         <ToastContainer />
    </div>
  )
}
