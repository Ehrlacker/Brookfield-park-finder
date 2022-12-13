// import React, { useState } from "react"
// import Park from "../Park/Park"
// import MainTitle from '../MainTitle/MainTitle'

import "./MainForm.css"
// import Axios from "axios"

const MainForm = (props) => {
 
  return (
    <div className="main-form flex flex-col justify-center items-center ">
   
   
      <form className=" flex flex-col justify-center items-center mt-20">
        <label className="main-label ">Park Finder</label>
        <p className="main-form-description">Great news, you're one step closer to Finding Your next Park Adventure. Just enter your states abbreviation and press search .</p>

        <div className="form-input-and-button-container flex flex-col items-center justify-center  md:flex-row mt-10" maxlength="2">
          <input
            onChange={props.changeInput}
            className="main-input rounded-full text-center"
            placeholder="Enter State Letters"
            value={props.value}
            onKeyPress={props.pressEnter}
            maxlength="2"
          />

          <button className="main-button hidden rounded-full ml-5 md:block " onClick={props.onAdd}>
            Search
          </button>
        </div>
      </form>

      
      </div>
  )
}
export default MainForm
