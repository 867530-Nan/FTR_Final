import React from "react";
import styled from "styled-components";
import { MightyInfo } from "./MightyInfo";

class MightyCauseButtons extends React.Component {
  displayButtons = () => {
    return MightyInfo.map((single, i) => {
      return (
        <SingleButton
          href={single.link}
          target="_blank"
          borderColor={"rgb(0, 120, 141)"}
        >
          <ButtonText color={"rgb(0, 120, 141)"}>{single.header}</ButtonText>
        </SingleButton>
      );
    });
  };

  render() {
    return (
      <PageWrap>
        <Header>
          November is the month for giving, show your support with a gift
          below..
        </Header>
        <ButtonWrap>{this.displayButtons()}</ButtonWrap>
      </PageWrap>
    );
  }
}

export default MightyCauseButtons;

const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 36px;
  color: rgb(0, 120, 141);
  padding: 10px 0;

  @media (max-width: 770px) {
    font-size: 30px;
  }
`;

const ButtonWrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 10px 0;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`;

const SingleButton = styled.a`
  display: flex;
  width: 20%;
  height: 100px;
  border: 1px solid ${props => props.borderColor};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 0 5px;

  &:hover {
    cursor: pointer;
    transform: scale(1.1, 1.1);
    border: 3px solid red;
  }

  &:hover h1 {
    color: red;
  }

  @media (max-width: 770px) {
    width: 90%;
    height: 75px;
    margin: 5px auto;
  }
`;

const ButtonText = styled.h1`
  font-size: 20px;
  font-weight: 400;
  color: ${props => props.color};
  text-align: center;
`;
