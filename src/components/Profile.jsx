import '../styles/Profile.css';

export default function Profile() {

	const techStack = ["angular", "react", "ts", "js", "html", "css", "tailwind"];

	return (
		<div className="gold-frame w-[calc(100%-300px)] mt-[10px] mx-auto h-[calc(100%-150px)]">
			<div className="relative max-w-[100%] w-[80%] min-w-[1200px] mx-auto h-full">
				<div className="grid grid-cols-2 gap-0 p-5">
					<div className="ml-[20%] mt-[40px]">
						<div className="mb-[50px]">
							<span className="profile-title">Front-End Web Developer</span>
						</div>
						<img className="w-[100px] h-[100px] mb-[10px]" src={`../assets/coder.png`} alt="" />
						<div className="typewritter">
							<p>Hi there! I'm Jack Tiew.</p>
							<p>A passionate Front-End Web Developer.</p>
							<p>
								Based in Malaysia.
								<img className="w-5 h-5 rounded-[100%] inline-block ml-[10px]" src="https://hatscripts.github.io/circle-flags/flags/my.svg" alt="" />
							</p>
						</div>
					</div>
					<div>
						<div className="h-full w-full max-w-[400px] max-h-[400px] mx-auto commonButton">
							<img className="rounded-[100%]" src={`../assets/profile-photo.jpg`} alt="" />
						</div>
					</div>
				</div>
				<div className="colspan-2 h-[calc(100%-470px)]">
					<div className="h-full flex justify-center items-center">
						<div>
							<span className="inline-block mr-[20px]">Tech Stack |</span>
							{
								techStack.map(tech => (
									<img
										key={tech}
										className="inline-block mx-[10px] cursor-pointer commonButton"
										src={`https://skillicons.dev/icons?i=${tech}`}
										alt=""/>
								))
							}
						</div>
					</div>
				</div>
			</div>
			{/* <div className="grid grid-cols-2 gap-4">
				<div className="self-center">
					<div className="mb-[50px]">
						<span className="profile-title">Front-End Web Developer</span>
					</div>
					<img className="w-[100px] h-[100px] mb-[10px]" src={`../assets/coder.png`} alt="" />
					<div className="typewritter">
						<p>
							Hi there! I'm Jack Tiew.
						</p>
						<p>
							A passionate Front-End Web Developer.
						</p>
						<p>
							Based in Malaysia.
							<img className="w-5 h-5 rounded-[100%] inline-block ml-[10px]" src="https://hatscripts.github.io/circle-flags/flags/my.svg" alt="" />
						</p>
					</div>
				</div>
				<div>
					<img className="rounded-[100%]" src={`../assets/profile-photo.jpg`} alt="" />
				</div>
				<div className="col-span-2 text-center">
					<span className="inline-block mr-[20px]">Tech Stack |</span>
					{
						techStack.map(tech => (
							<img
								key={tech}
								className="inline-block mx-[10px] cursor-pointer commonButton"
								src={`https://skillicons.dev/icons?i=${tech}`}
								alt=""/>
						))
					}
				</div>
			</div> */}
		</div>
	);
}
