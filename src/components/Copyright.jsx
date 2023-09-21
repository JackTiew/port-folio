export default function Copyright({navigate}) {
	// return (
	// 	<div style={{ height: "300px" }}>
	// 		I'm Copyright
	// 	</div>
	// );
	return (
		<div className="h-[75px] items-center bg-black">
			<div className="flex justify-center items-center h-full">
				<span>Copyright © 2023. All rights are reserved</span>
				<div className="absolute right-[50px]">
					<img 
						className="icon cursor-pointer commonButton"
						src={`../assets/icons/arrow-up.svg`}
						onClick={() => navigate("home")}/>
				</div>
			</div>
		</div>
	);
	
}
