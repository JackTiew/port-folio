import '../styles/Nav.css';
import profilePhoto from '../assets/profile-photo.jpg';

export default function Nav() {
	return (
		<div className="nav-bar">
			<div className="nav-item">
				<img className="profile-photo" src={profilePhoto} alt="" />
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
