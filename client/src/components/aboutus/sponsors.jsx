import React, { Component } from "react";
import styled from "styled-components";
import {} from "react-router-dom";
import "../../styles/sponsors.css";
import { Image, Grid, List } from "semantic-ui-react";
import sponsors from "../../assets/images/2016SponsorBanner.jpg";
import huddle from "../../assets/images/bootcamp-end-huddle.jpeg";
import lugu from "../../assets/images/lugu2017.jpeg";
import silver from "../../assets/images/GoldGuideStar2019.png";
import { PayPalLink } from "../../GlobalLinks/Links";
import PayPalMock from "../../assets/images/paypalDonateMock.png";
import { TopPadding } from "../ftr_home";
import { emailAddresses } from "../../assets/emailAddresses";

const DonateMock = styled.a`
  max-height: 50px;
  max-width: 155px;
`;

class Sponsors extends Component {
  render() {
    return (
      <div>
        <TopPadding />

        <div className='sponsorsTop img-responsive' style={styles.beforeafter}>
          <h1 className='sponsorsTopHeading' style={styles.beforeAfterWords}>
            Sponsors and Partners
          </h1>
        </div>

        <Grid>
          <Grid.Column className='tripGrid' mobile={16} tablet={4} computer={4}>
            <DonateMock href={PayPalLink} style={{ height: "100%", width: "100%" }}>
              <img src={PayPalMock} alt='pay pal link' />
            </DonateMock>
          </Grid.Column>
          <Grid.Column className='tripGrid' mobile={16} tablet={8} computer={8}>
            <div className='sponsorLevels'>
              Interested in becoming an FTR Sponsor?
              <br />
              We'd love to have you.
              <br />
              Read more about Sponsorship levels
              <a
                href='https://nebula.wsimg.com/987062255bac1e683351c9b4742e2c62?AccessKeyId=6C572ACEE6337077909C&disposition=0&alloworigin=1'
                target='_blank'
                rel='noopener noreferrer'
              >
                &nbsp;here.
              </a>
            </div>
          </Grid.Column>
          <Grid.Column className='tripGrid' mobile={16} tablet={4} computer={4}>
            <a
              rel='noopener noreferrer'
              href='https://www.guidestar.org/profile/47-0998466'
              className='guidestar'
              target='_blank'
            >
              <Image style={{ maxHeight: "125px" }} centered src={silver} />
            </a>
          </Grid.Column>
        </Grid>

        <Grid className='sponsors'>
          <Grid.Column className='sponsorsColumn' mobile={16} tablet={5} computer={5}>
            <Image className='leftImage' src={lugu} />
            <List>
              <List.Header className='donorColumnHeader'>
                Special thanks to our generous Corporate and Foundation donors:
              </List.Header>
              <List.Item as='a' className='singleDonor'>
                The Lawrence T. and Janet T. Dee Foundation
              </List.Item>
              <List.Item as='a' className='singleDonor'>
                The George S. and Dolores D. Eccles Foundation
              </List.Item>
              <List.Item as='a' className='singleDonor'>
                Church of Jesus Christ of Latter-Day Saints Foundation
              </List.Item>
              <List.Item className='singleDonor'>Episcopal Diocese of Utah</List.Item>
              <List.Item as='a' className='singleDonor'>
                Intermountain Healthcare
              </List.Item>
              <List.Item as='a' className='singleDonor'>
                Larry H. Miller charities
              </List.Item>
              <List.Item as='a' className='singleDonor'>
                Moulton Family Charitable Trust
              </List.Item>
              <List.Item className='singleDonor'>
                Nicholas Zurn Scholarship Fund
              </List.Item>
              <List.Item as='a' className='singleDonor'>
                The Sorenson Legacy Foundation
              </List.Item>
              <List.Item as='a' className='singleDonor'>
                United Way of Salt Lake
              </List.Item>
              <List.Item as='a' className='singleDonor'>
                Utah Medical Association
              </List.Item>
              <List.Item as='a' className='singleDonor'>
                Val and Edith Green Founation
              </List.Item>
              <List.Item as='a' className='singleDonor'>
                The Wheeler Foundation
              </List.Item>
              <List.Item as='a' className='singleDonor'>
                Zions Bank
              </List.Item>
            </List>
          </Grid.Column>

          <Grid.Column className='xsColumn hidden-sm hidden-md hidden-lg hidden-xl'>
            <List>
              <List.Header className='donorColumnHeader'>
                Our treatment partners mix and match the FTR pillars that work best for
                them. Some are exercise only; some combine exercise and nutrition; some
                choose exercise and art. One purchases memberships for their clients when
                they graduate. There are any number of ways treatment centers and sober
                living houses can involve their clients in our safe, active, healthy
                community. <br />
                Contact <a href={emailAddresses.nicolette}>Nicolette Pessetto</a> for our
                menu of services!{" "}
              </List.Header>
              <List.Item
                as='a'
                className='singleDonor'
                href='https://www.acquarecovery.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Acqua Treatment
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='http://www.ascendrecovery.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Ascend Recovery
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='http://www.balancehouseut.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Balance House
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='https://brightonrecoverycenter.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Brighton Recovery Center
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='https://addictionfree.com/about-us/our-centers/outpatient-services-salt-lake'
                target='_blank'
                rel='noopener noreferrer'
              >
                Cold Creek Behavioral Health
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='http://havenhelps.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                The Haven
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='https://www.odysseyhouse.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Odyssey House of Utah
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='http://www.recoveryways.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Recovery Ways
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='http://renaissanceranch.net/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Renaissance Ranch Outpatient
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='http://www.saltlakebehavioralhealth.com/military-mental-health-program/strong-hope-womens-mental-health-program'
                target='_blank'
                rel='noopener noreferrer'
              >
                Salt Lake Behavioral Health's Strong Hope
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='http://slco.org/youth/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Salt Lake County Youth Services
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='http://turningpointcenters.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Turning Point
              </List.Item>
            </List>
          </Grid.Column>

          <Grid.Column mobile={16} tablet={6} computer={6}>
            <Image className='sponsorsPic' src={sponsors} />
          </Grid.Column>

          <Grid.Column
            className='sponsorsColumn hidden-xs'
            mobile={0}
            tablet={5}
            computer={5}
          >
            <Image className='rightImage' src={huddle} />
            <List>
              <List.Header className='donorColumnHeader'>
                Our treatment partners mix and match the FTR pillars that work best for
                them. Some are exercise only; some combine exercise and nutrition; some
                choose exercise and art. One purchases memberships for their clients when
                they graduate. There are any number of ways treatment centers and sober
                living houses can involve their clients in our safe, active, healthy
                community. <br />
                Contact <a href={emailAddresses.nicolette}>Nicolette Pessetto</a> for our
                menu of services!{" "}
              </List.Header>
              <List.Item
                as='a'
                className='singleDonor'
                href='https://www.acquarecovery.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Acqua Treatment
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='http://www.ascendrecovery.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Ascend Recovery
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='http://www.balancehouseut.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Balance house
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='https://brightonrecoverycenter.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Brighton Recovery Center
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='https://addictionfree.com/about-us/our-centers/outpatient-services-salt-lake'
                target='_blank'
                rel='noopener noreferrer'
              >
                Cold Creek Behavioral Health
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='http://havenhelps.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                The Haven
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='http://www.recoveryways.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Recovery Ways
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='http://renaissanceranch.net/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Renaissance Ranch Outpatient
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='http://www.saltlakebehavioralhealth.com/military-mental-health-program/strong-hope-womens-mental-health-program'
                target='_blank'
                rel='noopener noreferrer'
              >
                Salt Lake Behavioral Health's Strong Hope
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='http://slco.org/youth/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Salt Lake County Youth Services
              </List.Item>
              <List.Item
                as='a'
                className='singleDonor'
                href='http://turningpointcenters.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Turning Point
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const styles = {
  topPadding: {
    paddingTop: "120px"
  }
};

export default Sponsors;
