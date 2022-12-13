
import { Link } from "react-router-dom"

import React from "react"
import "./MainPageBackground.css"
import Parkpic from "../../Assets/Videos/Park-pic.mp4"

const MainPageBackground = () => {
  return (
    <div className="MainPageBackground">
      
      <video
        className="main-video"
        type="video/mp4"
        src={Parkpic}
        autoPlay
        muted
        loop
      />
    <div className="overlay"></div>
     
      <div className="MainPageBackground-text">
        <p className="find">Find Your Next Adventure</p>
        <p className="here"><Link to="/Search">HERE</Link></p>
      </div>
    </div>
  )
}

export default MainPageBackground
