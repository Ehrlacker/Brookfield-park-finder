import { Link } from "react-router-dom"

import MainTitle from "../MainTitle/MainTitle"

const SearchNav = () => {
  return (
    <div className="SearchNav flex items-center justify-between mt-8">
      <ul className="navList flex justify-between align-center">
        <li className="main-nav-item text-white font-bold text-2xl md:text-6xl">
          <Link to="/Search">Find Parks</Link>
        </li>
      </ul>
      <MainTitle />
    </div>
  )
}

export default SearchNav
