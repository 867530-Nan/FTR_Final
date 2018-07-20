import React, { Component } from 'react'
import  {} from 'react-router-dom'
import '../styles/givingTuesday.css'
import Give from './photodump/ftrGive.jpeg'
import { Icon, Modal } from 'semantic-ui-react'
// import FaHandPeaceO from 'react-icons/lib/fa/hand-peace-o'
import nightBeforeChristmas from './photodump/nightBeforeChristmas.jpg'


class GivingTuesday extends Component {
  state = { visible: false, modalIsOpen: false }

	render() {
      return(
        <div>
          <div style={{marginTop: '50px'}} />

          <a className="twasTheNightWrap" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3J6BG78JMYUN4" rel="noreferrer noopener" target="_blank"/>

          <div className="wantToHelpWrap">
            <h1 className="wantToHelpText">All of us at FTR want to wish you a Happy, Healthy New Year! We are excited to be launching our 4th year of exercise, nutrition, creative arts, and community service. Help us make it the best year yet with a tax-deductible donation. It’s quick and easy to do by clicking on the Donate Button below!</h1>
          </div>
          <a className="donateSocialWrap" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3J6BG78JMYUN4" rel="noreferrer noopener" target="_blank">
            <div className="socialWrap">
              <h5 className="socialText">Make a Year-End, Tax-Deductible Donation.<br/> It's Quick, Simple, and Secure!</h5>
            </div>
            <div className="donateWrap">
              <h5 className="donateHashtagText">&nbsp;Donate Directly Here&nbsp;</h5>

            </div>
          </a>
          <div className="topIntro">
            <h2 className="topText">Thank You and Good Tidings to All!!</h2>
          </div>
        </div>
      )
  }
}



export default GivingTuesday;



















