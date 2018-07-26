import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

const EntireWrap = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-bottom: 1px solid lightgray;
  width: 90%;
  justify-content: space-between;
  box-shadow: inset 1px 1px 20px 1px #f7eded;
  margin: 10px 0;

  &:hover {
    cursor: pointer;
  }

  &:hover > #plusMinus {
    font-weight: 500; 
  }
`

const PlusMinusWrap = styled.div`
  font-weight: 300;
  font-size: 50px
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;

  
`

const SingleItemWrap = styled.div`
  padding: 10px;
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
`

const BottomWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

const TopWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const SingleBody = styled.h3`
  font-weight: 300;
`

const SingleTitle = styled.h1`
  font-weight: 500;
  margin: 0;

  @media (max-width: 768px) {
    margin: 10px 0;
    font-weight: 500;
    font-size: 16px;
  }
`

const SingleDate = styled.h3`
  font-weight: 400;
  font-style: italic;
  margin: 0;
`

const SingleAnchor = styled.a`
  color: #353535;
  border-radius: 3px;
  box-shadow: 0px 0px 15px 6px #E8E8E8;
  padding: 20px;
  border: 1px solid rgba(0, 123, 255, .47);
  cursor: pointer;
  width: 90%;
  text-align: center;
  font-size: 20px

  &:hover {
    box-shadow: 0px 0px 15px 6px #D3D3D3;
  }
`



class SingleBulletinItem extends React.Component{

  state = { showMore: false }

  showMore = () => {
    return(
      <BottomWrap>
        <SingleBody>
          {this.props.single.body}
        </SingleBody>
        <SingleAnchor
          href={this.props.single.link}
          target="_blank"
        >
          {this.props.single.link_text}
        </SingleAnchor>
      </BottomWrap>
    )
  }

  configureTime = info => {
    const dateSplit = info.split("T")
    const date = dateSplit[0]
    const time = dateSplit[1].split(".")
    const splitTime = time[0].split(":")
    const finalTime = splitTime[0]+":"+splitTime[1]
    const finalDate = moment(date + " " + finalTime).format("dddd, MMMM Do YYYY, h:mma")
    return(
        finalDate
    )
    return info
  }

  render(){
    return(
      <EntireWrap>
        <PlusMinusWrap
          id="plusMinus"
          onClick={() => this.setState({ showMore: !this.state.showMore })}
        >
          {this.state.showMore ? '-' : '+' }
        </PlusMinusWrap>
        <SingleItemWrap>
          <TopWrap
            onClick={() => this.setState({ showMore: !this.state.showMore })}
          >
            <SingleTitle>
              {this.props.single.title}
            </SingleTitle>
            <SingleDate>
              {this.props.single.date !== null && this.props.single.date !== undefined && this.configureTime(this.props.single.date)}
            </SingleDate>
          </TopWrap>
          { this.state.showMore && this.showMore() }
        </SingleItemWrap>
      </EntireWrap>
    )
  }
}

export default SingleBulletinItem