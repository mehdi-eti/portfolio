/** @format */

import { abilities } from "../constants";
import { EvervaultCard, Icon } from "../components/ui/evervault-card";

const FeatureCards = () => (
	<div className='w-full padding-x-lg mx-auto grid-3-cols' dir='rtl'>
		{abilities.map(({ imgPath, title, desc }) => (
			<div className='border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]'>
				<Icon className='absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black' />
				<Icon className='absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black' />
				<Icon className='absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black' />
				<Icon className='absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black' />

				<EvervaultCard
					text={
						<div className='flex items-center'>
							<img src={imgPath} />
							{title}
						</div>
					}
				/>

				<h1 className='dark:text-white text-black mt-4 font-light'>{desc}</h1>
			</div>
		))}
	</div>
);

export default FeatureCards;
