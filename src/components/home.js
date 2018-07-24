import React from 'react';
import * as actions from "../actions/index"
import { connect } from 'react-redux'
import { withRouter,  NavLink } from "react-router-dom";
const HomeButton = (props) => {
 // console.log(props)
    return(
      <div>
      <NavLink to='/home'>
      <button className='ui inverted red button opacity clickable'>
      Home
      </button>
      </NavLink>
      </div>

  )

}

export default withRouter(connect(null, actions)(HomeButton))
