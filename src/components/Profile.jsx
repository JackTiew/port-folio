import '../styles/Profile.css';

export default function Profile() {

	const techStack = ["angular", "react", "ts", "js", "html", "css", "tailwind"];

	return (
		<div className="border-8 border-amber-400 w-[1000px] mt-[10px] mx-auto p-5">
			<div class="grid grid-cols-2 gap-4">
				<div className="self-center">
					<span className="profile-title">Front-End Web Developer</span>
					<img className="w-[100px] h-[100px] mb-[10px]" src={`../assets/coder.png`} alt="" />
					<span className="text-[30px]">Hi there! I'm Jack Tiew.</span>
					<br/><span className="text-[30px]">A passionate Front-End Web Developer.</span>
					<br/><span className="text-[30px]">Based in Malaysia</span>
					<img className="w-5 h-5 rounded-[100%] inline-block ml-[10px]" src="https://hatscripts.github.io/circle-flags/flags/my.svg" alt="" />
				</div>
				<div>
					<img className="rounded-[100%]" src={`../assets/profile-photo.jpg`} alt="" />
				</div>
				<div class="col-span-2 text-center">
					<span className="inline-block mr-[20px]">Tech Stack |</span>
					{
						techStack.map(tech => (
							<img className="inline-block mx-[10px]" src={`https://skillicons.dev/icons?i=${tech}`} alt=""/>
						))
					}
				</div>
			</div>
		</div>
	);
}
