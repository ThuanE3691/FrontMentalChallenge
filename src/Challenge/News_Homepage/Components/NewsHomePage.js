import Nav from "./Nav";
import Article from "./Article";
import Aside from "./Aside";
import ShortNewsLines from "./ShortNewsLine";

const NewsHomePage = () => {
	return (
		<div className="w-full h-full py-14 md:px-[164px] px-4 overflow-auto font-inter bg-[#fffdfa]">
			<Nav></Nav>
			<main className="grid md:grid-cols-[2.3fr_1fr] gap-x-6 mb-16">
				<Article></Article>
				<Aside></Aside>
			</main>
			<ShortNewsLines></ShortNewsLines>
		</div>
	);
};

export default NewsHomePage;
