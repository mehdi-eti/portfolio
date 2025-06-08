/** @format */

import Hero from "./sections/Hero";
import About from "./sections/About";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Navbar from "./components/NavBar";
import TechStack from "./sections/TechStack";
import FeatureCards from "./sections/FeatureCards";
import Projects from "./sections/Projects";
import Works from "./sections/Work";

const App = () => (
	<>
		<Navbar />
		<Hero />
		<About />
		<Projects />
		<FeatureCards />
		<Works />
		<TechStack />
		<Contact />
		<Footer />
	</>
);

export default App;
