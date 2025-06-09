/** @format */

import { motion } from "framer-motion";
import { Badge } from "../components/ui/badge";
import TitleHeader from "../components/TitleHeader";
import { Card, CardContent } from "../components/ui/card";

const experiences = [
	{
		company: "SQE",
		role: "Frontend Developer",
		logo: "/images/SQE.svg",
		period: "Aug 2021 – Present",
		stack: ["Javascript", "HTML / CSS", "React", "Tailwind"],
		achievements: [
			"4 years of remote collaboration as a Front-End Developer (React) at SQE. Contributed to the development of various applications, including a chess game, a design tool similar to Excalidraw, the company's personalized QRCode generator, and other practical projects.",
		],
		link: "https://sqe.io/meet-the-team",
	},
];

const Work = () => {
	return (
		<div id='experience' className='flex-center section-padding px-4 sm:px-6 md:px-10'>
			<div className='w-full max-w-4xl mx-auto'>
				<TitleHeader title='My Experience ' sub='🧑‍💻 Experience' />
				<div className='py-6 sm:py-10'>
					<div className='space-y-6'>
						{experiences.map((exp, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, translateY: 20 }}
								animate={{ opacity: 1, translateY: 0 }}
								transition={{ delay: index * 0.2 }}>
								<Card className='flex flex-col gap-4 p-4 sm:p-6 items-start border-2 sm:border-4 border-gray-300'>
									<img src={exp.logo} alt={exp.company} className='object-contain rounded' />

									<CardContent className='flex-1 space-y-2'>
										<div className='flex justify-between items-center flex-wrap gap-y-1'>
											<h3 className='text-lg sm:text-xl font-semibold'>{exp.company}</h3>
											<span className='text-xs sm:text-sm text-muted-foreground'>{exp.period}</span>
										</div>

										<p className='text-sm text-indigo-300 font-bold'>{exp.role}</p>

										<div className='flex flex-wrap gap-2'>
											{exp.stack.map((tech, i) => (
												<Badge key={i} variant='outline'>
													{tech}
												</Badge>
											))}
										</div>

										<p className='text-sm sm:text-base text-muted-foreground whitespace-normal break-words leading-relaxed'>
											{exp.achievements[0]}
										</p>

										{exp.link && (
											<a
												href={exp.link}
												target='_blank'
												rel='noopener noreferrer'
												className='text-sm text-indigo-300 font-bold hover:underline'>
												Visit Site
											</a>
										)}
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
