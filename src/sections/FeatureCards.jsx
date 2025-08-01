/** @format */

import { abilities } from "../constants";

const FeatureCards = () => (
	<div className='w-full padding-x-lg mt-10 px-4 sm:px-6 md:px-10'>
		<div className='mx-auto grid-3-cols'>
			{abilities.map(({ imgPath, title, desc }) => (
				<div key={title} className='p-8 flex flex-col gap-4'>
					<div className='size-14 flex items-center justify-center rounded-full'>
						<img src={imgPath} alt={title} />
					</div>
					<h3 className='text-white text-2xl font-semibold mt-2'>{title}</h3>
					<p className='text-white-50 text-lg'>{desc}</p>
				</div>
			))}
		</div>
	</div>
);

export default FeatureCards;
