import React from "react";
import { Button, Select, Form } from "semantic-ui-react";
import axios from "axios";
import styled from "styled-components";
const weekdays = [
  { key: 1, value: 1, text: "Monday" },
  { key: 2, value: 2, text: "Tuesday" },
  { key: 3, value: 3, text: "Wednesday" },
  { key: 4, value: 4, text: "Thursday" },
  { key: 5, value: 5, text: "Friday" },
  { key: 6, value: 6, text: "Saturday" },
  { key: 7, value: 7, text: "Sunday" },
];

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
    body: "",
    title: "",
    day: "",
    image: "",
    link: "",
    link_text: "",
    time: "",
    itemNumber: 1,
    subtitle: "",
  };

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleDate = (date) => this.setState({ date });

  handleSubmit = () => {
    const event = { ...this.state, isVisible: true };
    axios
      .post("/api/events/", { event })
      .then(() => this.props.back())
      .catch((err) => console.log(err));
  };

  selectDay = (e, data) => {
    this.setState({ day: data.value });
  };

  render() {
    return (
      <div>
        <Form style={{ paddingTop: "100px", width: "80%", margin: "0 auto" }}>
          <Form.Field>
            <label>Title</label>
            <input
              placeholder="Enter Title"
              value={this.state.title}
              id="title"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Sub Header</label>
            <input
              placeholder="Enter subtitle"
              value={this.state.subtitle}
              id="subtitle"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Body</label>
            <input
              placeholder="Enter Body"
              value={this.state.body}
              id="body"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Day</label>
            <Select
              placeholder="Select Day"
              options={weekdays}
              value={this.state.day}
              onChange={this.selectDay}
            />
          </Form.Field>
          <Form.Field>
            <label>Time</label>
            <input
              placeholder="Enter Time"
              type="text"
              value={this.state.time}
              id="time"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Link Text</label>
            <input
              placeholder="Enter the Link Will Say"
              type="text"
              value={this.state.link_text}
              id="link_text"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Link URL</label>
            <input
              placeholder="Paste Facebook (or other) Link URL"
              type="text"
              value={this.state.link}
              id="link"
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
        <ButtonWrap>
          <Button type="submit" onClick={this.handleSubmit} color="green">
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
