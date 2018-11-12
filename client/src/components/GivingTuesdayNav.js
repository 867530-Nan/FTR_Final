import React from "react";
import styled from "styled-components";

const ActualWrapp = styled.div`
  height: 60px;
  background-color: #ffffff;
  width: 100%;
  position: fixed;
  z-index: 99;
  margin-top: 52px;

  @media (max-width: 768px) {
    margin-top: 70px;
  }
`;

const GivingTuesdayWrap = styled.div`
  display: flex;
  background-color: rgb(0, 120, 141);
  height: 100%;
  width: 95%;
  margin: 0 auto 5px auto;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 5px 5px;
  box-shadow: 1px 3px 15px 1px rgb(117, 117, 117);

  &:hover {
    filter: brightness(130%);
    cursor: pointer;
  }

  &:hover h1 {
    font-weight: 400;
    color: black;
  }

  &:active {
    border: 3px solid #ffffff;
  }
`;

const GivingTuesdayAnchor = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GivingTuesdayText = styled.h1`
  font-size: 24px;
  color: white;
  font-weight: 700;

  @media (max-width: 450px) {
    font-size: 20px;
  }

  @media (max-width: 350px) {
    font-size: 16px;
  }
`;

export default class GivingTuesdayNav extends React.Component {
  render() {
    return (
      <ActualWrapp>
        <GivingTuesdayWrap>
          <GivingTuesdayAnchor
            href="https://www.mightycause.com/organization/Fit2recover"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GivingTuesdayText>
              Love Utah Give Tuesday Information
            </GivingTuesdayText>
          </GivingTuesdayAnchor>
        </GivingTuesdayWrap>
      </ActualWrapp>
    );
  }
}
