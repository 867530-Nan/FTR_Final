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
            title: this.props.singleClass.title ? this.props.singleClass.title : null, 
            sub_title: this.props.singleClass.sub_title ? this.props.singleClass.sub_title : null,
            body: this.props.singleClass.body ? this.props.singleClass.body : null, 
            image: this.props.singleClass.image ? this.props.singleClass.image : null,
            index: this.props.singleClass.index ? this.props.singleClass.index : null
          }

  handleChange = e => {
    const { id, value } = e.target
    this.setState({ [id]: value })
  }

  handleSubmit = () => {
    const fitness = { ...this.state }
    axios.put(`/api/fitness/${this.props.singleClass.id}`, { fitness })
    .then(() => this.props.back())
    .catch( err => console.log(err))
  }

  handleDate = date => this.setState({ date })

  render() {
    const { singleClass } = this.props
    if (singleClass){
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
              <label>Sub-Title</label>
              <input placeholder='Enter Sub Title Text' value={this.state.sub_title} id="sub_title" onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <input placeholder='Enter Description' type="text" value={this.state.body} id="body" onChange={this.handleChange} />
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