import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Upload from '../Pages/Upload/Upload'

const Allroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/upload' element={<Upload/>}/>
      {/* <Route path='/remove' element={<Login/>}/> */}
    </Routes>
  )
}

export default Allroutes
