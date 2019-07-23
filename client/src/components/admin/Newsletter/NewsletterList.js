import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Button, Table } from 'semantic-ui-react'
import SingleNewsletter from './SingleNewsletter'

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

class NewsletterList extends React.Component {
  compare = (a, b) => {
    if (a.index < b.index) return -1
    if (a.index > b.index) return 1
    return 0
  }

  displayNewsletter = () => {
    const newArr = this.props.newsletters.sort(this.compare)
    return newArr.map((single, index) => {
      return (
        <SingleNewsletter
          single={single}
          index={index}
          editButton={single => this.props.editButton(single)}
          deleteButton={this.props.deleteButton}
        />
      )
    })
  }

  render() {
    if (this.props.newsletters.length) {
      return (
        <div style={{ width: '90%', margin: '0 auto' }}>
          <ButtonWrap>
            <Button onClick={this.props.createButton} color='blue' size='huge'>
              Add Newsletter
            </Button>
          </ButtonWrap>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Title</Table.HeaderCell>
                <Table.HeaderCell>Link</Table.HeaderCell>
                <Table.HeaderCell>Image</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>{this.displayNewsletter()}</Table.Body>
          </Table>
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
          No Newsletters
          <Button onClick={this.props.createButton} color='blue'>
            Add Newsletter
          </Button>
        </div>
      )
    }
  }
}

export default NewsletterList
