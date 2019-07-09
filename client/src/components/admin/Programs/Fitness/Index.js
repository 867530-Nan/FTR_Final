import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import SingleClass from './SingleClass'
import EditClass from './EditClass'
import { Item, Button } from 'semantic-ui-react'
import NewClass from './NewClass'

export default class Index extends React.Component {
  state = { classes: [], show: 1 }

  componentDidMount() {
    this.fetchClasses()
  }

  fetchClasses = () => {
    axios.get('/api/fitness').then(res => this.setState({ classes: res.data, show: 1 }))
  }

  editButton = info => {
    this.setState({ editClass: info, show: 2 })
  }

  deleteButton = e => {
    axios.delete(`/api/fitness/${e.id}`).then(() => this.fetchClasses())
  }

  cancelButton = () => {
    this.setState({ showAll: true })
  }

  displayClasses = () => {
    return this.state.classes.map((single, index) => {
      return (
        <Item.Group
          index={index}
          style={{ borderBottom: '1px solid gray', padding: '30px' }}
        >
          <SingleClass
            single={single}
            editButton={single => this.editButton(single)}
            deleteButton={this.deleteButton}
          />
        </Item.Group>
      )
    })
  }

  render() {
    if (this.state.show === 1) {
      return (
        <div>
          <ButtonWrap>
            <Button onClick={() => this.setState({ show: 3 })} size='huge' color='blue'>
              New Fitness Class
            </Button>
          </ButtonWrap>
          {this.displayClasses()}
        </div>
      )
    } else if (this.state.show === 2) {
      return <EditClass singleClass={this.state.editClass} back={this.fetchClasses} />
    } else if (this.state.show === 3) {
      return <NewClass back={this.fetchClasses} />
    }
  }
}

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`
