import React from 'react'
import styled from 'styled-components'
import { Button, Table } from 'semantic-ui-react'
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
      <Table.Row>
        <Table.Cell>
          {single.title}
        </Table.Cell>
        <Table.Cell
          style={{width: '40%'}}
        >
          {single.body}
        </Table.Cell>
        <Table.Cell>{single.date !== null && single.date !== undefined && this.configureTime(single.date)}</Table.Cell>
        <ButtonWrap>
          <Button 
            onClick={() => this.props.editButton(this.props.single)} 
            color="teal"
          >
            Edit
          </Button>
          <Button 
            onClick={() => this.props.deleteButton(this.props.single)} 
            color="orange"
          >
            Delete
          </Button>
        </ButtonWrap>
      </Table.Row>
    )
  }
}

export default SingleNote;