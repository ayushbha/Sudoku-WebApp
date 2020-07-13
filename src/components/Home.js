import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
	return(
		<div>
			<h1 style={{marginTop:'15%'}}>Sudoku Game</h1>
			<p>Click the button to play a New Game</p>
			<Link to='/game'><button className="button">New Game</button></Link>
		</div>
	)
}

export default Home;