import React from 'react';
import './App.css';
import Signup from './components/signup'
import Login from './components/login'
import LoginBar from './components/loginNavbar'
import Profile from './components/profile'
import Messages from './components/messagesShow'
import {
  connect
} from 'react-redux'
import * as actions from "./actions/index"
import {
  withRouter,
  Route
} from "react-router-dom";
import Navbar from './components/navbar'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.authCheck()
  }

  authCheck = () => {
    if (localStorage.token) {
      this.props.fetchingUser()
      this.props.fetchingUsers()
    } else {
      this.backToLogin()
    }
  }

  signup = () => {
    this.props.history.push("/signup");
  };

  backToLogin = () => {
    this.props.history.push("/login");
  };


  render() {
    // console.log("APP PROPS", this.props)
    return ( <
      div className = "navbar" > {
        localStorage.token ? ( <
          Navbar / > ) : ( <
          LoginBar handleLogin = {
            this.handleLogin
          }
          location = {
            this.props.location.pathname
          }
          signup = {
            this.signup
          }
          backToLogin = {
            this.backToLogin
          }
          />
        )
      }

      <
      div className = "container-class" >

      <
      Route exact path = "/signup"
      component = {
        Signup
      }
      /> <
      Route exact path = "/login"
      render = {
        () => < Login / >
      }
      />

      <
      Route exact path = "/messages"
      render = {
        () => < Messages / >
      }
      />


      <
      Route exact path = "/profile"
      render = {
        () => < Profile / >
      }
      />

      <
      /div> < /
      div >
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users,
    current_user: state.users
  }
}



export default withRouter(connect(mapStateToProps, actions)(App));
