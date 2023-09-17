import Nav from "./Nav";
import Article from "./Article";
import Aside from "./Aside";
import AnotherNews from "./AnotherNews";

const NewsHomePage = () => {
	return (
		<div className="w-full h-full py-14 px-32 font-inter bg-[#fffdfa]">
			<Nav></Nav>
			<main className="flex items-start mb-16">
				<Article></Article>
				<Aside></Aside>
			</main>
			<AnotherNews></AnotherNews>
		</div>
	);
};

export default NewsHomePage;
