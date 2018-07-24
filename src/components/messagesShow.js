import React from 'react';
import * as actions from "../actions/index"
import { connect } from 'react-redux'
import { withRouter, NavLink } from "react-router-dom"
import { Card } from 'semantic-ui-react'


const Messages = (props) => {

const items = []

// let itemsVariable = props.messages ? (
//         props.messages.map((recipe, index) =>{
//           items.push({
//             // header: `${messages.name}`,
//             // description: `${messages.name}`,
//             // meta: `From - $${messages.name} `,
//             // href: `myrecipes/${messages.name}`
//           })
//           })
//   ) : null

return(
  <div>
  Hi!!!
  </div>
)

}


const mapStateToProps = state => {
  // console.log('state.user in map state',state)
  return {
    messages: state.users.current_user.messages
  }
}
  //

export default withRouter(connect(mapStateToProps, actions)(Messages))
