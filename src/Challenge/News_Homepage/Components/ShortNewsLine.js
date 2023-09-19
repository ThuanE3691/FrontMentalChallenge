import retroImg from "../Assets/image-retro-pcs.jpg";
import gamingImg from "../Assets/image-gaming-growth.jpg";
import lapImg from "../Assets/image-top-laptops.jpg";

const ShortNews = ({ ordinal, title, content, news_img }) => {
	// ISSUES
	// WANT: IMAGE HAVE SIZE EQUAL WITH CONTENT
	// BUG
	// 1. IMAGE BIGGER THAN IMAGE
	// TRY TO FIX: FLEX GROW, FLEX SHRINK
	// RESULT: IMAGE NOT CHANGE, CONTENT FROM WRAP TO NO WRAP :<

	// 2. TRY TO MAKE IMAGE SMALLER BY USE SIZE (WIDTH, HEIGHT)

	// RESULT: NEAR TO THE WANT, BUT CONTENT ARE NOT HAVE LENGTH LIKE DESIGN
	// AND ALL IMAGE NOT HAVE EQUAL SIZE BUT HAVE THE DIFFERENT SIZE

	// IF YOU READ THIS, I AM VERY APPRECIATE THAT IF YOU CAN SOLVE MY QUESTION
	return (
		<li className="flex">
			<img src={news_img} alt="news_img" className="mr-6" />

			<div className="flex flex-col gap-y-2">
				<p className="text-[#5d5f79] font-bold text-3xl">{ordinal}</p>
				<p className="text-black font-bold text-[20px] cursor-pointer hover:text-[#f15e50] transition-colors duration-300">
					{title}
				</p>
				<p className="text-[#5d5f79] text-[16px]">{content}</p>
			</div>
		</li>
	);
};

const ShortNewsLines = () => {
	const short_news = [
		{
			title: "Reviving Retro PCs",
			content: "What happens when old PCs are given modern upgrades?",
			news_img: retroImg,
		},
		{
			title: "Top 10 Laptops of 2022",
			content: "Our best picks for various needs and budgets.",
			news_img: lapImg,
		},
		{
			title: "The Growth of Gaming",
			content: "How the pandemic has sparked fresh opportunities.",
			news_img: gamingImg,
		},
	];
	return (
		<div>
			<ul className="grid grid-flow-col grid-cols-3">
				{short_news.map(({ title, content, news_img }, index) => {
					return (
						<ShortNews
							ordinal={"0" + (index + 1).toString()}
							title={title}
							content={content}
							news_img={news_img}
							key={title}
						></ShortNews>
					);
				})}
			</ul>
		</div>
	);
};

export default ShortNewsLines;
