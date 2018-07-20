import React, { Component } from 'react'
import axios from 'axios'
import { } from 'react-router-dom'
import '../../styles/testimonials.css'
import { Segment } from 'semantic-ui-react'
import TestimonialForm from './TestimonialForm'
import TestimonialList from './TestimonialList'
import DonateButton from '../DonateButton'


class Testimonials extends Component {
	state = { testimonials: [], editToggle: false} 

	componentDidMount() {
		axios.get('/api/testimonials')
			.then( testimonials => this.setState({ testimonials: testimonials.data }))
	}

	setLoaded = () => {
    this.setState({ loaded: true });
  }

	toggleVisibility = () => this.setState({editToggle: !this.state.editToggle})

	addTestimonial = (test) => {
		const { testimonials } = this.state;
		axios.post('/api/testimonials/', test )
			.then ( res => this.setState({ testimonials: [res.data, ...testimonials] }))
		this.toggleVisibility();
	}

	render() {
			if (this.state.editToggle === false)
				return (
					<div>
						<div className="testimonialTopPadding" />
						<div className="testTopPhoto"> 
							<div className="pageHeader" style={styles.pageHeader}>Testimonials</div>
						</div>
						<div className="otherPeople" style={styles.otherPeople}>
							<div className="otherPeopleWords" style={styles.otherPeopleWords}>Read about FTR experiences below, or add your own:</div>
						</div>
						<div className="writeTestimonialButton" style={styles.writeTestimonialButton} onClick={this.toggleVisibility}>Share Your Testimonial</div>
						<Segment padded raised className="testimonialsList">
							<div className="testimonialsMarginBottom">
								<TestimonialList testimonials={this.state.testimonials} />
							</div>
						</Segment>
					</div>
			) 
			else 
				return (
					<div>
						<div className="testimonialTopPadding" />
						<div className="testTopPhoto"> 
							<div className="pageHeader" style={styles.pageHeader}>Testimonials</div>
						</div>
						<div className="otherPeople" style={styles.otherPeople}>
							<div className="otherPeopleWords" style={styles.otherPeopleWords}>Tell us your story by completing the form below..</div>
						</div>
						<div className="writeTestimonialButton" style={styles.writeTestimonialButton} onClick={this.toggleVisibility}>Cancel</div>
						<Segment padded raised>
							<TestimonialForm addTestimonial={this.addTestimonial} toggleVisibility={this.toggleVisibility}/>
						</Segment>
					</div>
		)
	}
}

const styles = {
	pageHeader: {
		fontSize: '8em',
		fontWeight: 300,
	},
	otherPeople: {
		height: '100px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	otherPeopleWords: {
		textAlign: 'center',
		fontSize: '40px',
		fontWeight: 300,
	}
}

export default Testimonials;