/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with ID "counter",
 * with a small offset from the top for better visual placement.
 *
 * @format
 */

const Button = ({ text, className, id, view }) => {
	return (
		<a
			onClick={(e) => {
				if (view) return;

				e.preventDefault(); // Stop the link from jumping instantly

				const target = document.getElementById("counter");
				if (target && id) {
					const offset = window.innerHeight * 0.15;

					const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

					window.scrollTo({ top, behavior: "smooth" });
				}
			}}
			className={`${className ?? ""} cta-wrapper`}>
			<div className='cta-button group'>
				<div className='bg-circle' />
				<p className='text'>{text}</p>
				<div className='arrow-wrapper'>
					<img src='/images/arrow-down.svg' alt='arrow' />
				</div>
			</div>
		</a>
	);
};

export default Button;
