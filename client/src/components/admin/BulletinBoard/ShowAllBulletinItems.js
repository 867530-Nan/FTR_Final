import React from 'react'
import SingleNote from './SingleNote'
import styled from 'styled-components'
import { Button, Item } from 'semantic-ui-react'

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

const StyledDiv = styled.div`
  flex-direction: column: 
`

const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  border: 1px black solid;
  border-radius: 5px;
  margin: 3px 0;
  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
`

class ShowAllBulletinItems extends React.Component {
  state = { bulletins: [], create: false }

  displayBulletin = () => {
    return this.props.bulletins.map((single, index) => {
      return (
        <div style={{ display: 'flex', flexDirection: 'center', alignItems: 'center' }}>
          <div>
            <h1 style={{ alignSelf: 'center' }}>{index + 1}</h1>
          </div>
          <Item.Group style={{ borderBottom: '1px solid gray', padding: '30px' }}>
            <SingleNote
              single={single}
              index={index}
              editButton={single => this.props.editButton(single)}
              deleteButton={this.props.deleteButton}
            />
          </Item.Group>
          <StyledDiv>
            <IconDiv
              onClick={() => this.props.handleMoveUp(single)}
              style={{ height: '30px', width: '30px' }}
            >
              &#8593;
            </IconDiv>
            <IconDiv
              onClick={() => this.props.handleMoveDown(single)}
              style={{ height: '30px', width: '30px' }}
            >
              &#8595;
            </IconDiv>
          </StyledDiv>
        </div>
      )
    })
  }

  render() {
    if (this.props.bulletins.length) {
      return (
        <div style={{ width: '90%', margin: '0 auto' }}>
          <ButtonWrap>
            <Button onClick={this.props.createButton} color='blue' size='huge'>
              Create New Bulletin Item
            </Button>
          </ButtonWrap>
          {this.displayBulletin()}
        </div>
      )
    } else {
      return (
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
          <Button onClick={this.props.createButton} color='blue'>
            Create New Bulletin Item
          </Button>
        </div>
      )
    }
  }
}

export default ShowAllBulletinItems
