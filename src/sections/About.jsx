/** @format */

import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import TitleHeader from "../components/TitleHeader";

const About = () => {
	return (
		<div id='about' className='flex-center px-4 sm:px-6 md:px-10'>
			<div className='w-full max-w-4xl mx-auto'>
				<TitleHeader title='Get to know me better' sub='🧑‍💻 About Me' />

				<div className='mt-6 sm:mt-10 p-4 sm:p-6 shadow-md sm:shadow-xl rounded-xl border-2 sm:border-4 border-gray-300 transition hover:shadow-lg sm:hover:shadow-2xl'>
					<div className='flex flex-col gap-3 items-center text-center'>
						<img
							src='./images/me.webp'
							alt='Profile'
							className='w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 sm:border-4 border-indigo-400 shadow-sm'
						/>
						<h2 className='mt-2 sm:mt-4 text-xl sm:text-2xl font-semibold'>MohammadMehdi Etezadi</h2>
						<p className='text-base sm:text-lg text-white'>Frontend Developer</p>

						<p className='text-sm sm:text-base text-gray-300 leading-relaxed px-2 sm:px-0'>
							Front-end developer with 5 years of experience in designing and implementing modern user interfaces using React.js.
							Committed to writing clean, maintainable, and high-performance code. Skilled in collaborating with technical and design
							teams to create engaging and responsive user experiences. Passionate about continuous learning and adapting to the
							latest technologies.
						</p>

						<div className='flex justify-center gap-4 mt-3 text-amber-100 text-xl'>
							<a href='http://github.com/mehdi-eti' target='_blank' rel='noreferrer'>
								<IconBrandGithub className='hover:text-amber-300 transition' />
							</a>
							<a href='https://www.linkedin.com/in/mehdi-etezadi-68893120b/' target='_blank' rel='noreferrer'>
								<IconBrandLinkedin className='hover:text-amber-300 transition' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
