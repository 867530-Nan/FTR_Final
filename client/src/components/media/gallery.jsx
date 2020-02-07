import React, { Component } from "react";
import styled from "styled-components";
import {} from "react-router-dom";
import { Grid, Image, Modal } from "semantic-ui-react";
import axios from "axios";
import "../../styles/gallery.css";
import pictureOne from "../../assets/images/gallery1.jpeg";
import pictureTwo from "../../assets/images/gallery2.jpeg";
import pictureThree from "../../assets/images/gallery3.jpeg";
import pictureFour from "../../assets/images/gallery4.jpeg";
import pictureFive from "../../assets/images/gallery5.jpeg";
import pictureSix from "../../assets/images/gallery6.jpeg";
import pictureEight from "../../assets/images/gallery8.jpeg";
import pictureNine from "../../assets/images/gallery9.jpeg";
import DonateButton from "../DonateButton";
import { TopPadding } from "../ftr_home";

class Gallery extends Component {
  state = { photos: [], gallery: [] };

  componentDidMount() {
    axios
      .get("api/instagram/index")
      .then(res => this.setState({ photos: res.data.data }));
    axios.get("api/media").then(res => this.setState({ gallery: res.data }));
  }

  displayImages = () => {
    return this.state.photos.map(pic => (
      <Grid.Column computer={4} mobile={16} tablet={8}>
        <div style={styles.instaPics}>
          <Modal
            closeIcon={true}
            closeOnDimmerClick={true}
            closeOnDocumentClick={true}
            className="modalInsta"
            style={styles.modalInsta}
            trigger={
              <Image
                className="singleInsta"
                src={pic.images.standard_resolution.url}
              />
            }
          >
            <Image circular src={pic.images.standard_resolution.url} />
          </Modal>
        </div>
      </Grid.Column>
    ));
  };

  displayGallery = () => {
    return this.state.gallery.map(s => {
      return (
        <SingleGallery href={s.link}>
          <Image src={s.image} alt="One year anniversay photo" />
          <div className="mediaText">{s.name}</div>
        </SingleGallery>
      );
    });
  };

  render() {
    return (
      <div className="Background">
        <TopPadding />

        <div className="title">
          <h1 className="galleryTitle">Fit to Recover Gallery:</h1>
          <h3 className="galleryDesc">
            On the News, Around the Gym, and In the Community
          </h3>
        </div>

        {this.state.gallery.length ? (
          <GalleryWrap>{this.displayGallery()}</GalleryWrap>
        ) : null}

        <div>
          <a
            className="instaTitle"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/fit_2recover/?hl=en"
          >
            -- #teamFTR --
          </a>
        </div>
        <Grid
          className="instaGrid"
          style={{ height: "initial", width: "100%", margin: "15px" }}
        >
          {this.displayImages()}
        </Grid>
      </div>
    );
  }
}

const styles = {
  mediaTopPadding: {
    paddingTop: "65px"
  },
  mediaGrid: {
    width: "100%",
    margin: "0 auto"
  },
  modalInsta: {
    height: "500px",
    width: "500px",
    marginTop: "-250px",
    marginLeft: "-250px"
  },
  instaPics: {
    cursor: "pointer"
  }
};

const GalleryWrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SingleGallery = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 30px;
  max-width: 400px;
  min-width: 400px;

  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
`;

export default Gallery;
