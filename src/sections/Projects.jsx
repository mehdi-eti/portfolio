/** @format */

import TitleHeader from "../components/TitleHeader";

const projects = [
	{
		title: "Chess",
		image: `./images/chess_1.png`,
		description:
			"Chess Challenge is a web-based chess game developed using React. The application offers a smooth and interactive chess experience, featuring online matches, move analysis, and a user-friendly design. The main goal of this project is to create a modern platform for chess enthusiasts that both beginners and professionals can enjoy.",
		link: "monumental-crepe-ca4c0f.netlify.app",
	},
	{
		title: "Social Media",
		image: "./images/LamaSocial_1.png",
		description:
			"Static Social Network is a social platform designed similar to Facebook. This project enables the display of user profiles, posts, and interactions.",
		link: "https://ubiquitous-gnome-9d6adb.netlify.app/",
	},
	{
		title: "Component Generator",
		image: "./images/excalidraw_1.png",
		description:
			"Digital Drawing and Design Tool is a web-based application similar to Excalidraw for digital drawing and design. With a simple and smooth user interface, this tool allows users to create components easily.",
		link: "https://heartfelt-snickerdoodle-16235f.netlify.app/",
	},
	{
		title: "Tehran Offline Map",
		image: "./images/offline_map.png",
		description: `
                Design and development of an offline map system with the ability to accurately display the boundaries of police stations, traffic police units, and areas covered by the law enforcement command.
The system provides offline access to contact information and the jurisdiction area of each police station for quick access in emergency situations.
It is integrated with police operations management systems to enhance coordination during missions.
            `,
		link: "https://fascinating-haupia-f4b311.netlify.app/images/offline_map.png",
	},
	{
		title: "ChatGPT",
		image: "./images/chatGPT.png",
		description: `    Design and development of a subscription-based service using Next.js for centralized access to a variety of AI tools.
    The platform allows users to purchase a subscription and enjoy unlimited use of different AI models in a single unified environment.

    Key features:

        Online payment and subscription management

        Optimized user interface for seamless interaction

        Integration of multiple AI APIs`,
		link: "https://regal-fenglisu-19f212.netlify.app/",
	},
	{
		title: "Analatics",
		image: "./images/analytics.jpeg",
		description: "A free tool with advanced features such as heatmaps and session replay for analyzing user behavior.",
		link: "https://fascinating-haupia-f4b311.netlify.app/images/analytics.jpeg",
	},
];

const Projects = () => (
	<div id='work' className='flex-center section-padding'>
		<div className='md:px-10 px-10'>
			<TitleHeader title='Some of my Projects' sub='🧑‍💻 Work' />
		</div>
	</div>
);

export default Projects;
