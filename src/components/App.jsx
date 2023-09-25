import { useEffect, useRef, useState } from 'react';

import Nav from './Nav';
import Profile from './Profile';
import About from './About';
import Project from './Project';
import Copyright from './Copyright';

export default function App() {
	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const projectRef = useRef(null);

	const styles = [
		"radial-gradient(circle, rgba(92,92,92,1) 10%, rgba(0,0,0,1) 100%)",
		"radial-gradient(circle at 10% 20%, rgb(69, 86, 102) 0%, rgb(34, 34, 34) 90%)",
		"linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)",
		"linear-gradient(180.2deg, rgb(30, 33, 48) 6.8%, rgb(74, 98, 110) 131%)"
	];

	const [randValue, setRandValue] = useState(0);

	useEffect(() => {
		setRandValue(Math.floor(Math.random() * styles.length));
	}, [styles.length]);

	const navigateTo = (section) => {
		switch(section) {
			case "home": homeRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			case "about": aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			case "project": projectRef.current?.scrollIntoView({ behavior: 'smooth' });
				break;
			default:
				break;
		}
	}

	return (
		<>
			<div
				ref={homeRef}
				className="h-screen"
				style={{ background: styles[randValue] }}>
					<Nav navigate={navigateTo} />
					{/* <Profile /> */}
			</div>
			{/* <div ref={aboutRef}>
				<About />
			</div> */}
			<div ref={projectRef}>
				<Project />
			</div>
			<Copyright navigate={navigateTo} />
		</>
	);
}
