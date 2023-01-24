import { Link } from "react-router-dom"
import "./Nav.css"
import MainTitle from "../MainTitle/MainTitle"

const Nav = () => {
  return (
    <div className="Nav flex items-center justify-between w-full absolute top-0 z-50 mt-5 max-h-[8rem]">
      <ul className="nav-list flex justify-between align-center max-w-96">
        <li className="main-nav-item text-white font-bold text-xl md:text-6xl">
          <Link to="/Search">Find Parks</Link>
        </li>
      </ul>
      <MainTitle />
    </div>
  )
}

export default Nav
