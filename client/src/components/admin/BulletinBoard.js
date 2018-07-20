import React from 'react'
import axios from 'axios'
import EditBulletinItem from './EditBulletinItem'
import ShowAllBulletinItems from './ShowAllBulletinItems'
import CreateBulletinItem from './CreateBulletinItem';


class BulletinBoard extends React.Component {
  state = { notes: [], showAll: true, editNote: undefined }

  componentDidMount(){
    this.fetchNotes()
  }

  fetchNotes = () => {
    axios.get('/api/notes/')
    .then( res => this.setState({ notes: res.data, showAll: true }))
    .catch( res => console.log(res))
  }

  editButton = info => {
    this.setState({ editNote: info, showAll: false, create: false  })
  }

  deleteButton = (note) => {
    axios.delete(`/api/notes/${note.id}`)
    let notes = this.state.notes
    const newArr = notes.filter(single => single.id !== note.id)
    this.setState({ notes: newArr })
  }

  cancelButton = () => {
    this.setState({ showAll: true })
  }

  render(){
    if (this.state.showAll){
      return <ShowAllBulletinItems 
              editButton={this.editButton} 
              notes={this.state.notes} 
              deleteButton={this.deleteButton}
              createButton={() => this.setState({ create: true, showAll: false })}
            />
    } else if (this.state.create){
      return(
        <CreateBulletinItem 
          back={this.fetchNotes} 
          cancelButton={this.cancelButton}
        />
      )
    } else {
      return(
        <EditBulletinItem 
          note={this.state.editNote} 
          back={this.fetchNotes} 
          cancelButton={this.cancelButton} 
        />
      )
    }
  }
}

export default BulletinBoard