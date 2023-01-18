// import AddFavoriteButton from "../AddFavoriteButton/AddFavoriteButton"

import "./Park.css"

const Park = (props) => {
  return (
    <li
      className="Park bg-white w-[250px] transition-transform hover:scale-105 cursor-pointer flex-none flex-col m-8 items-center hover:bg-zinc-200 md:w-[400px] "
      id={props.id}
    >
      <img
        className="park-image h-[300px] w-full object-cover"
        src={props.image}
        alt="Nationa Park"
      />

      <div className="park-info-container relative pl-8 pr-8 pb-8 pt-4">
        <button
          className="favoriteButton w-full text-center"
          onClick={props.addFavPark}
        >
          {props.icon}
        </button>

        <h1 className="park-title mb-1 font-bold sm:mt-8 text-lg whitespace-nowrap overflow-hidden text-ellipsis">
          {props.name}
        </h1>

        <div className="park-address mt-2 mb-2">
          <p className="font-bold">Location:</p>

          <p>{props.city}</p>
        </div>
        <div className="">
          <p className="description-title font-bold">Description:</p>
          <p className="park-description whitespace-nowrap overflow-hidden text-ellipsis">
            {props.description}
          </p>
          <button className="park-button mt-4 border-2 text-base font-bold border-black p-2">
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
