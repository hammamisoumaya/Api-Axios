import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
    <div>
        <ul>
  <li className="active"><Link to="/"> Home </Link></li>
  <li><Link to="/users"> List Users</Link></li>
  
</ul>
    </div>
  )
}

export default NavBar