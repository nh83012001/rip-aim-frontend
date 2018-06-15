import React from "react";
import { Form } from "semantic-ui-react";
import * as actions from "../actions/index"
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

const url = "http://localhost:3001/api/v1/";
const heroku_url = "https://rip-aim-frontend.herokuapp.com/";

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      firstname: '',
      lastname: ''

    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    const body = this.state;
    fetch(`${url}users`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(res => {
      // console.log('this is what response is for signin',res)
      this.props.fetchingAllUserData(this.props.user_id)
      this.props.history.push('/login')
  })
    ;
  };

  render() {
    return (
      <div>
        <h1>Signup</h1>
        <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            name="firstname"
            onChange={this.handleChange}
            label="First Name"
            type="text"
            placeholder="First Name"
          />
          </Form.Group>
          <Form.Group>
            <Form.Input
              name="lastname"
              onChange={this.handleChange}
              label="Last Name"
              type="text"
              placeholder="Last Name"
            />
            </Form.Group>
          <Form.Group>
            <Form.Input
              name="username"
              onChange={this.handleChange}
              label="Username"
              placeholder="Username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Input
              name="password"
              onChange={this.handleChange}
              label="Password"
              type='password'
              placeholder="Password"
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    current_user: state.users,
  }
}
export default withRouter(connect(mapStateToProps, actions)(Signup))
