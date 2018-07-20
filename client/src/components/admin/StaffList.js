import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Button, Card } from 'semantic-ui-react'
import SingleStaff from './SingleStaff'

const Header = styled.h3`
  font-family: helvetica;
  text-align: center;
  font-weight: 300;
`
const ButtonWrap = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center;
  padding: 20px;
`

class StaffList extends React.Component {

  compare = (a,b) => {
    if (a.index < b.index)
      return -1;
    if (a.index > b.index)
      return 1;
    return 0;
  }

  displayStaff = () => {
    const newArr = this.props.staff.sort(this.compare)
    return newArr.map( (single, index) => {
      return(
        <SingleStaff 
          single={single} 
          index={index} 
          editButton={(single) => this.props.editButton(single)} 
          deleteButton={this.props.deleteButton}
        />
      )
    })
  }

  render(){
    if (this.props.staff.length) {
      return(
        <div
          style={{width: '90%', margin: '0 auto'}}
        >
          <Header>Current Staff Members</Header>
          <ButtonWrap>
            <Button 
              onClick={this.props.createButton} 
              color="blue"
              >
              New Staff Member
            </Button>
          </ButtonWrap>
          <Card.Group>
            {this.displayStaff()}
          </Card.Group>
        </div>
      )
    } else {
      return(
        <div
          style={{
            paddingTop: '100px', 
            width: '90%', 
            margin: '0 auto', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center'
          }}
        >
          No Current Staff
          <Button 
            onClick={this.props.createButton} 
            color="blue"
          >
            Add Staff Member
          </Button>
        </div>
      ) 
    }
  }
}

export default StaffList