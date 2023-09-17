import logo from "../Assets/logo.svg";

const Nav = () => {
	return (
		<nav className="flex items-center justify-between text-[#5d5f79] mb-16">
			<img src={logo} alt="logo" className="cursor-pointer" />
			<ul className="flex items_center gap-x-9">
				<li className="cursor-pointer hover:text-[#e9ab53] transition-colors duration-300">
					Home
				</li>
				<li className="cursor-pointer hover:text-[#e9ab53] transition-colors duration-300">
					New
				</li>
				<li className="cursor-pointer hover:text-[#e9ab53] transition-colors duration-300">
					Popular
				</li>
				<li className="cursor-pointer hover:text-[#e9ab53] transition-colors duration-300">
					Trending
				</li>
				<li className="cursor-pointer hover:text-[#e9ab53] transition-colors duration-300">
					Categories
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
