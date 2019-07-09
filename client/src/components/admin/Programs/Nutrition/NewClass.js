import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios'
import styled from 'styled-components'

const ButtonWrap = styled.div`
  display: flex;
  width: 50%;
  margin: 30px auto;
  justify-content: space-around;
  align-items: center;
`

export default class NewClass extends React.Component {
  state = {
    title: '',
    sub_title: '',
    body: '',
    image: '',
    index: ''
  }

  handleChange = e => {
    const { id, value } = e.target
    this.setState({ [id]: value })
  }

  handleSubmit = () => {
    const nutrition = { ...this.state }
    axios
      .post('/api/nutrition/', { nutrition })
      .then(() => this.props.back())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Form style={{ paddingTop: '100px', width: '90%', margin: '0 auto' }}>
          <Form.Field>
            <label>Title</label>
            <input
              placeholder='Enter Title'
              value={this.state.title}
              id='title'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input
              placeholder='Enter Description'
              type='text'
              value={this.state.body}
              id='body'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Image</label>
            <input
              placeholder='Enter Image'
              value={this.state.image}
              id='image'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Index</label>
            <input
              placeholder='Enter Index'
              type='number'
              value={this.state.index}
              id='index'
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
  }
}
