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
  state = { notes: [], create: false }

  displayBulletin = () => {
    return this.props.notes.map( (single, index) => {
      return(
        <SingleNote single={single} index={index} editButton={(single) => this.props.editButton(single)} deleteButton={this.props.deleteButton}/>
      )
    })
  }

  render(){
    if (this.props.notes.length) {
      return(
        <div
          style={{paddingTop: '100px', width: '90%', margin: '0 auto'}}
        >
          <Header>Bulletin Board Items</Header>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell
                    style={{verticalAlign: 'middle'}}
                  >
                    Title
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    style={{verticalAlign: 'middle'}}
                  >
                    Message
                  </Table.HeaderCell>
                  <Table.HeaderCell
                    style={{verticalAlign: 'middle'}}
                  >
                    Date
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {this.displayBulletin()}
              </Table.Body>
            </Table>
            <ButtonWrap>
              <Button 
                onClick={this.props.createButton} 
                color="blue"
              >
                Create New Bulletin Item
              </Button>
            </ButtonWrap>
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