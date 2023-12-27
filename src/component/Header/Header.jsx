import React from 'react'
import './Header.css'
import { SearchRounded } from '@mui/icons-material'

const Header = () => {
  return (
    <>
        <div className="header-main">
            <div className="header-icon">
                <h1>Travel Advisor</h1>
            </div>
            <div className="header-search">
                <h3>Explore new places</h3>
                <div className="search-bar">
                    <input type="text" />
                    <SearchRounded/>
                </div>
            </div>
            
        </div>
    </>
  )
}

export default Header