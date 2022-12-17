import React from "react"
import { Link } from "react-router-dom"
import "./HomePageDirections.css"

const HomePageDirections = (props) => {
  return (
    <div className="HomePageDirections">
      <div className="img-text-container">
        <img
          className="home-directions-img  w-full md:-w-50%"
          alt="A park"
          src={props.image}
        />
        <div className="home-page-directions-text md:w-full h-full">
          <h1 className="directions-h1">{props.title}</h1>
          <p className="directions-p">{props.description}</p>
          <button className="home-directions-button">
            <Link to="/Search">Start here</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePageDirections
