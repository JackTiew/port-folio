import Nav from './Nav';
import Profile from './Profile';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import { useRef } from 'react';

export default function App() {
	const aboutRef = useRef(null);
	const projectRef = useRef(null);
	const contactRef = useRef(null);

	const navigateTo = (section) => {
		switch(section) {
			case "about": aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			case "project": projectRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			case "contact": contactRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			default:
				break;
		}
	}

	return (
		<>
			<div className="h-screen" style={{ background: "radial-gradient(circle, rgba(92,92,92,1) 10%, rgba(0,0,0,1) 100%)" }}>
				<Nav navigate={navigateTo} />
				<Profile />
			</div>
			<div ref={aboutRef}>
				<About />
			</div>
			<div ref={projectRef}>
				<Project />
			</div>
			<div ref={contactRef}>
				<Contact />
			</div>
		</>
	);
}
