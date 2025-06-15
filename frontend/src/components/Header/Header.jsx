import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Delicious, affordable meals delivered fast—perfect for busy bachelors and students.</p>
            <a href="#menu">
              <button>View Menu</button>
            </a>
        </div>
    </div>
  )
}

export default Header