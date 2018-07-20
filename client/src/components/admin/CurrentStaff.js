import React from 'react'
import StaffList from './StaffList'
import NewStaff from './NewStaff'
import EditStaff from './EditStaff'
import axios from 'axios'

class CurrentStaff extends React.Component {

  state = { staff: [], showAll: true, editStaff: undefined }

  componentDidMount(){
    this.fetchStaff()
  }

  fetchStaff = () => {
    axios.get('/api/employees/')
    .then( res => this.setState({ staff: res.data, showAll: true }))
    .catch( res => console.log(res))
  }

  editButton = info => {
    this.setState({ editStaff: info, showAll: false, create: false  })
  }

  deleteButton = (staff) => {
    axios.delete(`/api/employees/${staff.id}`)
    const newArr = this.state.staff.filter(single => single.id !== staff.id)
    this.setState({ staff: newArr })
  }

  cancelButton = () => {
    this.setState({ showAll: true })
  }

  render(){
    if (this.state.showAll){
      return <StaffList 
              editButton={this.editButton} 
              staff={this.state.staff} 
              deleteButton={this.deleteButton}
              createButton={() => this.setState({ create: true, showAll: false })}
            />
    } else if (this.state.create){
      return(
        <NewStaff 
          back={this.fetchStaff} 
          cancelButton={this.cancelButton}
        />
      )
    } else {
      return(
        <EditStaff 
          staff={this.state.editStaff} 
          back={this.fetchStaff} 
          cancelButton={this.cancelButton} 
        />
      )
    }
  }
}

export default CurrentStaff