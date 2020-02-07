import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import styled from "styled-components";
import DateTimePicker from "react-datetime-picker";

const ButtonWrap = styled.div`
  display: flex;
  width: 50%;
  margin: 30px auto;
  justify-content: space-around;
  align-items: center;
`;

const DatePickerWrap = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

class CreateForm extends React.Component {
  state = {
    name: "",
    frontPage: false,
    description: "",
    image: "",
    link: "",
    itemNumber: this.props.gallery.length + 1
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleCheck = () => {
    this.setState(state => {
      return {
        frontPage: !state.frontPage
      };
    });
  };

  render() {
    return (
      <div>
        <Form style={{ paddingTop: "100px", width: "80%", margin: "0 auto" }}>
          <Form.Field>
            <label>Title</label>
            <input
              placeholder="Title the "
              value={this.state.name}
              id="name"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input
              placeholder="If you want, add a little more. (not required)"
              type="text"
              value={this.state.description}
              id="description"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Image</label>
            <input
              placeholder="Constant Contact Image Link"
              type="text"
              value={this.state.image}
              id="image"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Link</label>
            <input
              placeholder="Enter to Link to the News Story"
              type="text"
              value={this.state.link}
              id="link"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Display on Front Page?</label>
            <input
              placeholder=""
              type="checkbox"
              checked={this.state.frontPage}
              id="frontPage"
              onChange={this.handleCheck}
            />
          </Form.Field>
        </Form>
        <ButtonWrap>
          <Button
            type="submit"
            onClick={() => this.props.handleCreate(this.state)}
            color="green"
          >
            Submit
          </Button>
          <Button type="submit" onClick={this.props.back} color="red">
            Cancel
          </Button>
        </ButtonWrap>
      </div>
    );
  }
}

export default CreateForm;
