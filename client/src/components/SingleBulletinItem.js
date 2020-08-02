import React from "react";
import styled from "styled-components";
import moment from "moment";

const EntireWrap = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  justify-content: space-between;
  border: 2px solid #ebebeb;
  margin: 10px 0;
  width: 100%;
  &:hover {
    cursor: ${(props) => props.cursor};
  }

  &:hover > #plusMinus {
    font-weight: 500;
  }
`;

const PlusMinusWrap = styled.div`
  font-weight: 300;
  font-size: 30px
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;

  
`;

const SingleItemWrap = styled.div`
  padding: 10px;
  display: flex;
  width: ${(props) => props.width};
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
`;

const BottomWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const TopWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SingleBody = styled.h3`
  font-weight: 300;
`;

const SingleTitle = styled.h2`
  font-weight: 500;
  margin: 0;

  @media (max-width: 768px) {
    margin: 10px 0;
    font-weight: 500;
    font-size: 16px;
  }
`;

const SingleSubtitle = styled.h3`
  font-weight: 900;
  margin: 0;

  @media (max-width: 768px) {
    margin: 10px 0;
    font-weight: 900;
    font-size: 14px;
  }
`;

const SingleDate = styled.h3`
  font-weight: 400;
  font-style: italic;
  margin: 0;
`;

const SingleAnchor = styled.a`
  color: #353535;
  border-radius: 3px;
  box-shadow: 0px 0px 15px 6px #e8e8e8;
  padding: 20px;
  border: 1px solid rgba(0, 123, 255, 0.47);
  cursor: pointer;
  width: 90%;
  text-align: center;
  font-size: 20px

  &:hover {
    box-shadow: 0px 0px 15px 6px #d3d3d3;
  }
`;

class SingleBulletinItem extends React.Component {
  state = { showMore: false };

  showMore = () => {
    return (
      <BottomWrap>
        <SingleBody>{this.props.single.body}</SingleBody>
        {this.props.single.link_text ? (
          <SingleAnchor
            href={this.props.single.link ? this.props.single.link : null}
            target="_blank"
          >
            {this.props.single.link_text}
          </SingleAnchor>
        ) : null}
      </BottomWrap>
    );
  };

  configureTime = (info) => {
    if (info) {
      const dateSplit = info.split("T");
      const date = dateSplit[0];
      const finalDate = moment(date).format("dddd, MMMM Do YYYY");
      return finalDate;
    } else return;
  };

  determineTime = (time) => {
    if (time) {
      let up = time.split(":");
      console.log(up);
      if (up[0] === "12") {
        return `${up.join(":")} pm`;
      }
      if (parseInt(up[0]) > 12) {
        up[0] = `${parseInt(up[0]) - 12}`;
        const newt = up.join(":");
        return `${newt} pm`;
      } else {
        return `${up.join(":")} am`;
      }
    } else return;
  };

  render() {
    return (
      <EntireWrap
        cursor={this.props.single && this.props.single.body ? "cursor" : null}
        onClick={
          this.props.single && this.props.single.body
            ? () => this.setState({ showMore: !this.state.showMore })
            : null
        }
      >
        {this.props.single && this.props.single.body > 1 && (
          <PlusMinusWrap id="plusMinus">
            {this.state.showMore ? "-" : "+"}
          </PlusMinusWrap>
        )}
        <SingleItemWrap width={this.state.showMore ? "90%" : "100%"}>
          <TopWrap>
            <SingleTitle>{this.props.single.title}</SingleTitle>
            <SingleSubtitle>{this.props.single.subtitle}</SingleSubtitle>
            <SingleDate>{this.props.single.time}</SingleDate>
          </TopWrap>
          {this.state.showMore && this.showMore()}
        </SingleItemWrap>
      </EntireWrap>
    );
  }
}

export default SingleBulletinItem;
