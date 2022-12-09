import './SignInNav.css'
import { Link } from "react-router-dom";

const SignIn=()=>{

    return (
        <ul className= "SignIn sm:hidden md:flex justify-between">
            <li className="SignIn-item text-white"><Link>Sign Up</Link></li>
            <li className="SignIn-item text-white"><Link to="/Login">Log in</Link></li>
        </ul>
    )
}

export default SignIn

//<Link to={user.id}>{user.name}</Link>