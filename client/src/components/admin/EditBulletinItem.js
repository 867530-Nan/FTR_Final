import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'
import DateTimePicker from 'react-datetime-picker'
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

class EditBulletinItem extends React.Component{ 

  state = { 
            body: this.props.note.body ? this.props.note.body : null, 
            title: this.props.note.title ? this.props.note.title : null, 
            date: this.props.note.date ? this.props.note.date : null,
            image: this.props.note.image ? this.props.note.image : null
          }

  handleChange = e => {
    const { id, value } = e.target
    this.setState({ [id]: value })
  }

  handleSubmit = () => {
    const note = { ...this.state }
    axios.put(`/api/notes/${this.props.note.id}`, { note })
    .then(() => this.props.back())
    .catch( err => console.log(err))
  }

  handleDate = date => this.setState({ date })

  render() {
    const { note } = this.props
    if (this.props.note){
      return(
        <div>
          <Form
            style={{paddingTop: '100px', width: '90%', margin: '0 auto'}}
          >
            <Form.Field>
              <label>Title</label>
              <input placeholder='Enter Title' value={this.state.title} id="title" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Body</label>
              <input placeholder='Enter Body' value={this.state.body} id="body" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Date</label>
              <input placeholder='Enter Date' type="datetime-local" value={this.state.date} id="date" onChange={this.handleChange} />
            </Form.Field>
          </Form>
          <ButtonWrap>
            <Button type='submit' onClick={this.handleSubmit} color="green" >Submit</Button>
            <Button type='submit' onClick={this.props.back} color="red" >Cancel</Button>
          </ButtonWrap>
        </div>
      )
    } else {
      return <div style={{paddingTop: '100px'}}>loading</div>
    }
  }
}

export default EditBulletinItem;