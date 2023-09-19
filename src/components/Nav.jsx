import '../styles/Nav.css';

export default function Nav() {
	return (
		<div className="nav-bar">
			<div className="nav-item">
				<img className="nav-profile-photo" src={`../assets/profile-photo.jpg`} alt="" />
			</div>
			<div className="nav-item" style={{ textAlign: 'center' }}>
				<span className="nav-header">JACKTIEW.DEV</span>
			</div>
			<div className="nav-item" style={{ textAlign: 'end' }}>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Projects</li>
					<li>Contact</li>
				</ul>
			</div>
		</div>
	);
}
