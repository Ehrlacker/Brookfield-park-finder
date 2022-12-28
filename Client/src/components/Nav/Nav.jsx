import { Link } from "react-router-dom"
import "./Nav.css"
import MainTitle from "../MainTitle/MainTitle"

const Nav = () => {
  return (
    <div className="Nav flex items-center justify-between  ">
      <ul className="nav-list flex justify-between align-center">
        <li className="main-nav-item text-white font-bold text-xl md:text-6xl">
          <Link to="/Search">Find Parks</Link>
        </li>
      </ul>
      <MainTitle />
    </div>
  )
}

export default Nav
