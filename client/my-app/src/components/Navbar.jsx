import React from 'react'
import { useDispatch } from 'react-redux'
import { Link,useNavigate } from 'react-router-dom'
import { logout } from '../redux/actions/authaction'
import styles from "../styles/navbar.module.css"

export const Navbar = (props) => {
  // console.log(props);
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handlelogout=()=>{
     dispatch(logout)
     navigate("/auth/login")
  }
  return (
    <div id={styles.navbar}>
      <Link to="/">Home</Link >
      <h2>{props.prop.name}</h2>
      <button onClick={handlelogout} >Logout</button >
    </div>
  )
}
