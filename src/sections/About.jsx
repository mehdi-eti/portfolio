/** @format */

import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
import TitleHeader from "../components/TitleHeader";

const About = () => {
	return (
		<div id='about' className='flex-center'>
			<div className='w-full h-full md:px-10 px-10'>
				<TitleHeader title='Get to know me better' sub='🧑‍💻 About Me' />
				<div className='mx-auto mt-10 p-6 shadow-xl rounded-2xl border border-gray-100 transition hover:shadow-2xl'>
					<div className='flex flex-col gap-3 items-center text-center'>
						<img src='./images/me.webp' alt='Profile' className='w-24 h-24 rounded-full border-4 border-indigo-200 shadow-sm' />
						<h2 className='mt-4 text-2xl font-semibold'>MohammadMehdi Etezadi</h2>
						<p className='text-lg'>Frontend Developer</p>
						<p className='text-gray-300'>
							Front-end developer with 5 years of experience in designing and implementing modern user interfaces using React.js.
							Committed to writing clean, maintainable, and high-performance code. Skilled in collaborating with technical and design
							teams to create engaging and responsive user experiences. Passionate about continuous learning and adapting to the
							latest technologies.
						</p>

						<div className='flex justify-center gap-4 mt-2 text-amber-100 text-xl'>
							<a href='http://github.com/mehdi-eti' target='_blank' rel='noreferrer'>
								<IconBrandGithub className='hover:text-amber-300 transition' />
							</a>
							<a href='https://linkedin.com/' target='_blank' rel='noreferrer'>
								<IconBrandLinkedin className='hover:text-amber-300 transition' />
							</a>
							<a href='https://twitter.com/' target='_blank' rel='noreferrer'>
								<IconBrandTwitter className='hover:text-amber-300 transition' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
