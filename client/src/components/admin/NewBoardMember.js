import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'
import styled from 'styled-components'
import DateTimePicker from 'react-datetime-picker';

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

class NewBoardMember extends React.Component{ 

  state = { 
            name: "",
            title: "",
            image: "",
            bio: "",
            index: undefined,
          }

  handleChange = e => {
    const { id, value } = e.target
    this.setState({ [id]: value })
  }

  handleSubmit = () => {
    const board = { ...this.state }
    axios.post('/api/boards', { board })
    .then(() => this.props.back())
    .catch( err => console.log(err))
  }

  render() {
      return(
        <div>
          <Form
            style={{paddingTop: '100px', width: '80%', margin: '0 auto'}}
          >
            <Form.Field>
              <label>Name</label>
              <input placeholder='First &amp; Last Name' value={this.state.Name} id="name" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Title</label>
              <input placeholder='Enter Title' value={this.state.title} id="title" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Image URL</label>
              <input placeholder='Enter Constant Contact URL' value={this.state.image} id="image" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Bio</label>
              <input placeholder='Enter Bio' value={this.state.bio} id="bio" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Index</label>
              <input placeholder='Enter Index' type="number" value={this.state.index} id="index" onChange={this.handleChange} />
            </Form.Field>
          </Form>
          <ButtonWrap>
            <Button type='submit' onClick={this.handleSubmit} color="green" >Submit</Button>
            <Button type='submit' onClick={this.props.back} color="red" >Cancel</Button>
          </ButtonWrap>
        </div>
      )
  }
}

export default NewBoardMember;