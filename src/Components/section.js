const Section = ({ menu }) => {
	return (
		<section>
			<article>
				<div className='item'>
					<div className='title'>{menu.title}/{menu.desc}</div>
					{/* <p>{menu.desc}</p> */}
					<div className='price'>${menu.price}</div>
				</div>
			</article>
		</section>
	);
};
export default Section;
