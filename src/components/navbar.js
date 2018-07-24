import React from 'react';
import LogoutButton from './logout'
import MessagesButton from './message'
import HomeButton from './home'
// import ProfileButton from "./changeprofile"



const Navbar = () => {

    return(

      <div className="navbar">
        <div className="ui inverted segment ui buttons">
          <HomeButton />
          <MessagesButton />
          <LogoutButton />

        </div>
      </div>
  )

}

export default Navbar
