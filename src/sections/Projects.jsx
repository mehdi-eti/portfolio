/** @format */

import { projects } from "../constants";
import TitleHeader from "../components/TitleHeader";
import { BackgroundGradient } from "../components/ui/background-gradient";

function BackgroundGradientDemo({ image, title, description, link, className }) {
	return (
		<BackgroundGradient className={`h-full rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900 ${className}`}>
			<a href={link}>
				<img src={image} alt='chess' height='200' width='500' className='w-[500px] h-[200px] object-contain' />
				<div className='flex flex-col gap-5'>
					<p className='text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200'>{title}</p>
					<p className='text-sm text-neutral-600 dark:text-neutral-400'>{description}</p>
				</div>
			</a>
		</BackgroundGradient>
	);
}

const Projects = () => (
	<div id='projects' className='flex-center section-padding px-1 sm:px-1 md:px-32'>
		<div className='md:px-10 px-5'>
			<TitleHeader title='Some of my Projects' sub='🧑‍💻 Projects' />
			<div className='flex flex-col gap-5 mt-10'>
				<div class='grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-8'>
					<BackgroundGradientDemo {...projects[0]} />
					<BackgroundGradientDemo {...projects[1]} />
					<BackgroundGradientDemo {...projects[2]} />
				</div>
				<div class='grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-8'>
					<BackgroundGradientDemo {...projects[3]} />
					<BackgroundGradientDemo {...projects[4]} />
					<BackgroundGradientDemo {...projects[5]} />
				</div>
			</div>
		</div>
	</div>
);

export default Projects;
