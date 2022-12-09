import React from 'react'

 const AddFavoriteButton = (props) => {
  return (
    <button className="favoriteButton" onClick={props.addFavPark}>{props.icon}</button>
  )
}

export default AddFavoriteButton

