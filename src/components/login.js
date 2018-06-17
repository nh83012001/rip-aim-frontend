import React from "react";
import { connect } from 'react-redux'
import * as actions from "../actions/index"
import { Form } from "semantic-ui-react";

import { withRouter, } from "react-router-dom";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.loginUser(this.state, this.props.history)
    this.props.history.push('/profile')
  };

  render() {
    return (
      <div>
      <body class="text-center">
    <form class="form-signin" onSubmit={this.handleSubmit}>
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" onChange={this.handleChange} label="Username" class="form-control" placeholder="Username" required="" autofocus=""></input>
      <label for="inputPassword" class="sr-only">Password</label>
      <input name="password" onChange={this.handleChange} label="Password" type="password" class="form-control" placeholder="Password" required=""></input>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    </form>
</body>
      </div>
    );
  }
}



const mapStateToProps = state => {
  return {
    current_user: state.user
  }
}



export default withRouter(connect(mapStateToProps, actions)(Login));
