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

class EditStaff extends React.Component{ 

  state = { 
            name: this.props.staff.name ? this.props.staff.name : null, 
            title: this.props.staff.title ? this.props.staff.title : null, 
            image: this.props.staff.image ? this.props.staff.image : null,
            index: this.props.staff.index ? this.props.staff.index : null
          }

  handleChange = e => {
    const { id, value } = e.target
    this.setState({ [id]: value })
  }

  handleSubmit = () => {
    const employee = { ...this.state }
    axios.put(`/api/employees/${this.props.staff.id}`, { employee })
    .then(() => this.props.back())
    .catch( err => console.log(err))
  }

  handleDate = date => this.setState({ date })

  render() {
    const { staff } = this.props
    if (staff){
      return(
        <div>
          <Form
            style={{paddingTop: '100px', width: '90%', margin: '0 auto'}}
          >
            <Form.Field>
              <label>Name</label>
              <input placeholder='First &amp; Last Name' value={this.state.name} id="name" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Title</label>
              <input placeholder='Enter Title' value={this.state.title} id="title" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Image</label>
              <input placeholder='Enter Image' value={this.state.image} id="image" onChange={this.handleChange} />
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
    } else {
      return <div style={{paddingTop: '100px'}}>loading</div>
    }
  }
}

export default EditStaff;