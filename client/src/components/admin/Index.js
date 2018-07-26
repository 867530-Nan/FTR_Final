import React from 'react'
import Login from './Login'
import AdminNavigationTabs from './AdminNavigationTabs';

class Index extends React.Component {

  state = { email: "", password: "", loggedIn: true }

  handleChange = e => {
    const {id, value} = e.target;
    this.setState({ [id]: value })
  }

  buttonDisable = () => {
    if (this.state.email === "contact@fit2recover.org" && this.state.password === "adminAEIOU2468") {
      return false
    } else {
      return true
    }
  }

  checkInputs = () => {
    this.setState({ loggedIn: true })
  }

  render(){
      return (
      <div
        style={{paddingTop: '100px'}}
      >
        <AdminNavigationTabs />
      </div>
      )
  }
}

export default Index