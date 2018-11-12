import React, { Component } from "react";
import {} from "react-router-dom";
import "../../styles/communityservice.css";
import axios from "axios";
import { Grid, Image, Modal, Icon, Reveal } from "semantic-ui-react";
import DonateButton from "../DonateButton";
import { TopPadding } from "../ftr_home";

class CommunityService extends Component {
  state = { photos: [] };

  componentDidMount() {
    axios
      .get("api/instagram/service")
      .then(res => this.setState({ photos: res.data.data }))
      .then(res => this.checkWidth());
  }

  checkWidth = () => {
    if (window.innerWidth < 992) {
      let photos = this.state.photos;
      photos.pop();
      photos.pop();
      this.setState({ photos: photos });
    } else if (window.innerWidth < 1200) {
      let photos = this.state.photos;
      photos.pop();
      this.setState({ photos: photos });
    } else {
      return;
    }
  };

  displayImages = () => {
    return this.state.photos.map((pic, index) => (
      <Grid.Column
        computer={4}
        mobile={16}
        tablet={8}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <a
          className={`instaLink instaImage${index}`}
          href="https://www.instagram.com/fit_2recover_service/"
        >
          <div style={styles.instaPics}>
            <Image
              src={pic.images.standard_resolution.url}
              style={{ maxHeight: "300px", borderRadius: "30px" }}
            />
          </div>
        </a>
      </Grid.Column>
    ));
  };

  render() {
    return (
      <div>
        <TopPadding />

        <div className="communityServiceHeaderPhoto">
          <div className="communityServiceText">
            <div
              className="communityServiceHeaderTitle"
              style={styles.communityServiceHeaderTitle}
            >
              FTR Community Service
            </div>
            <div
              className="communityServiceHeaderShort"
              style={styles.communityServiceHeaderShort}
            >
              To step outside ourselves, our issues, and give back without
              expectations
            </div>
          </div>
        </div>

        <div className="howWeServe">How We Serve:</div>

        <div className="whatWeDo" style={styles.whatWeDo}>
          <div className="whatWeDoLeft">
            <div className="whatWeDoText">Around The Gym:</div>
          </div>
          <div className="whatWeDoRight">
            <div className="serviceMeansText">
              Service means reaching out to strangers, picking up after
              yourself, giving someone a ride, or simply cleaning the gym.
              <br />
              <br />
              Treating others the way you want to be treated, at all times.
            </div>
          </div>
        </div>

        <div className="whatWeDo" style={styles.whatWeDo}>
          <div className="whatWeDoLeftWomens">
            <div className="whatWeDoText">Women's Group</div>
          </div>
          <div className="whatWeDoRightWomens">
            <div className="serviceMeansText">
              Providing a safe place for women to discuss issues, receive
              feedback, and share experiences of strength and hope with other
              women. It is crucial to form bonds and friendships with other
              women in recovery.
              <br />
              <br /> Thursdays: 7-8pm @ FTR
              <br />
              <br />{" "}
              <a href="mailto:contact@fit2recover.org">
                Click here for more information on Woman's Group!
              </a>
            </div>
          </div>
        </div>

        <div className="whatWeDo" style={styles.whatWeDo}>
          <div className="whatWeDoLeftCommunity">
            <div className="whatWeDoText">In The Community</div>
          </div>
          <div className="whatWeDoRightCommunity">
            <div className="serviceMeansText">
              We're giving back through serving the homeless, clothing drives,
              Hike for Mental Health, Relay for Life, Safe Kids Fair, and dozens
              of other activitities around our community.
            </div>
          </div>
        </div>

        <div
          style={styles.serviceInstaTitle}
          href="https://www.instagram.com/fit_2recover_service/"
        >
          -- @fit_2Recover_service --{" "}
        </div>
        <Grid
          className="instaGrid"
          style={{
            height: "100%",
            width: "100%",
            margin: "0",
            justifyContent: "space-around"
          }}
        >
          {this.displayImages()}
        </Grid>

        <div style={styles.whereWe} className="hidden-xs">
          <div style={styles.whereWeWords}>
            In Recovery, dedicating time &amp; effort to a greater cause,
            without any personal gain, allows us to change our mentality of the
            self-seeking thoughts & actions we once had.
          </div>
        </div>

        <div className="alwaysHappening">
          <a className="aService" href="mailto:contact@fit2recover.org">
            Service opportunities are always happening, email us for more
            information.
            <Icon
              name="mail outline"
              style={{ marginLeft: "15px" }}
              color="white"
            />
          </a>
        </div>
      </div>
    );
  }
}

const styles = {
  communityServiceHeaderTitle: {
    fontFamily: "Raleway"
  },
  modalInsta: {
    height: "500px",
    width: "500px",
    marginTop: "-250px",
    marginLeft: "-250px"
  },
  communityServiceHeaderShort: {
    fontFamily: "Raleway",
    fontweight: 500,
    fontStyle: "italic"
  },
  whatWeDo: {
    height: "300px",
    display: "flex"
  },
  serviceInstaTitle: {
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "24px"
  },
  whereWe: {
    height: "100%",
    display: "flex",
    padding: "50px",
    alignItems: "center",
    textAlign: "center",
    lineHeight: "1"
  },
  womensGroup: {
    textAlign: "center",
    height: "200px",
    display: "flex"
  },
  whereWeWords: {
    fontSize: "36px",
    color: "#8A0035"
  },
  womensGroupTitle: {
    backgroundColor: "#4FA2BA",
    color: "white",
    width: "35%",
    alignSelf: "center",
    height: "100%",
    fontSize: "28px",
    padding: "80px 0",
    lineHeight: "1"
  },
  womensGroupWords: {
    backgroundColor: "#034E63",
    color: "white",
    width: "100%",
    alignSelf: "center",
    height: "100%",
    fontSize: "20px",
    padding: "60px 20px 0px 20px"
  }
};

export default CommunityService;
