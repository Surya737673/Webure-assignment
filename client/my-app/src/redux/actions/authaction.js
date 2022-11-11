import axios from "axios"
import { toast } from "react-toastify";

export const LOGIN="LOGIN";
export const LOGOUT="LOGOUT";
export const GETUSERS="GETUSERS";

let url="http://localhost:8080"

//SignUp
export const signup = (payload,navigate) => async (dispatch) => {
    await axios.post(`${url}/auth/signup`, payload).then((res)=>{
      // console.log("signup",res);
      if(res.data.message==="user already exist"){
         toast("user already exist")
    }else{
      navigate("/auth/login")
    }
  })
    //console.log(res.data);
};

//Login
export const login = (payload,navigate) => async (dispatch) => {
     await axios.post(`${url}/auth/login`, payload).then((res)=>{
      // console.log("res",res.data)
       if(res.data.message==="success"){
           dispatch({
             type:LOGIN,
             payload:res.data
          })
          // navigate("/")
     }
     else if(res.data.message==="email password required"){
          alert("email password required")    
     }
    }
   ).catch((error)=>{
      alert("invalid credentials")
   })
};

export const getusers = (payload,navigate) => async (dispatch) => {
  await axios.get(`${url}/auth/login`).then((res)=>{
   console.log("res",res.data)
    if(res.data.message==="success"){
        dispatch({
          type:GETUSERS,
          payload:res.data
       })
       // navigate("/")
  }
  else if(res.data.message==="email password required"){
       alert("email password required")    
  }
 }
).catch((error)=>{
   alert("invalid credentials")
})
};

export const logout = () =>  (dispatch) => {
  dispatch({
      type:LOGOUT
  })
};