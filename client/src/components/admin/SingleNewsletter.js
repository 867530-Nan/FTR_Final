import React from 'react'
import { Table, Button } from 'semantic-ui-react'

const SingleNewsletter = props => (
  <Table.Row>
    <Table.Cell>{props.single.title}</Table.Cell>
    <Table.Cell>{props.single.link}</Table.Cell>
    <Table.Cell>{props.single.image}</Table.Cell>
    <Table.Cell>{props.single.index}</Table.Cell>
    <Button 
      onClick={() => props.editButton(props.single)} 
      color="teal"
      basic
    >
      Edit
    </Button>
    <Button 
      onClick={() => props.deleteButton(props.single)} 
      color="orange"
      basic
    >
      Delete
    </Button> 
  </Table.Row>
)

export default SingleNewsletter