import React, { useState } from "react"
import Axios from "axios"
import Park from "../../components/Park/Park"
import MainForm from "../../components/MainForm/MainForm"
import { BookmarkIcon } from "@heroicons/react/24/solid"
import { XCircleIcon } from "@heroicons/react/24/solid"
import MainNav from "../../components/MainNav/MainNav"
import "./Search.css"
import useLocalStorage from "../../hooks/useLocalStorage"

function Search() {
  const [stateCode, setStateCode] = useState([])
  const [mainInputValue, setMainInputValue] = useState("")
  const [favorites, setFavorites] = useLocalStorage("favorites", [])

  const handleMainInputChange = (e) => {
    const newValue = e.target.value
    setMainInputValue(newValue)
   
  }

  const getParks = (e) => {
    Axios.get(
      `https://developer.nps.gov/api/v1/parks?api_key=FcBVNSTUhHmVDsktfx7MkAgtGyTTnEqpCxMfaU8M&stateCode=${mainInputValue}`
    ).then((response) => {
      if (
        mainInputValue.trim().length < 2 ||
        mainInputValue.trim().length > 2
      ) {
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
      getParks()
    }
  }

  const addFavoritePark = (park) => {
    const newFavoritesList = [...favorites, park]
    setFavorites(newFavoritesList)
    
  }

  const removeFavoritePark = (park) => {
    const newFavoritesList = favorites.filter((favorite) => {
      return favorite.id !== park.id
    })
    setFavorites(newFavoritesList)
  }

  return (
    <div className="Search">
      <MainNav />
      <MainForm
        changeInput={handleMainInputChange}
        onAdd={getParks}
        value={mainInputValue}
        pressEnter={handleKeypress}
      />
      <div>
        <h1 className="park-list-title mt-32">Parks</h1>
        <ul className="parks-list flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8">
          {Object.values(stateCode).map((x) => {
            return x.data.map((park) => {
              return (
                <Park
                  id={park.id}
                  key={park.id}
                  icon={
                    <BookmarkIcon className=" Bookmark-icon h-6 w-6 hover:text-green-500 text-gray-500" />
                  }
                  addFavPark={() => addFavoritePark(park)}
                  image={park.images[0].url}
                  name={park.fullName}
                  address={park.addresses[0].line1}
                  city={park.addresses[0].city}
                  stateCode={park.addresses[0].stateCode}
                  postalCode={park.addresses[0].postalCode}
                  description={park.description}
                  details={park.url}
                />
              )
            })
          })}
        </ul>

        <div>
          <h1 className="park-list-title">Favorites</h1>
          <ul className="parks-list flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8">
            {favorites.map((park) => {
              return (
                <Park
                  id={park.id}
                  key={park.id}
                  icon={
                    <XCircleIcon className=" Bookmark-icon h-6 w-6 hover:text-red-500 text-gray-500" />
                  }
                  addFavPark={() => removeFavoritePark(park)}
                  image={park.images[0].url}
                  name={park.fullName}
                  address={park.addresses[0].line1}
                  city={park.addresses[0].city}
                  stateCode={park.addresses[0].stateCode}
                  postalCode={park.addresses[0].postalCode}
                  description={park.description}
                  details={park.url}
                />
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Search

// import React, { useState, useEffect } from "react"
//const getParkRequest =()=>{
//       Axios.get(
//         `https://developer.nps.gov/api/v1/parks?api_key=FcBVNSTUhHmVDsktfx7MkAgtGyTTnEqpCxMfaU8M&`).then((response)=>{
// setNewStateCode((prevValue)=>{
//   return[...prevValue, response.data]
// })
// console.log(response.data)
//         })
//     }

//     useEffect(()=>{
//       getParkRequest();

//     }, [])

// useEffect(()=>{
//   const parkFavorites=JSON.parse(localStorage.getItem('react-park-app-favorites'));
//   setFavorites(parkFavorites)
// }, [])

// const saveToLocalStorage=(items)=>{
//   localStorage.setItem('react-park-app-favorites', JSON.stringify(items))
//     }

// const handleKeypress = (e) => {
//   if (e.keyCode === 13) {
//     getParks()
//   }
// }

// const addFavoritePark = (park) => {
//   const newFavoritesList = [...favorites, park]
//   setFavorites(newFavoritesList)
//   console.log(newFavoritesList)
//   // saveToLocalStorage(newFavoritesList)
// }

// const removeFavoritePark = (park) => {
//   const newFavoritesList = favorites.filter((favorite) => {
//     return favorite.id !== park.id
//   })
//   setFavorites(newFavoritesList)
//   // saveToLocalStorage(newFavoritesList)
// }
