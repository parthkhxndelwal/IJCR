import React from 'react'

export default function Navbar() {
  return (
    <div className="Navbar">
        <img draggable={false} src="https://ijcres.in/static/images/IJCR.png" alt="IJCR_Logo" className='IJCRNavLogo'/>
        <div className="NavSideSection">
            <ul>
                <li><a href="#">Journals & Books</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">My Account</a></li>
                <li><a href="#">Sign in</a></li>
            </ul>
        </div>
    </div>
  )
}
