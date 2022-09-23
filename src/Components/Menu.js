import React from 'react';
import { useState } from 'react'
import data from './data';
import Buttons from './Buttons';
import Section from './section';

function Menu(props) {
      const [show, setShow] = useState(data);
	   const categories = data.reduce(
				(accum, current) => {
					if (!accum.includes(current.category)) {
						accum.push(current.category);
					}
					return accum;
				},
				['All']
			);
			const handleClick = (c) => {
				if (c !== 'All') {
					const newMenu = data.filter((m) => m.category === c);
					setShow(newMenu);
				} else {
					setShow(data);
				}
			};
    
	return (
		<div className='App'>
			<h1 className='menu-h1'>Our Menu </h1>
			<div className='underline'></div>
			<div className='btn-container'>
				{categories.map((c) => (
					<Buttons
						className='button-56'
						category={c}
						onClick={() => handleClick(c)}
					/>
				))}
			</div>
			<div className='container'>
				{show.map((m) => (
					<Section menu={m} />
				))}
			</div>
		</div>
	);

}

export default Menu;
