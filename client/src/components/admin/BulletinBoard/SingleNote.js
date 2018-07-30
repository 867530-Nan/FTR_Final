import React from 'react'
import styled from 'styled-components'
import { Button, Item } from 'semantic-ui-react'
import moment from 'moment';

const ButtonWrap = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
`


class SingleNote extends React.Component {

  configureTime = info => {
    const dateSplit = info.split("T")
    const date = dateSplit[0]
    const time = dateSplit[1].split(".")
    const splitTime = time[0].split(":")
    const finalTime = splitTime[0]+":"+splitTime[1]
    const finalDate = moment(date + " " + finalTime).format("dddd, MMMM Do YYYY, h:mma")
    return(
        finalDate
    )
  }
  
  render() {
    const { single, index } = this.props
    return(
      <div>
        <Item>
          <Item.Content>
            <Item.Header as='a'>{single.title}</Item.Header>
            <Item.Meta>{single.date !== null && single.date !== undefined && this.configureTime(single.date)}</Item.Meta>
            <Item.Meta>{single.body}</Item.Meta>
            <Item.Meta>{single.link_text}</Item.Meta>
            <Item.Extra
              as="a"
              href={single.link}
            >
              {single.link}
            </Item.Extra>
          </Item.Content>
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
      </div>
    )
  }
}

export default SingleNote;