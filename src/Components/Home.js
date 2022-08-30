import React from 'react';
import { Button } from "@material-tailwind/react";

function Home(props) {
    return (
			<div>
				<h1 class='text-xl font-bold'>Burritos La Chiquita</h1>
				<Button>Menu</Button>
				<Button>Location</Button>
			</div>
		);
}

export default Home;
