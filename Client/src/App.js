
import React, { useState } from "react"
import Axios from "axios"
import Park from './components/Park/Park'
import MainForm from './components/MainForm/MainForm'
import { BookmarkIcon } from '@heroicons/react/24/solid'


// import logo from "./logo.svg"
import "./App.css"

function App() {

  const [stateCode, setStateCode] = useState([])
  const [mainInputValue, setMainInputValue] = useState("")
  const [favorites, setFavorites] = useState([])

  const handleMainInputChange = (e) => {
    const newValue = e.target.value
    setMainInputValue(newValue)
  }

  const getPark = (e) => {
    Axios.get(
      `https://developer.nps.gov/api/v1/parks?api_key=FcBVNSTUhHmVDsktfx7MkAgtGyTTnEqpCxMfaU8M&stateCode=${mainInputValue}`
    ).then((response) => {
      if (mainInputValue.trim().length === 0) {
        return
      }

      console.log(response.data)
      setStateCode((prevValue) => {
        return [...prevValue, response.data]
      })
    })
    setMainInputValue("")
    e.preventDefault()
    setStateCode([])
  }

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      getPark()
    }
  }

  const addFavoritePark = (park)=>{
const newFavoriteList = [...favorites, park]
setFavorites(newFavoriteList)
console.log(newFavoriteList)
  }


  return (
    <div className="App">
      <MainForm
        changeInput={handleMainInputChange}
        onAdd={getPark}
        value={mainInputValue}
        pressEnter={handleKeypress}
      />

      <ul className="parks-list flex flex-wrap justify-around">
        {Object.values(stateCode).map((x) => {
          return x.data.map((park) => {
            return (
              <Park
              id={park.id}
                key={park.id}
                icon={ <BookmarkIcon
                 className=" Bookmark-icon h-6 w-6 hover:text-cyan-300 text-gray-500" />}
                addFavPark={()=>addFavoritePark(park)}
                image={park.images[0].url}
                name={park.fullName}
                address={park.addresses[0].line1}
                city={park.addresses[0].city}
                stateCode={park.addresses[0].stateCode}
                postalCode={park.addresses[0].postalCode}
                description={park.description}
              />
            )
          })
        })}
      </ul>
      </div>
  )
  

    
      // <div className="App flex justify-top items-center flex-col">
        
      //     <MainPage />
       
      // </div>
    
  
}

export default App


