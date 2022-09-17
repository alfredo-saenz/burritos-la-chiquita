import { Button } from '@material-tailwind/react';

const Buttons = ({ category, onClick }) => {
	return (
		<div className='btn'>
			<Button className='button-56' onClick={onClick}>{category}</Button>
		</div>
	);
};

export default Buttons;
