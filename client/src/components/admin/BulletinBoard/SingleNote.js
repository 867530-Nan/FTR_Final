import React from "react";
import styled from "styled-components";
import { Button, Item } from "semantic-ui-react";
import moment from "moment";

const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

class SingleNote extends React.Component {
  configureTime = (info) => {
    const dateSplit = info.split("T");
    const date = dateSplit[0];
    const finalDate = moment(date).format("dddd, MMMM Do YYYY");
    return finalDate;
  };

  determineTime = (time) => {
    let up = time.split(":");
    if (parseInt(up[0]) > 12) {
      up[0] = `${parseInt(up[0]) - 12}`;
      const newt = up.join(":");
      return `${newt} pm`;
    } else {
      return `${up.join(":")} am`;
    }
  };

  render() {
    const { single } = this.props;
    return (
      <div>
        <Item>
          <Item.Content>
            <Item.Header as="h2">{single.title}</Item.Header>
            <Item.Header as="h4">{single.subtitle}</Item.Header>
            <Item.Meta>
              {single.date !== null &&
                single.date !== undefined &&
                this.configureTime(single.date)}
            </Item.Meta>
            <Item.Meta>
              {single.time && this.determineTime(single.time)}
            </Item.Meta>
            <Item.Meta>{single.body && single.body}</Item.Meta>
            <Item.Extra as="a" href={single.link && single.link}>
              {single.link_text && single.link_text}
            </Item.Extra>
          </Item.Content>
        </Item>
        <ButtonWrap>
          <Button
            style={{ width: "100%" }}
            onClick={() => this.props.editButton(this.props.single)}
            color="teal"
          >
            Edit
          </Button>
          <Button
            style={{ width: "100%" }}
            onClick={() => this.props.deleteButton(this.props.single)}
            color="orange"
          >
            Delete
          </Button>
        </ButtonWrap>
      </div>
    );
  }
}

export default SingleNote;
