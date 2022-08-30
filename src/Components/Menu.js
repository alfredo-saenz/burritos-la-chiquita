import React from 'react';
import { Button } from '@material-tailwind/react';

function Menu(props) {
	return (
		<div>

            <Button>Burritos</Button>
            <Button>Tortas</Button>
            <Button>La Chiquita Favorites</Button>
            <Button>Tacos/Quesadillas</Button>
            <Button>Platillos/Menudo</Button>
		</div>
	);
}

export default Menu;
