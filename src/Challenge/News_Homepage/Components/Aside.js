const NewSummary = ({ title, summary, isLast }) => {
	return (
		<li className="mb-4 ">
			<h3 className="text-white mb-2 text-xl font-bold cursor-pointer hover:text-[#e9ab53] transition-colors duration-300">
				{title}
			</h3>
			<p className="text-[#c5c6ce] text-[15px] leading-6">{summary}</p>
			{!isLast && <div className="w-full h-[1px] bg-[#5f5f79] my-8"></div>}
		</li>
	);
};

const Aside = () => {
	const news = [
		{
			title: "Hydrogen VS Electric Cars",
			summary: "Will hydrogen-fueled cars ever catch up to EVs?",
		},
		{
			title: "The Downsides of AI Artistry",
			summary:
				"What are the possible adverse effects of on-demand AI image generation?",
		},
		{
			title: "Is VC Funding Drying Up?",
			summary:
				"Private funding by VC terms is down 50% YOY. We take a look at that that means.",
		},
	];
	return (
		<aside className="bg-[#00001a] text-white flex flex-col px-6 py-6 w-[43%]">
			<h1 className=" text-4xl font-bold mt-2 mb-6 text-[#e9ab53]">New</h1>
			<ul>
				{news.map(({ title, summary }, index) => {
					return (
						<NewSummary
							title={title}
							summary={summary}
							isLast={index === news.length - 1}
						></NewSummary>
					);
				})}
			</ul>
		</aside>
	);
};

export default Aside;
