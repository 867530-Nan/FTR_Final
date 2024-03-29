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
  configureTime = info => {
    const dateSplit = info.split("T");
    const date = dateSplit[0];
    const finalDate = moment(date).format("dddd, MMMM Do YYYY");
    return finalDate;
  };

  determineTime = time => {
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
            <a href={single.link ? single.link : null}>
              <Item.Header as="h2">Title: {single.name}</Item.Header>
              {single.description ? (
                <Item.Meta>Description: {single.description}</Item.Meta>
              ) : null}
              <img style={{ maxWidth: "300px" }} src={single.image} />
            </a>
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
