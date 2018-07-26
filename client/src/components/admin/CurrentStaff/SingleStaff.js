import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const SingleStaff = props => (
  <Card>
    <Image src={props.single.image} />
    <Card.Content>
      <Card.Header>{props.single.name}</Card.Header>
      <Card.Meta>
        {props.single.title}
      </Card.Meta>
      <Card.Description>
        Index #{props.single.index}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <div className='ui two buttons'>
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
        </div>
      </Card.Content>
  </Card>
)

export default SingleStaff;