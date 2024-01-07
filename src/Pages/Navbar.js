import { NavLink, Outlet } from 'react-router-dom'
import logo from '../images/logo.png'
import './navbar.css'

function Navbar()
{
    return(
        <>
        <div className='navbar'>
            <ul className='navbar-ul'>
                <li><NavLink to='/home'>Home</NavLink></li>
                <li><NavLink to='/about'>About Me</NavLink></li>
                <li><NavLink to='/project'>Projects</NavLink></li>
                <li><NavLink to='/skills'>Skills</NavLink></li>
            </ul>
            <img src={logo}/>
        </div>
        <Outlet/>
        </>
    )
}

export default Navbar