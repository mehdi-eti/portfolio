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
		<div id='experience' className='flex-center section-padding'>
			<div className='h-full md:px-10 px-10'>
				<TitleHeader title='My Experience ' sub='🧑‍💻 Experience' />
				<div className='max-w-4xl mx-auto py-10 px-4'>
					<div className='space-y-6'>
						{experiences.map((exp, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, translateY: 20 }}
								animate={{ opacity: 1, translateY: 0 }}
								transition={{ delay: index * 0.2 }}>
								<Card className='flex gap-4 p-4 items-start border-4 border-gray-300'>
									<img src={exp.logo} alt={exp.company} className='w-50 object-contain rounded' />
									<CardContent className='flex-1 space-y-2'>
										<div className='flex justify-between items-center'>
											<h3 className='text-xl font-semibold'>{exp.company}</h3>
											<span className='text-sm text-muted-foreground'>{exp.period}</span>
										</div>
										<p className='text-sm text-indigo-300 font-bold'>{exp.role}</p>
										<div className='flex flex-wrap gap-2'>
											{exp.stack.map((tech, i) => (
												<Badge key={i} variant='outline'>
													{tech}
												</Badge>
											))}
										</div>
										<ul className='list-disc ml-5 text-sm text-muted-foreground my-3'>
											{exp.achievements.map((item, i) => (
												<li key={i}>{item}</li>
											))}
										</ul>
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
