import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Button, Card } from 'semantic-ui-react'
import SingleBoardMember from './SingleBoardMember'

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

class BoardList extends React.Component {

  compare = (a,b) => {
    if (a.index < b.index)
      return -1;
    if (a.index > b.index)
      return 1;
    return 0;
  }

  displayBoard = () => {
    const newArr = this.props.Board.sort(this.compare)
    return newArr.map( (single, index) => {
      return(
        <SingleBoardMember 
          single={single} 
          index={index} 
          editButton={(single) => this.props.editButton(single)} 
          deleteButton={this.props.deleteButton}
        />
      )
    })
  }

  render(){
    if (this.props.Board.length) {
      return(
        <div
          style={{width: '90%', margin: '0 auto'}}
        >
          <ButtonWrap>
            <Button 
              size="huge"
              onClick={this.props.createButton} 
              color="blue"
              >
              New Board Member
            </Button>
          </ButtonWrap>
          <Card.Group>
            {this.displayBoard()}
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
          No Current Board
          <Button 
            onClick={this.props.createButton} 
            color="blue"
          >
            Add Board Member
          </Button>
        </div>
      ) 
    }
  }
}

export default BoardList