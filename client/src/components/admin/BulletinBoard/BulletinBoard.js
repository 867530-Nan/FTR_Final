import React from 'react'
import axios from 'axios'
import EditBulletinItem from './EditBulletinItem'
import ShowAllBulletinItems from './ShowAllBulletinItems'
import CreateBulletinItem from './CreateBulletinItem'

class BulletinBoard extends React.Component {
  state = { bulletins: [], showAll: true, editBulletin: undefined }

  componentDidMount() {
    this.fetchBulletins()
  }

  fetchBulletins = () => {
    axios
      .get('/api/events/')
      .then(res => this.setState({ bulletins: res.data, showAll: true }))
      .catch(res => console.log(res))
  }

  editButton = info => {
    this.setState({ editBulletin: info, showAll: false, create: false })
  }

  deleteButton = note => {
    axios.delete(`/api/events/${note.id}`)
    let bulletins = this.state.bulletins
    const newArr = bulletins.filter(single => single.id !== note.id)
    this.setState({ bulletins: newArr })
  }

  cancelButton = () => {
    this.setState({ showAll: true })
  }

  render() {
    if (this.state.showAll) {
      return (
        <ShowAllBulletinItems
          editButton={this.editButton}
          bulletins={this.state.bulletins}
          deleteButton={this.deleteButton}
          createButton={() => this.setState({ create: true, showAll: false })}
        />
      )
    } else if (this.state.create) {
      return (
        <CreateBulletinItem back={this.fetchBulletins} cancelButton={this.cancelButton} />
      )
    } else {
      return (
        <EditBulletinItem
          bulletin={this.state.editBulletin}
          back={this.fetchBulletins}
          cancelButton={this.cancelButton}
        />
      )
    }
  }
}

export default BulletinBoard
