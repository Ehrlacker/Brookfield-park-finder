import './MainNav.css'
import { Link } from "react-router-dom";


const MainNav=()=>{
return(
    <ul className="MainNav flex justify-between align-center">
        <li className="main-nav-item text-white"><Link to="/Favorites">Favorites</Link></li>
        <li className="main-nav-item text-white">Visited</li>
 </ul>


)
    
}

export default MainNav


