import React from 'react'
import Login from './Login'
import AdminConsole from './AdminConsole'

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
    if (this.state.loggedIn) {
      return <AdminConsole />
    } else {
      return(
        <Login 
          handleChange={this.handleChange} 
          buttonDisable={this.buttonDisable} 
          checkInputs={this.checkInputs}
        />
      )
    }
  }
}

export default Index