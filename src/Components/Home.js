import React from 'react';
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

function Home(props) {
    return (
			<div>
				<h1 class='text-xl font-bold'>Burritos La Chiquita</h1>
				<Link to='/menu'>
				<Button>Menu</Button>
				</Link>
				<Button>Location</Button>
			</div>
		);
}

export default Home;
