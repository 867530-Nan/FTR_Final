import React from "react";
import styled from "styled-components";

class SingleGivingTuesdayButton extends React.Component {
  state = { show: false };

  render() {
    return (
      <ButtonWrap href={this.props.info.link} target="_blank">
        <SingleButton
          // onMouseEnter={() => this.setState({ show: true })}
          // onMouseLeave={() => this.setState({ show: false })}
          target="_blank"
          borderColor={"rgb(0, 120, 141)"}
        >
          <ButtonText color={"rgb(0, 120, 141)"}>
            {this.props.info.header}
          </ButtonText>
          <SmallText color={"#0d0047"}>{this.props.info.description}</SmallText>
        </SingleButton>
      </ButtonWrap>
    );
  }
}

export default SingleGivingTuesdayButton;

const ButtonWrap = styled.a`
  width: 45%;
  height: 100px;
  margin: 10px 0;

  @media (max-width: 772px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const SingleButton = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  flex-direction: column;
  border: 3px solid ${props => props.borderColor};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 0 5px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05, 1.05);
    border-color: red;
  }

  @media (max-width: 770px) {
    width: 90%;
    height: 86px;
    margin: 5px auto;
  }
`;

const SmallText = styled.h1`
  display: none;
  font-size: 12px;
  font-weight: 400;
  color: ${props => props.color};
  text-align: center;
  margin: 0;
  display: initial;
`;

const ButtonText = styled.h1`
  margin: 0;
  font-size: 20px;
  font-weight: 400;
  color: ${props => props.color};
  text-align: center;

  @media (max-width: 350px) {
    font-size: 18px;
  }
`;
