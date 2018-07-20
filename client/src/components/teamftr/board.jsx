import React, { Component } from 'react'
import {  } from 'react-router-dom'
import { Card } from 'semantic-ui-react'
import axios from 'axios'
import '../../styles/board.css'


//useless comment


class Board extends Component {

	state = { board: [] }

	componentDidMount(){
    this.fetchBoard()
  }

  fetchBoard = () => {
    axios.get('/api/boards/')
    .then( res => this.setState({ board: res.data, showAll: true }))
    .catch( res => console.log(res))
	}

	compare = (a,b) => {
    if (a.index < b.index)
      return -1;
    if (a.index > b.index)
      return 1;
    return 0;
  }

	displayBoard = () => {
		const colors = ["red",
			"orange",
			"yellow",
			"olive",
			"green",
			"teal",
			"blue",
			"violet",
			"purple",
			"pink",
			"brown",
			"grey"]
		const newArr = this.state.board.sort(this.compare)
		return newArr.map( single => {
			return(
				<Card 
					className="singleBoardCard"
					color={colors[Math.floor(Math.random()*colors.length)]}
					image={single.image}
					header={single.name}
					meta={single.title}
					description={single.bio}
				/>
			)
		})
	}


	render() {
		return (
			<div style={styles.boardBackground} >		 
				<Card.Group className="boardCardGroup" stye={styles.boardCardGroup}>
					{this.state.board && this.displayBoard() }
				</Card.Group>
			</div>

		)
	}
}

const styles = {
	boardBackground: {
		paddingTop: '72px',
	},
	boardCardGroup: {
		width: '100%',
		margin: '0 auto',
	}
}

export default Board;