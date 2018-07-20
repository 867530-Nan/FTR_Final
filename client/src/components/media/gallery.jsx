import React, { Component } from 'react'
import {  } from 'react-router-dom'
import { Grid, Image, Modal } from 'semantic-ui-react'
import axios from 'axios'
import '../../styles/gallery.css'
import pictureOne from '../../assets/images/gallery1.jpeg'
import pictureTwo from '../../assets/images/gallery2.jpeg'
import pictureThree from '../../assets/images/gallery3.jpeg'
import pictureFour from '../../assets/images/gallery4.jpeg'
import pictureFive from '../../assets/images/gallery5.jpeg'
import pictureSix from '../../assets/images/gallery6.jpeg'
import pictureEight from '../../assets/images/gallery8.jpeg'
import pictureNine from '../../assets/images/gallery9.jpeg'
import DonateButton from '../DonateButton'




class Gallery extends Component {
	state = { photos: [] }

	componentDidMount() {
		axios.get('api/instagram/index')
		.then( res => this.setState({ photos: res.data.data }) )
	}

	displayImages = () => {
		return this.state.photos.map( pic => 
			<Grid.Column computer={4} mobile={16} tablet={8} >
				<div style={styles.instaPics}>
					<Modal
						closeIcon={true}
						closeOnDimmerClick={true}
						closeOnDocumentClick={true}
						className="modalInsta"
						style={styles.modalInsta}
				    trigger={<Image className="singleInsta" src={pic.images.standard_resolution.url} />}
				  >
		      		<Image circular src={pic.images.standard_resolution.url} />
		      </Modal>
		    </div>
			</Grid.Column>
		)
	}

	render() {
		return (
			<div className="Background">
						
			<div className="mediaTopPadding" style={styles.mediaTopPadding} />
			 
				<div className="title">
						<h1 className="galleryTitle">Fit to Recover Gallery:</h1>
						<h3 className="galleryDesc">On the News, Around the Gym, and In the Community</h3>
				</div>	


		<Grid style={styles.mediaGrid}>
      <Grid.Column href="https://www.youtube.com/watch?v=6FCefn56X5I" className="mediaCard" mobile={16} tablet={8} computer={5}>
					<div className="mediaCardContent" style={styles.mediaCardContent} >
				    <Image src={pictureOne} alt="One year anniversay photo" />
				      <div className="mediaText">
				        One Year Anniversary,<br />unveiling Bouldering Wall.
				      </div>
				  </div>
			</Grid.Column>
			<Grid.Column className="mediaCard" mobile={16} tablet={8} computer={5} href="https://www.youtube.com/watch?v=GOGSNtlWOKg&feature=youtu.be">
				  <div className="mediaCardContent" style={styles.mediaCardContent} >
				    <Image src={pictureTwo} alt="FTR on the News Photo" />
				      <div className="mediaText">
				        November 2015,<br />Channel 4 tells our story.
				      </div>
				  </div>
		  </Grid.Column>
			<Grid.Column className="mediaCard" mobile={16} tablet={8} computer={5} href="http://fox13now.com/2014/11/15/program-using-fitness-to-help-treat-addictions-opens-new-facility/">
				  <div className="mediaCardContent" style={styles.mediaCardContent} >
				    <Image src={pictureThree} alt="FTR Moving to 789 West photo" />
				      <div className="mediaText">
				        Fit To Recover moves to 789 West.
				      </div>
				  </div>
		  </Grid.Column>
			<Grid.Column className="mediaCard" mobile={16} tablet={8} computer={5} href="https://www.youtube.com/watch?v=MFmxwWqVp-E&feature=youtu.be">
				  <div className="mediaCardContent" style={styles.mediaCardContent} >
				    <Image src={pictureFour} alt="Bootcamp 2013 Photo" />
				      <div className="mediaText">
				        Bootcamp, <br /> October 2013
				      </div>
				  </div>
		  </Grid.Column>
			<Grid.Column className="mediaCard" mobile={16} tablet={8} computer={5} href="https://www.youtube.com/watch?v=Mru8F-NIkfU&feature=youtu.be">
				  <div className="mediaCardContent" style={styles.mediaCardContent} >
				    <Image src={pictureFive} alt="The FTR Community" />
				      <div className="mediaText">
				        Meet Our Community
				      </div>
				  </div>
		  </Grid.Column>
			<Grid.Column className="mediaCard" mobile={16} tablet={8} computer={5} href="http://kutv.com/features/pay-it-forward/sweat-love-and-recovery">
				  <div className="mediaCardContent" style={styles.mediaCardContent} >
				    <Image src={pictureSix} alt="FTR Founder Receiving a gift" />
				      <div className="mediaText">
				        Fit to Recover receives a gift
				      </div>
				  </div>
		  </Grid.Column>
			<Grid.Column className="mediaCard" mobile={16} tablet={8} computer={5} href="https://www.youtube.com/watch?v=mqdRNKnV3Ew&feature=youtu.be">
				  <div className="mediaCardContent" style={styles.mediaCardContent} >
				    <Image src={pictureEight} alt="Screenshot from a Music Video" />
				      <div className="mediaText">
				        Music Video: <br/>Ian Acker, Addiction
				      </div>
				  </div>
		  </Grid.Column>
			<Grid.Column className="mediaCard" mobile={16} tablet={8} computer={5} href="https://vimeo.com/108387904">
				  <div className="mediaCardContent" style={styles.mediaCardContent} >
				    <Image src={pictureNine} alt="Screenshot from a Music Video" />
				      <div className="mediaText">
				        Strong, Confident Women
				      </div>
				  </div>
		  </Grid.Column>
		</Grid>

					<div>
						<a className="instaTitle" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/fit_2recover/?hl=en">
							-- #teamFTR --
						</a>
					</div>
					<Grid className="instaGrid" style={{height: '700px', width: '100%'}}>
							{this.displayImages()}
					</Grid>
					

	
			</div>

		)
	}
}

const styles = {
	mediaTopPadding: {
		paddingTop: '65px'
	},
	mediaGrid: {
		width: '100%',
		margin: '0 auto',
	},
	modalInsta: {
		height: '500px',
		width: '500px',
		marginTop: '-250px',
    marginLeft: '-250px',
	},
	instaPics: {
		cursor: 'pointer'
	},
	
}

export default Gallery;