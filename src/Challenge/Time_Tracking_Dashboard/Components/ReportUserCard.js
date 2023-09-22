import jeremy from "../Assets/image-jeremy.png";

const ReportUserCard = ({ timeFrames, handleChangeFrames }) => {
	const timeFramesOption = ["Daily", "Weekly", "Monthly"];
	return (
		<article className="md:row-span-2 rounded-xl bg-time-dashboard-dark-blue">
			<figure className="flex items-center py-6 pl-8 bg-blue-500 md:pt-8 md:pb-16 md:pr-20 md:block md:bg-time-dashboard-blue rounded-xl">
				<img
					src={jeremy}
					alt=""
					className="w-16 h-16 border-[3px] rounded-full white border-3 md:mb-8 md:mr-0 mr-4"
					loading="lazy"
				/>
				<figcaption className="text-sm md:mb-2 text-slate-300">
					Report for
					<p className="md:text-4xl text-xl font-light text-white md:leading-[3rem]">
						<span className="md:after:content-['\a']">Jeremy</span> Robson
					</p>
				</figcaption>
			</figure>
			<ul className="grid w-full grid-cols-[repeat(3,auto)] gap-x-10 py-6 pl-6 md:py-8 md:pr-20 md:grid-cols-1 text-time-dashboard-desaturated-blue gap-y-4">
				{timeFramesOption.map((timeFrame) => {
					return (
						<li
							className={` ${
								timeFrame === timeFrames ? "text-white" : ""
							} transition-colors duration-200 cursor-pointer hover:text-white w-fit`}
							onClick={(e) => handleChangeFrames(e)}
							key={timeFrame}
						>
							{timeFrame}
						</li>
					);
				})}
			</ul>
		</article>
	);
};

export default ReportUserCard;
