import ReportCard from "./ReportCard";
import ReportUserCard from "./ReportUserCard";
import cards from "../Data/data.json";
import { useState } from "react";

const TimeDashBoard = () => {
	const [timeFrames, setTimeFrames] = useState("Weekly");

	const handleChangeFrames = (event) => {
		setTimeFrames(event.target.innerText);
	};
	return (
		<div className="items-center justify-center w-full h-auto px-6 py-16 overflow-auto md:flex md:py-0 md:px-60 md:h-full bg-time-dashboard-Very-dark-blue font-Rubik">
			<main className="grid md:grid-cols-4 md:grid-rows-[auto_auto] grid-rows-[repeat(7,1fr)] gap-8">
				<ReportUserCard
					handleChangeFrames={handleChangeFrames}
					timeFrames={timeFrames}
				></ReportUserCard>

				{cards.map((card) => {
					return (
						<ReportCard
							card={card}
							timeframes={timeFrames}
							key={card.title}
						></ReportCard>
					);
				})}
			</main>
		</div>
	);
};

export default TimeDashBoard;
