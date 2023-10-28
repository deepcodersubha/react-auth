import React, { useState } from 'react'
import SignUp from './Signup'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/register' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App