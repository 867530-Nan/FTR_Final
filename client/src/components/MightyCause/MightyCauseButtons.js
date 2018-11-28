import React from "react";
import styled from "styled-components";
import { MightyInfo } from "./MightyInfo";
import SingleGivingTuesdayButton from "./SingleGivingTuesdayButton";
import BraintreeDrop from "../Paypal/BraintreeDrop";

class MightyCauseButtons extends React.Component {
  state = { showBraintree: false, choice: "" };
  displayButtons = () => {
    return MightyInfo.map((single, i) => {
      return (
        <SingleGivingTuesdayButton
          info={single}
          switchAndSet={this.switchAndSet}
        />
      );
    });
  };
  switchAndSet = choice => {
    this.setState({ showBraintree: !this.state.showBraintree, choice });
  };
  displayBraintree = () => {
    return (
      <Wrap>
        <h1>{this.state.choice.header}</h1>
        <BraintreeDrop
          amount={this.state.choice.dollarAmount}
          switchAndSet={() => this.setState({ showBraintree: false })}
        />
      </Wrap>
    );
  };

  render() {
    return (
      <PageWrap>
        <HeaderWrap>
          <Header>
            November is the month for giving, <br />
            Please consider a gift below.
          </Header>
        </HeaderWrap>
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

const HeaderWrap = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.h1`
  text-align: center;
  font-weight: 300;
  font-family: helvetica neue;
  font-size: 36px;
  color: red;
  padding: 10px 0;

  @media (max-width: 770px) {
    font-size: 30px;
  }

  @media (max-width: 500px) {
    font-size: 24px;
  }
`;

const Wrap = styled.div``;

const ButtonWrap = styled.div`
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  margin: 10px 0;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`;
