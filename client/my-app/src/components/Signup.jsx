import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styles from "../styles/signup.module.css"
import { signup } from '../redux/actions/authaction'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export const Signup = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const [sdata,setSdata]=useState({});
    
    const handleChange=(e)=>{
      let {name,value}=e.target;
      setSdata({
        ...sdata,
        [name]:value
      })
    }
    
    const handleSubmit=()=>{
      if(!sdata.email ){
        toast("email can not be empty", {
          position: toast.POSITION.BOTTOM_CENTER,
          className: 'toast-message'
      });
      }else if(!sdata.password){
        toast('password can not be empty', {
          position: toast.POSITION.BOTTOM_CENTER,
          className: 'toast-message'
      });
      } else{
         dispatch(signup(sdata,navigate))
      } 
    }

  return (
    <div id={styles.signupdiv}>
         <label>Name</label>
         <input type="text" name="name" onChange={(e)=>handleChange(e)} />
         <label>Email</label>
         <input type="text"  name="email" onChange={(e)=>handleChange(e)} />
         <label >Password</label>
         <input type="password" name="password" onChange={(e)=>handleChange(e)} />
         <button onClick={()=>handleSubmit()}>Register</button>
         <ToastContainer/>
    </div>
  )
}
