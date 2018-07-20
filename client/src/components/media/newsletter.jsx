import React, { Component } from 'react'
import { } from 'react-router-dom'
import '../../styles/newsletter.css'
import { Grid } from 'semantic-ui-react'
import { media2015, media2016, media2017, media2018 } from './mediaFiles'
import axios from 'axios'

import BLink from '../BLink'


class Newsletter extends Component {

	state = { newsletters: [] }

	componentDidMount() {
		axios.get("/api/newsletters")
		.then( res => this.setState({ newsletters: res.data }))
		.catch( res => console.log(res))
	}

	compare = (a,b) => {
    if (a.index < b.index)
      return 1;
    if (a.index > b.index)
      return -1;
    return 0;
  }

	displayNewsletter = items => {
		const newArr = this.state.newsletters.sort(this.compare)
		return newArr.map(element => {
			return(
				<Grid.Column mobile={16} tablet={8} computer={4}>
					<BLink className="newsletterLink" target="_blank" rel="noopener noreferrer" href={element.link}>
						<div className="monthlyNewsletter">
								<div className="eachOne">
									<span className="glyphicon glyphicon-arrow-down"></span>
									<p className="month">&nbsp;{element.title}&nbsp;</p>
									<span className="glyphicon glyphicon-arrow-down"></span>
								</div>
									<img className="img-responsive"  src={element.image} alt={element.alt} />
							</div>
					</BLink>
				</Grid.Column>
			)
		});
	}

	render() {

		return (
<div>
			<div className="topPaddingNewsletter" style={styles.topPaddingNewsletter}></div>
				<div className="newsletterHeader" style={styles.newsletterHeader}>
					<span className="glyphicon glyphicon-envelope" style={styles.glyphiconEnvelope}></span>
						<h1 className="newsletterHeaderWords" style={styles.newsletterHeaderWords}>&nbsp;Newsletter Archive&nbsp;</h1>
					<span className="glyphicon glyphicon-envelope" style={styles.glyphiconEnvelope}></span>
				</div>
				<div className="aboutNewsletter" style={styles.aboutNewsletter}>
					<h2 className="aboutNewsletterWords">Keeping the Community Informed of FTR's 4 Pillars</h2>
				</div>
				
				<div className="year2017" style={styles.year2017}>
					<h3 style={styles.year2017Words}>2018 Newsletters</h3>
				</div>

			<Grid centered>
				{ this.state.newsletters.length && this.displayNewsletter() }
			</Grid>
</div>
		)
	}
}

const styles = {
	topPaddingNewsletter: {
		paddingTop: '65px',
	},
	newsletterHeader: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	newsletterHeaderWords: {
		fontSize: '6em',
		fontFamily: 'Lato',
		fontWeight: 300,
		margin: '0',
		padding: '0',
	},
	glyphiconEnvelope: {
		fontSize: '6em',
	},
	aboutNewsletter: {
		display: 'flex',
		justifyContent: 'center',
		alighItems: 'center',
	},
}

export default Newsletter;