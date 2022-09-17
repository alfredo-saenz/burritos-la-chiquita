import React from 'react';
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

function Home() {
    return (
			<div className='home'>
				<h1 class='text-xl font-bold'>Burritos La Chiquita</h1>
				<div className='home-button'>
					<Link to='/menu'>
						<Button className='button-56'>Menu</Button>
					</Link>
					<Link to='/location'>
						<Button className='button-56'>Location</Button>
					</Link>
				</div>
			</div>
		);
}

export default Home;
