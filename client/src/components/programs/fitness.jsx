import React, { Component } from 'react';
import {} from 'react-router-dom';
import { Grid, Image } from 'semantic-ui-react';
import '../../styles/fitness.css';
import bootcamp from '../../assets/images/BC-quarter-raiseCROP.jpeg';
import sportsPic from '../../assets/images/teamSports.jpeg';
import high from '../../assets/images/High-Fitness-Logo-1.jpg';
import recovery from '../../assets/images/recovery_yoga.jpg';
import capoeira from '../../assets/images/capoeira.PNG';
import ftrFitness from '../../assets/images/ftrFitness.png';
import DonateButton from '../DonateButton';
import { Lazy } from 'react-lazy';
import axios from 'axios';
import styled from 'styled-components';
import { TopPadding } from '../ftr_home';

const ImageWrap = styled.div`
	flex: 1 1 40%;
	text-align: center;
	font-size: 30px;
	color: dark-green;
`;

const FitnessClassWrap = styled.div`
	height: 00px;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 768px) {
		height: 150px;
	}
`;
const FitnessClassHeader = styled.h2`
	font-size: 42px;
	font-weight: 500;
	text-align: center;
	padding: 20px 15px;
	@media (max-width: 768px) {
		font-size: 24px;
	}
`;

class Fitness extends Component {
	state = { classes: [] };

	componentDidMount() {
		axios.get('/api/fitness').then((res) => this.setState({ classes: res.data }));
	}

	displayClasses = () => {
		return this.state.classes.map((single, index) => {
			if (index % 2 === 0) {
				return (
					<Grid columns={2} stackable className="programs programsBlack" style={styles.programs}>
						<Grid.Column computer={10} tablet={8} mobile={16}>
							<div className="programDesc" style={styles.programDesc}>
								<h2 className="classHeader" style={styles.classHeaderWhite}>
									{single.title}
								</h2>
								<h4 className="classLed" style={styles.classLedWhite}>
									{single.sub_title}
								</h4>
								<p className="classParaWhite" style={styles.classParaWhite}>
									{single.body}
								</p>
							</div>
						</Grid.Column>
						<Grid.Column computer={6} tablet={8} mobile={16}>
							<ImageWrap className="programPic" style={styles.programPic}>
								<Image
									className="bcPhoto img-responsive"
									style={styles.bcPhoto}
									src={single.image}
									alt={single.title}
								/>
							</ImageWrap>
						</Grid.Column>
					</Grid>
				);
			} else {
				return (
					<div>
						<Grid columns={2} stackable className="programs" style={styles.programs}>
							<Grid.Column computer={6} tablet={8} mobile={16}>
								<ImageWrap className="programPic" style={styles.programPic}>
									<Image
										className="bcPhoto img-responsive"
										style={styles.bcPhoto}
										src={single.image}
										alt={single.title}
									/>
								</ImageWrap>
							</Grid.Column>
							<Grid.Column computer={10} tablet={8} mobile={16}>
								<div className="programDesc" style={styles.programDesc}>
									<h2 className="classHeader" style={styles.classHeader}>
										{single.title}
									</h2>
									<h4 className="classLed" style={styles.classLed}>
										{single.sub_title}
									</h4>
									<p className="classPara" style={styles.classPara}>
										{single.body}
									</p>
								</div>
							</Grid.Column>
						</Grid>
						<a
							className="middleLink"
							style={styles.middleLink}
							target="_blank"
							rel="noopener noreferrer"
							href="/calendar"
						>
							<h4 className="middleLinkWords" style={styles.middleLinkWords}>
								Click Here for FTR's Fitness Class Calendar
							</h4>
						</a>
					</div>
				);
			}
		});
	};

	render() {
		return (
			<div>
				<TopPadding />

				<div className="introFitness" style={styles.introFitness}>
					<div>
						<h2 className="introHeader" style={styles.introHeader}>
							Fitness
						</h2>
						<p className="introEnergy" style={styles.introEnergy}>
							All inclusive community of discipline, humility, patience, and trust
						</p>
					</div>
				</div>

				<div>
					<a
						className="middleLink topLink"
						alt="link to google calendar of fitness courses"
						style={styles.middleLink}
						target="_blank"
						rel="noopener noreferrer"
						href="/calendar"
					>
						<h4 className="middleLinkWords" style={styles.middleLinkWords}>
							Click Here for FTRs Class Calendar
						</h4>
					</a>
					{/* <a
						href="#fitness-jump"
						className="glyphicon glyphicon-chevron-down"
						alt="downfacing chevron"
						style={styles.glyphiconChevronDown}
					>
						{' '}
					</a> */}
				</div>

				{/* <FitnessClassWrap> */}
				<FitnessClassHeader>Our Classes</FitnessClassHeader>
				{/* </FitnessClassWrap> */}

				{this.state.classes.length > 0 && this.displayClasses()}
			</div>
		);
	}
}

const styles = {
	topFitnessPadding: {
		paddingTop: '120px'
	},
	introFitness: {
		width: '100%',
		height: '150px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center'
	},
	introHeader: {
		lineHeight: 1,
		fontFamily: 'Helvetica',
		fontWeight: 300,
		padding: '0',
		margin: '0',
		fontSize: '5em',
		color: 'black'
	},
	introEnergy: {
		fontFamily: 'Helvetica',
		fontWeight: 300,
		fontStyle: 'oblique',
		padding: '0',
		margin: '0',
		fontSize: '2.5em',
		color: 'black'
	},
	glyphiconChevronDown: {
		fontSize: '30px',
		color: 'white'
	},
	programs: {
		width: '100%',
		height: '350px',
		display: 'flex',
		alignItems: 'center',
		margin: '0 auto'
	},
	oddClass: {
		order: 2
	},
	evenClass: {
		order: 1
	},
	programPic: {
		flex: '1 1 40%',
		textAlign: 'center',
		fontSize: '30px',
		color: 'darkGreen'
	},
	bcPhoto: {
		borderRadius: '2px',
		height: '325px',
		margin: '0 auto'
	},
	programDesc: {
		flex: '1 1 60%',
		padding: '0 30px'
	},
	classPara: {
		fontSize: '1.1em',
		fontWeight: 400
	},
	classHeaderWhite: {
		color: 'white'
	},
	classLedWhite: {
		fontSize: '1.4em',
		color: 'white'
	},
	classParaWhite: {
		fontSize: '1.1em',
		fontWeight: 400,
		color: 'white'
	},
	middleLink: {
		padding: '10px 0',
		width: '100%',
		margin: '0 auto',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
};

export default Fitness;
