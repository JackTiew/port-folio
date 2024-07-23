import '../styles/Profile.scss';

const Profile = () => {

    const techStack = ["angular", "react", "ts", "js", "html", "css", "tailwind"];
    const profiles = [
		{ name: "linkedin", url: "https://www.linkedin.com/in/jacktiew96/" },
		{ name: "github", url: "https://github.com/JackTiew" },
	];

    return (
        <div className='profile-container'>
            <div className="profile-header">JACKTIEW.DEV</div>
            <div className='center'>
                <div className='center profile-background'>
                    <div className="profile-card">
                        <div className='profile-info-container'>
                            <p>Front-End Web Developer</p>
                            <div>
                                <img className="w-[100px] h-[100px] inline-block mr-[40px]" src={`../assets/coder.png`} alt="" />
                            </div>
                            <p>Hi there! I'm Jack Tiew.</p>
							<p>A passionate Front-End Web Developer.</p>
							<p>
								Based in Malaysia.
								<img className="w-5 h-5 rounded-[100%] inline-block ml-[10px]" src="https://hatscripts.github.io/circle-flags/flags/my.svg" alt="" />
							</p>
                        </div>
                        <div className="profile-link-container">
                            {
                                profiles.map(profile => (
                                    <a href={profile.url} target="_blank" rel="noreferrer">
                                        <img 
                                            alt=""
                                            className="w-[48px] h-[48px] cursor-pointer inline-block mx-[5px]"
                                            key={profile.name}
                                            src={`../assets/icons/${profile.name}-white.svg`}
                                            onMouseOver={e => e.currentTarget.src = `../assets/icons/${profile.name}-color.svg`}
                                            onMouseOut={e => e.currentTarget.src = `../assets/icons/${profile.name}-white.svg`}
                                        />
                                    </a>
                                ))
                            }
                        </div>
                        <div className='center'>
                            <div className='w-[100%]'>
                                <img className='rounded-[100%]' src={`../assets/profile-photo.jpg`} alt='' />
                            </div>
                        </div>
                        <div className='center profile-skills-container'>
                            <span className="inline-block mr-[10px]">Tech Stack |</span>
							{
								techStack.map(tech => (
									<img
										key={tech}
										className="inline-block mx-[10px] cursor-pointer shake-button"
										src={`https://skillicons.dev/icons?i=${tech}`}
										alt=""/>
								))
							}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Profile