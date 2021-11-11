import {NavLink} from 'react-router-dom'
import "./navStyles.css"
import logo from "./assets/netflixLogo.png"
import search from "./assets/search.svg"
import bell from "./assets/bell.svg"
import profile from"./assets/profile.svg"

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
                
            <div id="right-nav">
                <input className="right-nav-item" type="image" src={search} alt="search bar"/>
                <input className="right-nav-item" type="image" src={bell} alt="notifications"/>
                <input className="right-nav-item" type="image" src={profile} alt="profiles icon"/>
            </div>
        </nav>

    )
}