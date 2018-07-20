import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Image } from 'semantic-ui-react'
import photo from '../assets/images/404.jpg'

class NoMatch extends Component {
	render() {
			return(
		<div>
			<Image style={{width: '100%', margin: '0', paddingTop: '70px', margin: '0 auto'}} src={photo} fluid />
		</div>
	)
	}
}

export default NoMatch;