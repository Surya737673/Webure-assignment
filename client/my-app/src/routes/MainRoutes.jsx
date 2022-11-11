import React from 'react'
import {Routes,Route} from "react-router-dom"
import { Dashboard } from '../components/Dashboard'
import { Login } from '../components/Login'
import { Signup } from '../components/Signup'


export const MainRoutes = () => {
  return (
    <>
     <Routes>
         <Route path="/"  element={<Dashboard/>} ></Route>
         <Route path="/auth/login"  element={<Login/>} ></Route>
         <Route path="/auth/signup" element={<Signup/>} ></Route>
     </Routes>
    </>
  )
}
