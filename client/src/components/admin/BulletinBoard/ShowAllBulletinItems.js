import React from "react";
import SingleNote from "./SingleNote";
import styled from "styled-components";
import { Button, Item } from "semantic-ui-react";

const Header = styled.h3`
  font-family: helvetica;
  text-align: center;
  font-weight: 300;
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const StyledDiv = styled.div`
  flex-direction: column: 
`;

const IconDiv = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  border: 1px black solid;
  border-radius: 5px;
  margin: 3px 0;
  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
  }
`;

const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  max-width: 300px;
  align-items: center;
  justify-content: flex-start;
`;

class ShowAllBulletinItems extends React.Component {
  state = { bulletins: [], create: false };

  displayBulletin = (e) => {
    function compare(a, b) {
      if (a.itemNumber > b.itemNumber) return 1;
      if (a.itemNumber < b.itemNumber) return -1;
      return 0;
    }
    return e.sort(compare).map((single, index) => {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "center",
            alignItems: "center",
          }}
        >
          <div>
            <h1 style={{ alignSelf: "center" }}>{index + 1}</h1>
          </div>
          <Item.Group
            style={{ borderBottom: "1px solid gray", padding: "30px" }}
          >
            <SingleNote
              single={single}
              index={index}
              editButton={(single) => this.props.editButton(single)}
              deleteButton={this.props.deleteButton}
            />
          </Item.Group>
          <StyledDiv>
            <IconDiv
              onClick={() => this.props.handleMoveUp(single)}
              style={{ height: "30px", width: "30px" }}
            >
              &#8593;
            </IconDiv>
            <IconDiv
              onClick={() => this.props.handleMoveDown(single)}
              style={{ height: "30px", width: "30px" }}
            >
              &#8595;
            </IconDiv>
          </StyledDiv>
        </div>
      );
    });
  };

  createSection = (title, bulletins) => {
    return (
      <SectionWrap>
        <h1>{title}</h1>
        {bulletins.length ? (
          this.displayBulletin(bulletins)
        ) : (
          <h3>No {title} bulletins</h3>
        )}
      </SectionWrap>
    );
  };

  render() {
    if (this.props.bulletins.length) {
      return (
        <div style={{ width: "90%", margin: "0 auto" }}>
          <ButtonWrap>
            <Button onClick={this.props.createButton} color="blue" size="huge">
              Create New Bulletin Item
            </Button>
          </ButtonWrap>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {this.createSection(
              "Sunday",
              this.props.bulletins.filter((s) => s.day === 7)
            )}
            {this.createSection(
              "Monday",
              this.props.bulletins.filter((s) => s.day === 1)
            )}
            {this.createSection(
              "Tuesday",
              this.props.bulletins.filter((s) => s.day === 2)
            )}
            {this.createSection(
              "Wednesday",
              this.props.bulletins.filter((s) => s.day === 3)
            )}
            {this.createSection(
              "Thursday",
              this.props.bulletins.filter((s) => s.day === 4)
            )}
            {this.createSection(
              "Friday",
              this.props.bulletins.filter((s) => s.day === 5)
            )}
            {this.createSection(
              "Saturday",
              this.props.bulletins.filter((s) => s.day === 6)
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            paddingTop: "100px",
            width: "90%",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          No Bulletin Items
          <Button onClick={this.props.createButton} color="blue">
            Create New Bulletin Item
          </Button>
        </div>
      );
    }
  }
}

export default ShowAllBulletinItems;
