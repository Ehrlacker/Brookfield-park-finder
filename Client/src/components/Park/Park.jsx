// import AddFavoriteButton from "../AddFavoriteButton/AddFavoriteButton"

import "./Park.css"

const Park = (props) => {
  return (
    <li
      className="Park flex flex-col m-8 items-center hover:bg-zinc-200"
      id={props.id}
    >
      <img className="park-image" src={props.image} alt="Nationa Park" />

      <div className="park-info-container pl-8 pr-8 pb-8 pt-4">
        <button className="favoriteButton" onClick={props.addFavPark}>
          {props.icon}
        </button>
        <h1 className="park-title mb-1 font-bold sm:mt-8">{props.name}</h1>

        <div className="park-address mt-8 mb-8">
          <p className="font-bold">Location:</p>

          <p>{props.city}</p>
        </div>
        <div>
          <p className="description-title font-bold ">Description:</p>
          <p className="park-description ">{props.description}</p>
          <button className="park-button mt-4">
            <a rel="noreferrer" target="_blank" href={props.details}>
              Details
            </a>
          </button>
        </div>
      </div>
    </li>
  )
}
export default Park

// md:flex-row
// p-8
// justify-center
