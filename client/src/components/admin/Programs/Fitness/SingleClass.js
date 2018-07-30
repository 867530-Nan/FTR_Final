import React from 'react'
import styled from 'styled-components'
import { Button, Item, Image } from 'semantic-ui-react'

export default class SingleClass extends React.Component {

  render() {
    const { single } = this.props
    return(
      <ItemWrap>
        <Image 
          src={single.image}
          size="small"
          style={{height: '325px', width: '435px', margin: '0 20px'}}
        />
        <TextButtonsWrap>
          <Item
            style={{height: '75%', display: 'flex', flexDirection: 'column', justifyContent: 'space-around'}}
          >
              <Item.Header as='a'>
                <span style={{fontWeight: '900'}}>Title:  </span>
                 {single.title}
              </Item.Header>
              <Item.Meta>
                <span style={{fontWeight: '900'}}>Sub Title:  </span>
                 {single.sub_title || 'NO SUB TITLE ENTERED'}
              </Item.Meta>
              <Item.Meta>
                <span style={{fontWeight: '900'}}>Description:  </span>
                 {single.body}
              </Item.Meta>
          </Item>
          <ButtonWrap>
            <Button 
              style={{width: '100%'}}
              onClick={() => this.props.editButton(this.props.single)} 
              color="teal"
            >
              Edit
            </Button>
            <Button 
              style={{width: '100%'}}
              onClick={() => this.props.deleteButton(this.props.single)} 
              color="orange"
            >
              Delete
            </Button>
          </ButtonWrap>
        </TextButtonsWrap>
      </ItemWrap>
    )
  }
}

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

const ItemWrap = styled.div`
  display: flex;
  flex-direction: row;
`

const TextButtonsWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`