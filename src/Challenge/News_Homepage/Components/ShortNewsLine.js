import retroImg from "../Assets/image-retro-pcs.jpg";
import gamingImg from "../Assets/image-gaming-growth.jpg";
import lapImg from "../Assets/image-top-laptops.jpg";

const ShortNews = ({ ordinal, title, content, news_img }) => {
	return (
		<li>
			<article className="grid grid-cols-[1fr_2.2fr] grid-rows-[0.5fr_0.5fr_0.5fr] gap-x-6">
				<img
					src={news_img}
					alt=""
					className="row-span-3 object-cover w-full h-full"
					loading="lazy"
				/>
				<p className="text-[#c5c6ce] font-bold text-3xl ">{ordinal}</p>
				<p className="text-black font-bold text-[20px] cursor-pointer hover:text-[#f15e50] transition-colors duration-300">
					{title}
				</p>
				<p className="text-[#5d5f79] text-[16px]">{content}</p>
			</article>
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
			<ol className="grid md:grid-cols-3 md:gap-x-[55px] gap-y-10">
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
			</ol>
		</div>
	);
};

export default ShortNewsLines;
