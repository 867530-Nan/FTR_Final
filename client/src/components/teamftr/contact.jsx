import React, { Component } from "react";
import {} from "react-router-dom";
import "../../styles/contact.css";
import { Card } from "semantic-ui-react";
import DonateButton from "../DonateButton";
import { TopPadding } from "../ftr_home";
import { emailAddresses } from "../../assets/emailAddresses";

class Contact extends Component {
  render() {
    return (
      <div>
        <TopPadding />
        <div className="backgroundCollage" style={styles.backgroundCollage}>
          <div className="whiteList" style={styles.whiteList}>
            <Card.Group>
              <Card
                color="red"
                className="cardStyle"
                style={styles.cardStyle}
                fluid
                raised
              >
                <Card.Content as="a" href={emailAddresses.nicolette}>
                  <Card.Header>Email Us!</Card.Header>
                  <Card.Meta>We'd love to hear from you</Card.Meta>
                </Card.Content>
              </Card>

              <Card
                color="yellow"
                className="cardStyle"
                style={styles.cardStyle}
                fluid
                raised
              >
                <Card.Content
                  as="a"
                  href="http://visitor.r20.constantcontact.com/d.jsp?llr=s9kes9uab&p=oi&m=1121877896018&sit=fqz58m7jb&f=75b13f7a-7efc-453f-84fa-d1d1985a3468"
                >
                  <Card.Header>Sign-up for our Newsletter</Card.Header>
                  <Card.Meta>Updated monthly keeping you Informed</Card.Meta>
                </Card.Content>
              </Card>

              <Card
                color="green"
                className="cardStyle"
                style={styles.cardStyle}
                fluid
                raised
              >
                <Card.Content as="a" href="http://food2recover.blogspot.com/">
                  <Card.Header>Food To Recover Blog</Card.Header>
                  <Card.Meta>
                    Recipe Ideas, Cooking Classes, and More!
                  </Card.Meta>
                </Card.Content>
              </Card>

              <Card
                color="teal"
                className="cardStyle"
                style={styles.cardStyle}
                fluid
                raised
              >
                <Card.Content
                  as="a"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://nebula.wsimg.com/71dcfd481b59b7dabdd44670807d6abd?AccessKeyId=6C572ACEE6337077909C&disposition=0&alloworigin=1"
                >
                  <Card.Header>Spread the FTR Philosophy</Card.Header>
                  <Card.Description>Take a Brochure with You</Card.Description>
                </Card.Content>
              </Card>

              <Card
                color="blue"
                className="cardStyle"
                style={styles.cardStyle}
                fluid
                raised
              >
                <Card.Content
                  as="a"
                  href="https://www.google.com/maps/place/Fit+to+Recover/@40.7399488,-111.9142314,17z/data=!4m13!1m7!3m6!1s0x8752f4da86d2a85f:0x98c2d4e4a171bc13!2s789+W+1390+S,+Salt+Lake+City,+UT+84104!3b1!8m2!3d40.7392009!4d-111.9137379!3m4!1s0x8752f4da86ddc03f:0x24d4219acbd712ad!8m2!3d40.739265!4d-111.913712"
                >
                  <Card.Header>Address:</Card.Header>
                  <Card.Description>&#123; Google Maps &#125;</Card.Description>
                  <Card.Meta>789 West 1390 South</Card.Meta>
                  <Card.Meta>Salt Lake City, UT 84104</Card.Meta>
                </Card.Content>
              </Card>

              <Card
                color="violet"
                className="cardStyle"
                style={styles.cardStyle}
                fluid
                raised
              >
                <Card.Content as="a" href="tel:801-410-8988">
                  <Card.Header>Phone</Card.Header>
                  <Card.Description as="a">801-410-8988</Card.Description>
                </Card.Content>
              </Card>
            </Card.Group>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  topPaddingContact: {
    marginTop: "52px"
  },
  whiteList: {
    height: "500px",
    width: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: "10px"
  },
  cardStyle: {
    textAlign: "center"
  }
};

export default Contact;
