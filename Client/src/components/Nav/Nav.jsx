import { Link } from "react-router-dom"
import "./Nav.css"
import MainTitle from "../MainTitle/MainTitle"

const Nav = () => {
  return (
    <div className="Nav flex align-center justify-between  ">
      <ul className="nav-list flex justify-between align-center">
        <li className="main-nav-item text-white">
          <Link to="/Search">Parks</Link>
        </li>
      </ul>
      <MainTitle />
    </div>
  )
}

export default Nav
