import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'
import styled from 'styled-components'

const ButtonWrap = styled.div`
  display: flex;
  width: 50%;
  margin: 30px auto;
  justify-content: space-around;
  align-items: center;
`

const DatePickerWrap = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

class EditNewsletter extends React.Component {
  state = {
    title: this.props.newsletter.title ? this.props.newsletter.title : null,
    image: this.props.newsletter.image ? this.props.newsletter.image : null,
    link: this.props.newsletter.link ? this.props.newsletter.link : null
  }

  handleChange = e => {
    const { id, value } = e.target
    this.setState({ [id]: value })
  }

  handleSubmit = () => {
    const newsletter = { ...this.state }
    axios
      .put(`/api/newsletters/${this.props.newsletter.id}`, { newsletter })
      .then(() => this.props.back())
      .catch(err => console.log(err))
  }

  render() {
    const { newsletter } = this.props
    if (newsletter) {
      return (
        <div>
          <Form style={{ paddingTop: '100px', width: '90%', margin: '0 auto' }}>
            <Form.Field>
              <label>Title</label>
              <input
                placeholder='Enter Monthly Title'
                value={this.state.title}
                id='title'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Link</label>
              <input
                placeholder='Enter Constant Contact Link'
                value={this.state.link}
                id='link'
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Image URL</label>
              <input
                placeholder='Enter Constant Contact Image URL'
                value={this.state.image}
                id='image'
                onChange={this.handleChange}
              />
            </Form.Field>
          </Form>
          <ButtonWrap>
            <Button type='submit' onClick={this.handleSubmit} color='green'>
              Submit
            </Button>
            <Button type='submit' onClick={this.props.back} color='red'>
              Cancel
            </Button>
          </ButtonWrap>
        </div>
      )
    } else {
      return <div style={{ paddingTop: '100px' }}>loading</div>
    }
  }
}

export default EditNewsletter
