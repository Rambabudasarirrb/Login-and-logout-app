import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {isHome: true}

  userProfile = () => {
    this.setState(prevState => ({isHome: !prevState.isHome}))
  }

  render() {
    const {isHome} = this.state
    const buttonText = isHome ? 'Login' : 'Logout'
    const Text = isHome ? 'Please Login' : 'Welcome User'
    return (
      <div className="app-container">
        <div className="card">
          <h1 className="heading">{Text}</h1>
          <button type="button" className="home-btn" onClick={this.userProfile}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default Home
