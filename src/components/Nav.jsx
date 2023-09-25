import { Fragment, useEffect, useState } from "react";
import "../styles/Nav.css"

export default function Nav({navigate}) {

	const [showMenu, setShowMenu] = useState(false);

	const toggleMenu = () => setShowMenu(!showMenu);

	useEffect(() => {
		const handleWindowResize = () => {
			setShowMenu(false);
		};
	
		window.addEventListener('resize', handleWindowResize);
	
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	});

	return (
		<Fragment>
			<div className={`
				flex h-[75px] items-center justify-center bg-black
				md:bg-transparent`
			}>
				<span className="header-font">JACKTIEW.DEV</span>
			</div>
			<div className="absolute top-0 right-0 h-[75px] block md:hidden">
				<div className="h-[100%] flex items-center mr-[15px]">
					<img
						className="h-[36px] w-[36px] cursor-pointer"
						src={`../assets/icons/menu-icon.svg`}
						alt=""
						onClick={toggleMenu}	
					/>
				</div>
			</div>
			<div className={`
				absolute text-center left-0 right-0 bg-black md:opacity-100 ${showMenu ? "show" : "hide"}-menu
				md:bg-transparent md:block md:top-0 md:h-[75px] md:left-auto`
			}>
				<div className={`h-[100%] md:flex md:items-center`}>
					<ul>
						<li className="block my-[10px] md:inline md:my-0 header-font text-[28px]" onClick={() => navigate("about")}>About</li>
						<li className="block my-[10px] md:inline md:my-0 header-font text-[28px]" onClick={() => navigate("project")}>Projects</li>
					</ul>
				</div>
			</div>
		</Fragment>
	);
}
