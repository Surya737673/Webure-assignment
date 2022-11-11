import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Homepage } from '../components/Homepage'
import { Login } from '../components/Login'
import { Signup } from '../components/Signup'


export const MainRoutes = () => {
  return (
    <>
     <Routes>
         <Route path="/"  element={<Homepage/>} ></Route>
         <Route path="/auth/login"  element={<Login/>} ></Route>
         <Route path="/auth/signup" element={<Signup/>} ></Route>
     </Routes>
    </>
  )
}
