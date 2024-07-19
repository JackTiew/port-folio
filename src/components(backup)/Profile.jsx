import { useState } from 'react';
// import '../styles/Profile.css';

export default function Profile() {

	const techStack = ["angular", "react", "ts", "js", "html", "css", "tailwind"];
	const profiles = [
		{ name: "linkedin", url: "https://www.linkedin.com/in/jacktiew96/" },
		{ name: "github", url: "https://github.com/JackTiew" },
	];

	const [showEmail, setShowEmail] = useState(false);

	const toggleEmail = () => {
		setShowEmail(!showEmail);
	}

	return (
		<div className="h-full">
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div className="">01</div>
				<div className="">02</div>
				<div className="lg:col-span-2">
					<div className="text-center font-black">
						<span className="block border-b-[3px] w-[120px] mx-auto lg:border-none lg:inline-block">Tech Stack</span>
						<span className="hidden lg:inline-block lg:mr-[15px]">&nbsp;|</span>
						<div className="align-middle lg:inline-block lg:align-super">
							{
								techStack.map(tech => (
									<img
										key={tech}
										className="inline-block mx-[10px] cursor-pointer commonButton mt-[15px]"
										src={`https://skillicons.dev/icons?i=${tech}`}
										alt=""/>
								))
							}
						</div>
					</div>
				</div>
			</div>
		</div>
		// <div className="relative max-w-[100%] w-[80%] min-w-[1200px] mx-auto h-full">
		// 	<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
		// 		<div className="">01</div>
		// 		<div className="">02</div>
		// 		<div className="lg:col-span-2">
		// 			<div className="w-full flex justify-center items-center">
		// 				<div className="font-black">
		// 					<span className="text-center w-[150px] block mr-[20px] border-b-[3px] lg:border-none lg:inline-block">Tech Stack</span>
		// 					<span className="hidden lg:inline-block lg:pr-[10px]">&nbsp;|</span>
		// 					{
		// 						techStack.map(tech => (
		// 							<img
		// 								key={tech}
		// 								className="inline-block mx-[10px] cursor-pointer commonButton w-[50px]"
		// 								src={`https://skillicons.dev/icons?i=${tech}`}
		// 								alt=""/>
		// 						))
		// 					}
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		// <div className="gold-frame w-[calc(100%-300px)] mt-[10px] mx-auto h-[calc(100%-150px)]">
		// 	<div className="relative max-w-[100%] w-[80%] min-w-[1200px] mx-auto h-full">
		// 		<div className="grid grid-cols-2 gap-0 p-5">
		// 			<div className="ml-[20%] mt-[40px]">
		// 				<span className="profile-title">Front-End Web Developer</span>
		// 				<div className="my-[30px]">
		// 					<img className="w-[100px] h-[100px] inline-block mr-[40px]" src={`../assets/coder.png`} alt="" />
		// 					<div className="inline-block align-bottom">
		// 						{
		// 							profiles.map(profile => (
		// 								<a href={profile.url} target="_blank" rel="noreferrer">
		// 									<img 
		// 										alt=""
		// 										className="w-[48px] h-[48px] cursor-pointer commonButton inline-block mx-[5px]"
		// 										key={profile.name}
		// 										src={`../assets/icons/${profile.name}-white.svg`}
		// 										onMouseOver={e => e.currentTarget.src = `../assets/icons/${profile.name}-color.svg`}
		// 										onMouseOut={e => e.currentTarget.src = `../assets/icons/${profile.name}-white.svg`}
		// 									/>
		// 								</a>
		// 							))
		// 						}
		// 						<img 
		// 							alt=""
		// 							className="w-[48px] h-[48px] cursor-pointer commonButton inline-block mx-[5px]"
		// 							src={`../assets/icons/gmail-white.svg`}
		// 							onMouseOver={e => e.currentTarget.src = `../assets/icons/gmail-color.svg`}
		// 							onMouseOut={e => e.currentTarget.src = `../assets/icons/gmail-white.svg`}
		// 							onClick={toggleEmail}
		// 						/>
		// 						{showEmail && 
		// 							<div>
		// 								jack.tiew.tc@gmail.com
		// 							</div>
		// 						}
		// 					</div>
		// 				</div>
		// 				<div className="typewritter">
		// 					<p>Hi there! I'm Jack Tiew.</p>
		// 					<p>A passionate Front-End Web Developer.</p>
		// 					<p>
		// 						Based in Malaysia.
		// 						<img className="w-5 h-5 rounded-[100%] inline-block ml-[10px]" src="https://hatscripts.github.io/circle-flags/flags/my.svg" alt="" />
		// 					</p>
		// 				</div>
		// 			</div>
		// 			<div>
		// 				<div className="h-full w-full max-w-[400px] max-h-[400px] mx-auto commonButton">
		// 					<img className="rounded-[100%]" src={`../assets/profile-photo.jpg`} alt="" />
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<div className="colspan-2 h-[calc(100%-470px)]">
		// 			<div className="h-full flex justify-center items-center">
		// 				<div>
		// 					<span className="inline-block mr-[20px]">Tech Stack |</span>
		// 					{
		// 						techStack.map(tech => (
		// 							<img
		// 								key={tech}
		// 								className="inline-block mx-[10px] cursor-pointer commonButton"
		// 								src={`https://skillicons.dev/icons?i=${tech}`}
		// 								alt=""/>
		// 						))
		// 					}
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
			// <div className="grid grid-cols-2 gap-4">
			// 	<div className="self-center">
			// 		<div className="mb-[50px]">
			// 			<span className="profile-title">Front-End Web Developer</span>
			// 		</div>
			// 		<img className="w-[100px] h-[100px] mb-[10px]" src={`../assets/coder.png`} alt="" />
			// 		<div className="typewritter">
			// 			<p>
			// 				Hi there! I'm Jack Tiew.
			// 			</p>
			// 			<p>
			// 				A passionate Front-End Web Developer.
			// 			</p>
			// 			<p>
			// 				Based in Malaysia.
			// 				<img className="w-5 h-5 rounded-[100%] inline-block ml-[10px]" src="https://hatscripts.github.io/circle-flags/flags/my.svg" alt="" />
			// 			</p>
			// 		</div>
			// 	</div>
			// 	<div>
			// 		<img className="rounded-[100%]" src={`../assets/profile-photo.jpg`} alt="" />
			// 	</div>
			// 	<div className="col-span-2 text-center">
			// 		<span className="inline-block mr-[20px]">Tech Stack |</span>
			// 		{
			// 			techStack.map(tech => (
			// 				<img
			// 					key={tech}
			// 					className="inline-block mx-[10px] cursor-pointer commonButton"
			// 					src={`https://skillicons.dev/icons?i=${tech}`}
			// 					alt=""/>
			// 			))
			// 		}
			// 	</div>
			// </div>
		// </div>
	);
}
