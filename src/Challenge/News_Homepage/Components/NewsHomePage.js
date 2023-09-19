import Nav from "./Nav";
import Article from "./Article";
import Aside from "./Aside";
import ShortNewsLines from "./ShortNewsLine";

const NewsHomePage = () => {
	return (
		<div className="w-full h-full py-14 px-36 overflow-auto font-inter bg-[#fffdfa]">
			<Nav></Nav>
			<main className=" grid grid-cols-7 grid-flow-col mb-16">
				<Article></Article>
				<Aside></Aside>
			</main>
			<ShortNewsLines></ShortNewsLines>
		</div>
	);
};

export default NewsHomePage;
