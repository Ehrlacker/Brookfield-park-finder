import { Link } from "react-router-dom"
import "./MainTitle.css"

const MainTitle = () => {
  return (
    <h1 className="main-title text-xl flex items-center md:text-6xl font-bold main-title  mr-8 p-0  ">
      <Link to="/">Brookfield</Link>
    </h1>
  )
}
export default MainTitle
