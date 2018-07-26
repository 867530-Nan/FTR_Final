import React from 'react'
import BoardList from './BoardList'
import NewBoardMember from './NewBoardMember'
import EditBoardMember from './EditBoardMember'
import axios from 'axios'

class BoardMembers extends React.Component {

  state = { Board: [], showAll: true, editBoardMember: undefined }

  componentDidMount(){
    this.fetchBoard()
  }

  fetchBoard = () => {
    axios.get('/api/boards')
    .then( res => this.setState({ Board: res.data, showAll: true }))
    .catch( res => console.log(res))
  }

  editButton = info => {
    this.setState({ editBoardMember: info, showAll: false, create: false  })
  }

  deleteButton = (Board) => {
    axios.delete(`/api/boards${Board.id}`)
    const newArr = this.state.Board.filter(single => single.id !== Board.id)
    this.setState({ Board: newArr })
  }

  cancelButton = () => {
    this.setState({ showAll: true })
  }

  render(){
    if (this.state.showAll){
      return <BoardList 
              editButton={this.editButton} 
              Board={this.state.Board} 
              deleteButton={this.deleteButton}
              createButton={() => this.setState({ create: true, showAll: false })}
            />
    } else if (this.state.create){
      return(
        <NewBoardMember 
          back={this.fetchBoard} 
          cancelButton={this.cancelButton}
        />
      )
    } else {
      return(
        <EditBoardMember 
          Board={this.state.editBoardMember} 
          back={this.fetchBoard} 
          cancelButton={this.cancelButton} 
        />
      )
    }
  }
}

export default BoardMembers;