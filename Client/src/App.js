// import React, { useState } from "react"
// import Axios from "axios"
// import Park from './components/Park/Park'
// import MainForm from './components/MainForm/MainForm'
// import { BookmarkIcon } from '@heroicons/react/24/solid'
import {Route, Routes} from 'react-router-dom'

import HomePage from "./Pages/HomePage/HomePage"
import Search from './Pages/Search/Search'



const App = () => {
  return (
    <Routes>
    <Route path="/" element={ <HomePage />} />
     <Route path="/Search" element={ <Search />} />
      </Routes>
  )
}
export default App
