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

class CreateForm extends React.Component{ 

  state = { 
            body: "",
            title: "",
            date: new Date(),
            image: "",
            link: "",
            link_text: ""
          }

  handleChange = e => {
    const { id, value } = e.target
    this.setState({ [id]: value })
  }

  handleDate = date => this.setState({ date })

  handleSubmit = () => {
    const bulletin = { ...this.state }
    axios.post('/api/bulletins/', { bulletin })
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
            <Form.Field>
              <label>Link Text</label>
              <input placeholder='Enter the Link Will Say' type="text" value={this.state.link_text} id="link_text" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Link URL</label>
              <input placeholder='Paste Facebook (or other) Link URL' type="text" value={this.state.link} id="link" onChange={this.handleChange} />
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

export default CreateForm;