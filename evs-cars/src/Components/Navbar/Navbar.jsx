import React from 'react'
import  "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="navlogo">
        Evora
      </div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>Feautres</li>
         <li>About</li>
         <li className='nav-contact'>Contact</li>

      </ul>
    </div>
  )
}

export default Navbar