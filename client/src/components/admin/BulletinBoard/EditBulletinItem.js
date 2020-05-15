import React from "react";
import { Button, Radio, Form } from "semantic-ui-react";
import axios from "axios";
import DateTimePicker from "react-datetime-picker";
import styled from "styled-components";

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

class EditBulletinItem extends React.Component {
  state = {
    body: this.props.bulletin.body ? this.props.bulletin.body : null,
    subtitle: this.props.bulletin.subtitle
      ? this.props.bulletin.subtitle
      : null,
    title: this.props.bulletin.title ? this.props.bulletin.title : null,
    date: this.props.bulletin.date ? this.props.bulletin.date : null,
    image: this.props.bulletin.image ? this.props.bulletin.image : null,
    time: this.props.bulletin.time ? this.props.bulletin.time : null,
    location: this.props.bulletin.location || null,
    link: this.props.bulletin.link ? this.props.bulletin.link : null,
    link_text: this.props.bulletin.link_text
      ? this.props.bulletin.link_text
      : null,
  };

  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };

  handleLocation = (e) => {
    this.setState({ location: parseInt(e.target.value) });
  };

  handleSubmit = () => {
    const event = { ...this.state };
    axios
      .put(`/api/events/${this.props.bulletin.id}`, { event })
      .then(() => this.props.back())
      .catch((err) => console.log(err));
  };

  handleDate = (date) => this.setState({ date });

  render() {
    const { bulletin } = this.props;
    if (this.props.bulletin) {
      return (
        <div>
          <Form style={{ paddingTop: "100px", width: "90%", margin: "0 auto" }}>
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
                placeholder="Enter Sub Header"
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
              <label>Date</label>
              <input
                placeholder="Enter Date"
                type="date"
                value={this.state.date}
                id="date"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Time</label>
              <input
                placeholder="Enter Date"
                type="time"
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
            <Form.Field>
              <Radio
                label="Gym"
                name="radioGroup"
                value={1}
                id={1}
                checked={this.state.location === 1}
                onChange={this.handleLocation}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="Online"
                name="radioGroup"
                value={2}
                id={2}
                checked={this.state.location === 2}
                onChange={this.handleLocation}
              />
            </Form.Field>
            <Form.Field>
              <Radio
                label="Park"
                name="radioGroup"
                value={3}
                id={3}
                checked={this.state.location === 3}
                onChange={this.handleLocation}
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
    } else {
      return <div style={{ paddingTop: "100px" }}>loading</div>;
    }
  }
}

export default EditBulletinItem;
