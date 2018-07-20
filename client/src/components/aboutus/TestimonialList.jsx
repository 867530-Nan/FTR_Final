import React from 'react'
import { Item, Divider } from 'semantic-ui-react'
import '../../styles/singleTestimonial.css'

const TestimonialList = ({ testimonials }) => (
	<div className="testimonials">
		{ testimonials.map( test => 
		    <div className="testimonialList">
				<Item className="entireTestimonial" style={styles.entireTestimonial}>
		      <Item.Content>
		        <Item.Header as="h3" className="testAuthor" style={styles.testAuthor}>{test.author}</Item.Header>
		        <Item.Extra as="h6" className="testDate" style={styles.testDate}>{test.date}</Item.Extra>
		        <Item.Meta as="h5"className="testSubject" style={styles.testSubject}>{test.subject}</Item.Meta>
		        <Item.Description as="h5" className="testBody" style={styles.testBody}>{test.body}</Item.Description>
		      </Item.Content>
		    </Item>
		    <Divider />
		  </div>
			)
		}
	</div>
	)

const styles = {
	
}


export default TestimonialList;




