import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
	return(
		<div>
			<h1 style={{marginTop:'15%'}}>Sudoku Game</h1>
			<p>Click the button to play a New Game</p>
			<Link to={{pathname:'/game',mode:"Very Easy"}}><button className="button">Very Easy</button></Link>
			<Link to={{pathname:'/game',mode:"Easy"}}><button className="button">Easy</button></Link>
			<Link to={{pathname:'/game',mode:"Medium"}}><button className="button">Medium</button></Link>
			<Link to={{pathname:'/game',mode:"Hard"}}><button className="button">Hard</button></Link>
		</div>
	)
}

export default Home;