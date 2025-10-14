import React from 'react'
import ".//navbar.scss"
//rafce

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src="logo.svg" alt="" />
            <span>Oracle</span>
        </div>
        <div className='icons'>
            <img src="/search.svg" alt="" className="icon" />{/* img.icon */}
            <img src="/app.svg" alt="" className="icon" />
            <img src="/expand.svg" alt="" className="icon" />
            <div className="notification"></div>{/*.notification*/}
            <div className="user"></div>
            <img src="/settings.svg" alt="" className="icon" />
        </div>
    </div>
  )
}

export default Navbar