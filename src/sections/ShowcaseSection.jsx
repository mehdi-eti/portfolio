/** @format */

import { gsap } from "gsap";
import { useRef } from "react";
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";
import { ThreeDMarquee } from "../components/ui/3d-marquee";
import { Modal, ModalBody, ModalContent, ModalTrigger } from "../components/ui/animated-modal";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
	const sectionRef = useRef(null);
	const images = [
		"./images/chess_3.png",
		"./images/LamaSocial_1.png",
		"./images/company_1.png",
		"./images/excalidraw_1.png",
		"./images/mariox_1.png",
		"./images/lcamerce_1.png",
		"./images/chess_1.png",
		"./images/LamaSocial_2.png",
		"./images/offline_map.png",
		"./images/analytics.jpeg",
		"./images/chatGPT.png",
		"./images/employee-evaluation.png",
		"./images/company_2.png",
		"./images/excalidraw_2.png",
		"./images/mariox_2.png",
		"./images/lcamerce_2.png",
		"./images/excalidraw_1.png",
		"./images/LamaSocial_1.png",
		"./images/company_1.png",
		"./images/chess_1.png",
		"./images/mariox_1.png",
		"./images/lcamerce_1.png",
		"./images/chess_1.png",
		"./images/LamaSocial_2.png",
		"./images/company_2.png",
		"./images/excalidraw_2.png",
		"./images/mariox_2.png",
		"./images/lcamerce_2.png",
	];
	const projects = [
		{ src: "./images/chess_1.png", url: "http://monumental-crepe-ca4c0f.netlify.app/" },
		{ src: "./images/LamaSocial_1.png", url: "http://ubiquitous-gnome-9d6adb.netlify.app/" },
		{ src: "./images/company_1.png", url: "https://soft-mermaid-4c986b.netlify.app/" },
		{ src: "./images/excalidraw_1.png", url: "https://heartfelt-snickerdoodle-16235f.netlify.app/" },
		{ src: "./images/mariox_1.png", url: "https://glittery-jelly-f121d9.netlify.app/" },
		{ src: "./images/chatGPT.png", url: "https://regal-fenglisu-19f212.netlify.app/" },
		{ src: "./images/lcamerce_1.png", url: "https://effervescent-custard-7ac229.netlify.app/" },
		{ src: "./images/offline_map.png", url: "./images/offline_map.png" },
		{ src: "./images/analytics.jpeg", url: "./images/analytics.jpeg" },
		{ src: "./images/employee-evaluation.png", url: "./images/employee-evaluation.png" },
	];

	useGSAP(() => {
		// Animation for the main section
		gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
	}, []);

	return (
		<div id='work' ref={sectionRef} className='app-showcase'>
			<div className='w-full'>
				<TitleHeader title='پروژه های انجام شده' sub='💼 پروژه های من' />
				<div className='relative mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl'>
					<div className='relative z-20 flex flex-wrap items-center justify-center'>
						<Modal>
							<ModalTrigger className='bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn cursor-pointer'>
								<span className='group-hover/modal-btn:translate-x-40 text-center transition duration-500'>دیدن پروژه ها</span>
								<div className='-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20'>
									💼
								</div>
							</ModalTrigger>
							<ModalBody className='md:max-w-[80%]'>
								<ModalContent>
									<h4 className='text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8'>
										پروژه های{" "}
										<span className='px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200'>
											شخصی
										</span>{" "}
										خودم
									</h4>
									<div className='flex justify-center items-center'>
										{projects.map((image, idx) => (
											<motion.div
												key={"images" + idx}
												style={{ rotate: Math.random() * 20 - 10 }}
												whileHover={{ scale: 1.1, rotate: 0, zIndex: 100 }}
												whileTap={{ scale: 1.1, rotate: 0, zIndex: 100 }}
												className='rounded-xl -mr-30 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden'>
												<a href={image.url} target='_blank' rel='noopener noreferrer'>
													<img
														width='500'
														height='500'
														src={image.src}
														alt='bali images'
														className='rounded-lg h-20 w-20 md:h-60 md:w-60 object-cover shrink-0'
													/>
												</a>
											</motion.div>
										))}
									</div>
								</ModalContent>
							</ModalBody>
						</Modal>
					</div>
					<div className='absolute inset-0 z-10 h-full max-sm:h-600 w-full bg-black/70' />
					<ThreeDMarquee className='pointer-events-none absolute inset-0 h-full w-full' images={images} />
				</div>
			</div>
		</div>
	);
};

export default AppShowcase;
