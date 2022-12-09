
import './MainTitle.css'
import { Link } from "react-router-dom";

const MainTitle=()=>{
    return (
        <h1 className="text-3xl font-bold main-title mt-20 mb-20 text-white">
         <Link to="/">All Parks</Link>
        
      </h1>
    )
}
export default MainTitle