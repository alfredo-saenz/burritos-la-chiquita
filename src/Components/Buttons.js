import { Button } from '@material-tailwind/react';

const Buttons = ({ category, onClick }) => {
	return (
		<div className='btn'>
			<Button onClick={onClick}>{category}</Button>
		</div>
	);
};

export default Buttons;
