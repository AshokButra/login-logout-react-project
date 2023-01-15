import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  loginFun = () => {
    this.setState({
      isLoggedIn: true,
    })
  }

  logoutFun = () => {
    this.setState({
      isLoggedIn: false,
    })
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <div className="card">
          <Message isLogin={isLoggedIn} />
          {isLoggedIn ? (
            <Logout logoutFun={this.logoutFun} />
          ) : (
            <Login loginFun={this.loginFun} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
