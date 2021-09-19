import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCall from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import Notifications from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar'

import './header.css'

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <MenuIcon />
        <img
          className="header-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2880px-YouTube_Logo_2017.svg.png"
          alt="logo"
        />
      </div>

      <div className="header-input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="input-button" />
      </div>

      <div className="header-icons">
        <VideoCall className="header-icon" />
        <AppsIcon className="header-icon" />
        <Notifications className="header-icon" />
        <Avatar
          alt="user avatar"
          src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
        />
      </div>
    </div>
  )
}

export default Header
