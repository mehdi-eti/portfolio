/** @format */

import React from "react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

import { FloatingDock } from "../components/ui/floating-dock";

const Footer = () => {
	const links = [
		{
			title: "Linkedin",
			icon: <IconBrandLinkedin className='h-full w-full text-neutral-500 dark:text-neutral-300' />,
			href: "#",
		},
		{
			title: "GitHub",
			icon: <IconBrandGithub className='h-full w-full text-neutral-500 dark:text-neutral-300' />,
			href: "http://github.com/mehdi-eti",
		},
	];
	return (
		<footer className='footer'>
			<div className='flex items-center justify-center w-full'>
				<FloatingDock mobileClassName='translate-y-20' items={links} />
			</div>
		</footer>
	);
};

export default Footer;
