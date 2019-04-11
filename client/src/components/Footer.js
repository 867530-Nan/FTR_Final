import React, { Component } from "react";
import { Image, Icon, Grid } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import "../styles/Footer.css";
import mindBody from "../assets/images/mindBodyWhite.png";
import paypal from "../assets/images/paypal.png";
import GuideStar from "../assets/images/GoldGuideStar2018.png";
import { PayPalLink, Instagram, MindBody, Facebook } from "../GlobalLinks/Links";
import { emailAddresses } from "../assets/emailAddresses";

class Footer extends Component {
  render() {
    return (
      <div className='footerWide'>
        <div className='socialLinks'>
          <Grid columns={16}>
            <Grid.Column mobile={8} tablet={4} computer={4} className='lessPadding'>
              <div
                className='facebook actualSocial'
                onClick={() => (window.location.href = Facebook)}
              >
                <Icon name='facebook square' className='fbLink' />
                <a
                  className='smallMB mindBodyA'
                  rel='noopener noreferrer'
                  link
                  href={Facebook}
                >
                  {" "}
                  Facebook
                </a>
              </div>
            </Grid.Column>
            <Grid.Column mobile={8} tablet={4} computer={4} className='lessPadding'>
              <div
                className='youtube actualSocial'
                onClick={() => (window.location.href = Instagram)}
              >
                <Icon name='instagram' className='youtubeLink' />
                <a
                  className='smallMB mindBodyA'
                  rel='noopener noreferrer'
                  link
                  href='https://www.instagram.com/fit_2recover/?hl=en'
                >
                  {" "}
                  Instagram{" "}
                </a>
              </div>
            </Grid.Column>
            <Grid.Column mobile={8} tablet={4} computer={4} className='lessPadding'>
              <div
                className='mindBody actualSocial'
                onClick={() => (window.location.href = MindBody)}
              >
                <Image src={mindBody} className='smallMB mbWhite' />
                <a
                  className='smallMB mindBodyA'
                  rel='noopener noreferrer'
                  href={MindBody}
                >
                  MindBody
                </a>
              </div>
            </Grid.Column>
            <Grid.Column mobile={8} tablet={4} computer={4} className='lessPadding'>
              <div
                className='paypalButton actualSocial'
                onClick={() => (window.location.href = PayPalLink)}
              >
                <Image src={paypal} className='smallMB paypalIcon' />
                <a className='smallMB PayPal' rel='noopener noreferrer' href={PayPalLink}>
                  Donate
                </a>
              </div>
            </Grid.Column>
          </Grid>
        </div>
        <a
          rel='noopener noreferrer'
          href='https://www.guidestar.org/profile/47-0998466'
          className='guideStar'
        >
          <img style={{ maxHeight: "150px" }} alt='guidestar seal' src={GuideStar} />
        </a>

        <div className='actualFooter'>
          <div className='whoWeAre'>
            <h6 className='whoWords'>
              Established in 2013, Fit To Recover is built on the promise to make a
              difference in the recovery and physical fitness communities by bringing them
              together into one group with shared goals. At Fit To Recover, we support one
              another in physical activity, community gatherings, nutritional insights,
              and creative endeavors.
            </h6>
          </div>
          <div className='feedback'>
            <a
              className='bottomMailTo'
              rel='noopener noreferrer'
              href='https://www.google.com/maps/place/Fit+to+Recover/@40.7399488,-111.9142314,17z/data=!4m13!1m7!3m6!1s0x8752f4da86d2a85f:0x98c2d4e4a171bc13!2s789+W+1390+S,+Salt+Lake+City,+UT+84104!3b1!8m2!3d40.7392009!4d-111.9137379!3m4!1s0x8752f4da86ddc03f:0x24d4219acbd712ad!8m2!3d40.739265!4d-111.913712'
            >
              789 West 1390 South, Salt Lake City, Utah 84104
            </a>
          </div>
          <div className='navCopy'>
            <div className='footerLinks' as='h3'>
              <a rel='noopener noreferrer' className='footerALinks' href='/'>
                Home
              </a>
            </div>
            <span>|</span>
            <div className='footerLinks' as='h3'>
              <a rel='noopener noreferrer' className='footerALinks' href='/fitness'>
                Fitness
              </a>
            </div>
            <span>|</span>
            <div className='footerLinks' as='h3'>
              <a rel='noopener noreferrer' className='footerALinks' href='/nutrition'>
                Nutrition
              </a>
            </div>
            <span>|</span>
            <div className='footerLinks' as='h3'>
              <a rel='noopener noreferrer' className='footerALinks' href='/creativearts'>
                Creative Arts
              </a>
            </div>
            <span>|</span>
            <div className='footerLinks' as='h3'>
              <a rel='noopener noreferrer' className='footerALinks' href='/community'>
                Community Service
              </a>
            </div>
            <span>|</span>
            <div className='footerLinks' as='h3'>
              <a rel='noopener noreferrer' className='footerALinks' href='/contact'>
                Contact Us
              </a>
            </div>
          </div>
          f
          <div className='feedback'>
            <a className='bottomMailTo' href={emailAddresses.nicolette} target='_top'>
              <Icon name='mail' color='white' />
              &nbsp;We'd love to hear from You - Feedback, Comments, Testimonials&nbsp;
              <Icon name='mail' color='white' />
            </a>
          </div>
          <div />
        </div>
      </div>
    );
  }
}

export default withRouter(Footer);
