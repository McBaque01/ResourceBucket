import React from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import { SignIn } from '../pages/SignIn'

import { SignUp } from '../pages/SignUp'
export const MainRoute = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigate to="SignUp"/>} />
            <Route path="SignIn" element={<SignIn/>} />

            <Route path="SignUp" element={<SignUp/>} />
        </Routes>
    </BrowserRouter>
  )
}
