import React from 'react'
import SingleNote from './SingleNote'
import styled from 'styled-components'
import { Button, Table } from 'semantic-ui-react'

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

class ShowAllBulletinItems extends React.Component {
  state = { bulletins: [], create: false }

  displayBulletin = () => {
    return this.props.bulletins.map( (single, index) => {
      return(
        <div
          style={{display: 'flex', flexDirection: 'center', alignItems: 'center'}}
        >
          <div>
            <h1 style={{alignSelf: 'center'}}>{index+1}</h1>
          </div>
          <SingleNote single={single} index={index} editButton={(single) => this.props.editButton(single)} deleteButton={this.props.deleteButton}/>
        </div>
      )
    })
  }

  render(){
    if (this.props.bulletins.length) {
      return(
        <div
          style={{width: '90%', margin: '0 auto'}}
        >
          <ButtonWrap>
            <Button 
              onClick={this.props.createButton} 
              color="blue"
              size="huge"
            >
              Create New Bulletin Item
            </Button>
          </ButtonWrap>
          { this.displayBulletin() }
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
          No Bulletin Items
          <Button 
            onClick={this.props.createButton} 
            color="blue"
          >
            Create New Bulletin Item
          </Button>
        </div>
      ) 
    }
  }
}

export default ShowAllBulletinItems