import React from "react"
import { Link } from "react-router-dom"
import "./HomePageDirections.css"

const HomePageDirections = (props) => {
  return (
    <div className="homePageDirections w-full z-3 mb-20">
      <div className="ImgTextContainer flex justify-center items-center flex-col w-full">
        <img
          className="homeDirectionsImg  max-w-[30rem] max-h-[50rem]"
          alt="A park"
          src={props.image}
        />
        <div className="homePageDirectionsText md:w-full h-full text-white flex items-center justify-center flex-col z-1 p-8 max-w-[30rem] max-h-[20rem]">
          <h1 className="directionsTitle text-center max-w-[30] max-h-[25] text-4xl">
            {props.title}
          </h1>
          <p className="directionsParagrph text-3xl text-center max-w-[30] max-h-[25]">
            {props.description}
          </p>
          <button className="home-directions-button text-xl mt-6 rounded-3xl border-solid border-2 border-white px-2">
            <Link to="/Search">Start here</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomePageDirections
