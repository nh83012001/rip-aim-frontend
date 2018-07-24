import React from 'react';
import * as actions from "../actions/index"
import { connect } from 'react-redux'
import { withRouter,  NavLink } from "react-router-dom";

const MessagesButton = (props) => {
 // console.log(props)
    return(
      <div>
      <NavLink to='/messages'>
      <button className='ui inverted red button opacity clickable'>
      Messages
      </button>
      </NavLink>
      </div>

  )

}

export default withRouter(connect(null, actions)(MessagesButton))
