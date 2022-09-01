import React from 'react';
import { Button } from '@material-tailwind/react';
import { useState } from 'react'
function Menu(props) {
      const [show, setShow] = useState(false);
        const handleClick = (event) => {
		// 👇️ toggle shown state
		setShow((current) => !current);

					// 👇️ or simply set it to true
					// setIsShown(true);
				};
	return (
		<div>

			{show ? <h2>Beef Burrito </h2> : null}
			<toggle>
				<Button onClick={handleClick}>Burritos</Button>{' '}
			</toggle>


            <Button>Burritos</Button>
            <Button>Tortas</Button>
            <Button>La Chiquita Favorites</Button>
            <Button>Tacos/Quesadillas</Button>
            <Button>Platillos/Menudo</Button>
		</div>
	);
}

export default Menu;
