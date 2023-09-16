import { data } from "../Data/data";

const ResultsSummary = () => {
	const styles_color = ["#ff575720", "#ffb01f20", "#00bd9120", "#1125d420"];
	return (
		<div className="font-hankenGrotesk flex__center w-full h-full ">
			<div className="flex md:flex-row md:justify-center flex-col items-center bg-white shadow-2xl md:rounded-2xl">
				<div className="bg-gradient-to-b from-[#7857ff] to-[#2e2be9] flex__center flex-col gap-y-4 px-12 md:pt-6 pt-12 pb-8 md:rounded-2xl rounded-3xl">
					<h1 className="text-[#c8c7ff] text-lg font-bold">Your Result</h1>
					<div className="flex__center flex-col rounded-full bg-gradient-to-b from-[#4e21ca] via-[#4633ED] via-70% py-10 px-12">
						<div className=" text-6xl text-white">76</div>
						<div className="text-[#c8c7ff]">of 100</div>
					</div>
					<div className="text-white text-3xl">Great</div>
					<p className="text-center text-lg text-[#c8c7ff]">
						Your scored higher than 65% of <br></br> the people who have taken
						<br></br> these tests.
					</p>
				</div>
				<div className=" w-[348px] px-8 pt-5 pb-6">
					<h1 className="mb-6 font-extrabold text-xl">Summary</h1>
					<div className="gap-y-2 md:mb-9 mb-4">
						{data.map(({ category, score, icon }, index) => {
							return (
								<div
									key={category}
									className="flex items-center justify-between p-2 bg-slate-400 rounded-md mb-4"
									style={{ backgroundColor: styles_color[index] }}
								>
									<div className="flex items-center font-bold gap-4 ">
										<img src={icon} alt="" />
										<div>
											<p style={{ color: styles_color[index].slice(0, 7) }}>
												{category}
											</p>
										</div>
									</div>
									<div className="font-bold mr-2">
										<p className="inline-block">{score}</p>
										<p className="inline-block text-gray-400">
											{" "}
											&nbsp; / &nbsp;100
										</p>
									</div>
								</div>
							);
						})}
					</div>
					<button className="text-center w-full bg-[#303b5a] py-3 rounded-full text-white transition-all duration-200 active:bg-gradient-to-b from-[#7857ff] to-[#2e2be9]">
						Continue
					</button>
				</div>
			</div>
		</div>
	);
};

export default ResultsSummary;
