import React from 'react';
import LogoutButton from './logout'
// import ProfileButton from "./changeprofile"



const Navbar = () => {

    return(

      <div className="navbar">
        <div className="ui inverted segment ui buttons">

        
          <LogoutButton />

        </div>
      </div>
  )

}

export default Navbar
