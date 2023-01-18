import React, { useState, useRef, useEffect } from "react"
import Axios from "axios"
import Park from "../../components/Park/Park"
import MainForm from "../../components/MainForm/MainForm"
import { BookmarkIcon } from "@heroicons/react/24/solid"
import { XCircleIcon } from "@heroicons/react/24/solid"
import { ChevronLeftIcon } from "@heroicons/react/24/solid"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import SearchNav from "../../components/SearchNav/SearchNav"
import Footer from "../../components/Footer/Footer"
import "./Search.css"
import useLocalStorage from "../../hooks/useLocalStorage"

function Search() {
  const [parkSearch, setParkSearch] = useState([])
  const [mainInputValue, setMainInputValue] = useState("")
  const [favorites, setFavorites] = useLocalStorage("favorites", [])

  const handleMainInputChange = (e) => {
    const newValue = e.target.value
    setMainInputValue(newValue)
  }

  useEffect(() => {
    Axios.get(
      "https://developer.nps.gov/api/v1/parks?api_key=FcBVNSTUhHmVDsktfx7MkAgtGyTTnEqpCxMfaU8M&limit=10"
    ).then((res) => {
      setParkSearch(res.data.data)
    })
  }, [])

  const getParks = (e) => {
    Axios.get(
      `https://developer.nps.gov/api/v1/parks?api_key=FcBVNSTUhHmVDsktfx7MkAgtGyTTnEqpCxMfaU8M&stateCode=${mainInputValue}`
    ).then((response) => {
      if (mainInputValue.trim().length < 2) {
        alert("Please enter valid input")
      }
      setParkSearch(response.data.data)
    })
    setMainInputValue("")
    e.preventDefault()
    setParkSearch([])
  }

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      getParks()
    }
  }

  const addFavoritePark = (park) => {
    const alreadyExists = favorites.some(
      (favorite) => favorite["id"] === park.id
    )
    if (alreadyExists === false) {
      const newFavoritesList = [...favorites, park]
      setFavorites(newFavoritesList)
    } else {
      return
    }
  }

  const removeFavoritePark = (park) => {
    const newFavoritesList = favorites.filter((favorite) => {
      return favorite.id !== park.id
    })
    setFavorites(newFavoritesList)
  }

  //Chevron Icon scroll
  const ref = useRef(null)
  const ref2 = useRef(null)

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset
  }
  const scroll2 = (scrollOffset) => {
    ref2.current.scrollLeft += scrollOffset
  }

  return (
    <div className="Search w-screen h-full block bg-no-repeat bg-cover">
      <SearchNav />
      <MainForm
        changeInput={handleMainInputChange}
        onAdd={getParks}
        value={mainInputValue}
        pressEnter={handleKeypress}
      />
      <div>
        <h1 className="park-list-title mt-32">Featured Parks</h1>
        <div className="flex w-full h-auto">
          <ChevronLeftIcon
            onClick={() => scroll(-300)}
            className="w-16 text-white cursor-pointer "
          />
          <ul
            className="parks-list w-full h-full flex flex-no-wrap overflow-x-scroll scrolling-touch scroll  scroll-smooth items-start mb-8"
            ref={ref}
          >
            {parkSearch.map((park) => {
              return (
                <Park
                  id={park.id}
                  key={park.id}
                  icon={
                    <BookmarkIcon className="Bookmark-icon h-6 w-6 hover:text-green-500 text-gray-500 text-center" />
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
            })}
          </ul>
          <ChevronRightIcon
            onClick={() => scroll(300)}
            className="w-16 text-white cursor-pointer"
          />
        </div>

        <div>
          <h1 className="park-list-title">Favorites</h1>

          <div className="flex w-full h-auto">
            <ChevronLeftIcon
              onClick={() => scroll2(-300)}
              className="w-16 text-white cursor-pointer "
            />
            <ul
              ref={ref2}
              className="parks-list w-full h-full flex flex-no-wrap overflow-x-scroll scrolling-touch scroll  scroll-smooth items-start mb-8"
            >
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
            <ChevronRightIcon
              onClick={() => scroll2(300)}
              className="w-16 text-white cursor-pointer"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Search
