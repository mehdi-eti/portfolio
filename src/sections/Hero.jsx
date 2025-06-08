/** @format */

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
	useGSAP(() => {
		gsap.fromTo(".hero-text h1", { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" });
	});

	return (
		<section id='hero' className='relative overflow-hidden'>
			<div className='hero-layout'>
				{/* LEFT: Hero Content */}
				<header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
					<div className='flex flex-col gap-7'>
						<div className='hero-text'>
							<h1>
								Shaping
								<span className='slide'>
									<span className='wrapper'>
										{words.map((word, index) => (
											<span key={index} className='flex items-center md:gap-3 gap-1 pb-2'>
												<img
													src={word.imgPath}
													alt='person'
													className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
												/>
												<span>{word.text}</span>
											</span>
										))}
									</span>
								</span>
							</h1>
							<h1>into Real Projects</h1>
							<h1>that Deliver Results</h1>
						</div>

						<a href='./resume.pdf' target='_blank' rel='noopener noreferrer' className='md:w-80 md:h-16 w-60 h-12'>
							<Button text='See My Resume' id='counter' view />
						</a>
					</div>
				</header>

				<figure>
					<div className='hero-3d-layout'>
						<HeroExperience />
					</div>
				</figure>
			</div>
		</section>
	);
};

export default Hero;
