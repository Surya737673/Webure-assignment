import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getusers } from '../redux/actions/authaction';

export const Dashboard = () => {
  const [loginstatus,setLoginstatus]=useState(false)
  const dispatch=useDispatch();
  const navigate=useNavigate()
  
  const [edata,setEdata]=useState([])
   useEffect(()=>{
   dispatch(getusers());
   
  },[edata])
  
 

  return (
    <>
      
      
      <div >
        {edata.map((e) => (
          <>
                <div>
                <div key={e._id}> {e.name} </div>                 
                </div>
          </>
        ))}
      </div>
    </>
  );
  
}
