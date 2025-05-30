/** @format */

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Button from "../components/Button";
import { ContainerTextFlip } from "../components/ui/container-text-flip";
import HeroExperience from "../components/models/hero_models/HeroExperience";

const Hero = () => {
	useGSAP(() => {
		gsap.fromTo(".hero-text h1", { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" });
	});

	return (
		<section id='hero' className='relative overflow-hidden'>
			<div className='hero-layout'>
				<header dir='rtl' className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
					<div className='flex flex-col gap-7'>
						<div className='hero-text'>
							<div className='flex w-full'>
								<h2>تبدیل</h2>
								<ContainerTextFlip words={["ایده های شما", "طرح‌های شما"]} />
							</div>
							<h2>به پروژه‌های واقعی</h2>
						</div>

						<span className='text-white-50 md:text-xl relative z-10 pointer-events-none'>
							سلام، من مهدی هستم، یک توسعه‌دهنده ساکن تهران علاقه مند به کدنویسی.
						</span>

						<a className='md:w-80 md:h-16 w-60 h-12' href='./resume.pdf' target='_blank' rel='noopener noreferrer'>
							<Button text='رزومه من' id='counter' view={true} />
						</a>
					</div>
				</header>

				<figure>
					<div className='hero-3d-layout'>
						<HeroExperience />
					</div>
				</figure>
			</div>

			{/* <AnimatedCounter /> */}
		</section>
	);
};

export default Hero;
