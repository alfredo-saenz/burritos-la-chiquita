const Section = ({ menu }) => {
	return (
		<section>
			<article>
				
				<div className='item'>
					<div className='title'>{menu.title}</div>
					<div className='price'>${menu.price}</div>
					<hr />
					<p>{menu.desc}</p>
				</div>
			</article>
		</section>
	);
};
export default Section;
