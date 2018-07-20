import React, { Component } from 'react'
import { Form, Button, Modal, Icon, Header } from 'semantic-ui-react'

class TestimonialForm extends Component {

	state = { modalOpen: false, author: '', date: '', subject: '', body: '' }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  handleAuthor = (e) => {
    this.setState({author: e.target.value});
  }

  handleDate = (e) => {
    this.setState({date: e.target.value});
  }

  handleSubject = (e) => {
    this.setState({subject: e.target.value});
  }

  handleBody = (e) => {
    this.setState({body: e.target.value});
  }

	createTestimonial(e) {
		const test = {
			author:  this.state.author,
			date: this.state.date,
			subject: this.state.subject,
			body: this.state.body
		}
		if (this.state.author === '' || this.state.date === '' || this.state.body === '') {
		return (
				this.handleClose()
			)
			} else {
				(
				e.preventDefault(),
				this.props.addTestimonial(test),
				this.handleClose()
			)
		}
	}

	cancelTestimonial(e){
		e.preventDefault();
		this.props.toggleVisibility();
	}



	render(){

		return(
			<div className="top-padding">
			<Form ref={(input) => this.testimonialForm = input}>
		    <Form.Group widths='equal' >
		      <Form.Field required>
		      	<label>Name</label>
		      	<input

		      		id='author'
		      		value={this.state.author}
							onChange={this.handleAuthor} 
							placeholder="What's your name?" 
		      		/>
		      </Form.Field>
		      <Form.Field required>
		      	<label>Date</label>
		      	<input
		      		id='date'
		      		value={this.state.date}
		      		onChange={this.handleDate} 
		      		placeholder='When Was This?' 
		      		/>
		      </Form.Field>
		    </Form.Group>
		    <Form.Field>
			    <label>Subject</label>
			    <input
			    	required 
			    	id="subject"
			    	value={this.state.subject}
			    	onChange={this.handleSubject} 
			    	placeholder='Subject' />
		    </Form.Field>
		    <Form.Field required>
		    	<label>Share Message Below</label>
		    	<input 
	    		id='body'
	    		value={this.state.body}
	    		required 
	    		onChange={this.handleBody} 
	    		placeholder='Share your experience with FTR'
	    		/>
	    	</Form.Field>
	    	<Modal
	        trigger={<Button style={{marginTop: '20px'}} onClick={this.handleOpen}>Confirm</Button>}
	        open={this.state.modalOpen}
	        onClose={this.handleClose}
	        basic
	        size='small'
	        style={{paddingTop: '200px', height: '600px'}}
	      >
	        <Header icon='browser' content='Please Confirm Submission' />
	        <Modal.Content>
	          <h3>Are you sure you'd like to add this testimonial?</h3>
	        </Modal.Content>
	        <Modal.Actions>
	          <Button id='submit' type='submit' control={Button} content='confirm' color='green' onClick={(e) => this.createTestimonial(e)} inverted>
	            <Icon name='checkmark' /> Submit
	          </Button>
	        </Modal.Actions>
	        <Modal.Actions>
	          <Button color='red' onClick={(e) => this.cancelTestimonial(e) } inverted>
	            <Icon name='remove' /> Cancel
	          </Button>
	        </Modal.Actions>
	      </Modal>

		   </Form>
		   </div>
		)
	}
  
}


export default TestimonialForm;




