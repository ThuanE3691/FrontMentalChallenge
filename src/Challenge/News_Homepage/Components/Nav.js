import logo from "../Assets/logo.svg";
import menu from "../Assets/icon-menu.svg";
import menuClose from "../Assets/icon-menu-close.svg";

import { useState } from "react";

const Nav = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<nav className="flex items-center text-[#5d5f79] mb-16">
			<img src={logo} alt="logo" className="cursor-pointer mr-auto" />
			<img
				src={showMenu ? menuClose : menu}
				loading="lazy"
				className="md:hidden transition-all duration-200 z-[1000]"
				alt=""
				onClick={() => setShowMenu((prev) => !prev)}
			/>

			{/* SIDEBAR OVERLAY ONLY ACTIVE WHEN SIDE BAR OPEN */}
			{showMenu && (
				<div className="md:hidden  top-0 left-0 fixed w-full h-full bg-[rgb(0,0,0,0.4)] z-[997] pointer-events-none"></div>
			)}
			<ul
				className={`md:flex md:flex-row md:items-center md:gap-x-10 md:text-base md:text-[#5d5f79] md:pl-0 md:justify-end ${
					showMenu ? " z-[999]" : "hidden"
				} md:relative fixed right-0 top-0 h-full bg-[#fffdfa] w-[60%] flex flex-col justify-center text-xl text-black gap-y-10 pl-8`}
			>
				<li className="cursor-pointer hover:text-[#f15e50] transition-colors duration-300">
					Home
				</li>
				<li className="cursor-pointer hover:text-[#f15e50] transition-colors duration-300">
					New
				</li>
				<li className="cursor-pointer hover:text-[#f15e50] transition-colors duration-300">
					Popular
				</li>
				<li className="cursor-pointer hover:text-[#f15e50] transition-colors duration-300">
					Trending
				</li>
				<li className="cursor-pointer hover:text-[#f15e50] transition-colors duration-300">
					Categories
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
