import '../styles/Profile.css';

export default function Profile() {

	// const [profile, setProfile] = useState();
	const profiles = [
		{
			name: "linkedin",
			link: "https://www.linkedin.com/in/jacktiew96/"
		},
		{
			name: "github",
			link: "https://github.com/JackTiew"
	}];
	const techStack = ["angular", "react", "javascript", "tailwind", "html", "css"];

	return (
		<div className="profile-container">
			<div>
				<div style={{ display: 'inline-block', textAlign: 'left', width: '60%', verticalAlign: "super" }}>
					<div>
						<span className="profile-header">
							Front-End Developer
						</span>
					</div>
					<div style={{ width: '400px' }}>
						<span>
							Hi, I'm Jack Tiew. A passionate Front-End
							Developer based in Kuala Lumpur, Malaysia.
						</span>
						<img className="flag" src={`../assets/malaysia.jpg`} alt="" />
					</div>
					<div style={{ marginTop: "12px" }}>
						{
							profiles.map(profile => (
								<div className="profile-icon-container">
									<a href={profile.link} target="_blank">
										<img className="profile-icon" src={`../assets/${profile.name}.png`} alt=""/>
									</a>
								</div>
							))
						}
					</div>
				</div>
				<div style={{ display: 'inline-block', width: '40%' }}>
					<img className="profile-profile-photo" src={`../assets/profile-photo.jpg`} alt="" />
				</div>
			</div>
			<div>
				<span style={{ display: "inline-block", verticalAlign: "middle" }}>Tech Stack |</span>
				<div style={{ display: "inline-block" }}>
					{
						techStack.map(tech => (
							<img className="tech-icon" src={`../assets/${tech}.png`} alt=""/>
						))
					}
				</div>
			</div>
		</div>
	);
}
