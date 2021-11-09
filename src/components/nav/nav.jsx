import {NavLink} from 'react-router-dom'
import "./navStyles.css"
import logo from "./netflixLogo.png"

export const NavBar = () =>{
    return(
        <nav className="nav-bar">
            <img id="logo" src={logo} alt="Netflix logo" />
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink exact={true} to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact={true} to="/">TV Shows</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact={true} to="/">Movies</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink exact={true} to="/">New &amp; Popular</NavLink>
                </li>
            </ul>
                <NavLink id="profiles" exact={true} to="/">Profiles</NavLink>
        </nav>

    )
}