import work from "../Assets/icon-work.svg";
import play from "../Assets/icon-play.svg";
import exercise from "../Assets/icon-exercise.svg";
import self_care from "../Assets/icon-self-care.svg";
import social from "../Assets/icon-social.svg";
import study from "../Assets/icon-study.svg";
import ellipsis from "../Assets/icon-ellipsis.svg";

const cardLabel = {
	work: {
		img: work,
		style: {
			bg: " bg-time-dashboard-light-red-work",
			pos: "md:bg-[90%_-8%]",
			mb_pos: "bg-[90%_-12%]",
		},
	},
	play: {
		img: play,
		style: {
			bg: " bg-time-dashboard-soft-blue-play",
			pos: "md:bg-[90%_-5%]",
			mb_pos: "bg-[90%_-6%]",
		},
	},
	exercise: {
		img: exercise,
		style: {
			bg: " bg-time-dashboard-Lime-green-exercise",
			pos: "md:bg-[90%_0%]",
			mb_pos: "bg-[90%_-2%]",
		},
	},
	"self care": {
		img: self_care,
		style: {
			bg: " bg-time-dashboard-Soft-orange-self-care",
			pos: "md:bg-[90%_-6%]",
			mb_pos: "bg-[90%_-12%]",
		},
	},
	social: {
		img: social,
		style: {
			bg: " bg-time-dashboard-Violet-social",
			pos: "md:bg-[90%_-12%]",
			mb_pos: "bg-[90%_-20%]",
		},
	},
	study: {
		img: study,
		style: {
			bg: " bg-time-dashboard-Light-red-study",
			pos: "md:md:bg-[90%_-8%]",
			mb_pos: "bg-[90%_-6%]",
		},
	},
};

const ReportCard = ({ card, timeframes }) => {
	const cardType = cardLabel[card.title.toLowerCase()];

	return (
		<article
			className={`grid grid-cols-3 grid-rows-[0.25fr_1fr] bg-no-repeat ${
				cardType.style.bg +
				" " +
				cardType.style.pos +
				" " +
				cardType.style.mb_pos
			} rounded-2xl`}
			style={{
				backgroundImage: `url(${cardType.img})`,
			}}
		>
			<div className="z-0 grid w-full h-auto col-span-3 row-start-2 px-5 pt-4 pb-8 text-white transition-opacity duration-200 cursor-pointer hover:bg-time-dashboard-hover-report-card rounded-xl bg-time-dashboard-dark-blue md:gap-y-4 gap-y-1">
				<div className="flex items-center">
					<h3 className="mr-auto md:text-lg">{card.title}</h3>
					<img src={ellipsis} alt="" className="z-10 cursor-pointer" />
				</div>
				<div className="flex items-center md:block ">
					<h2 className="mr-auto text-3xl font-light md:text-5xl md:mb-4">
						{card.timeframes[timeframes.toLowerCase()].current}hrs
					</h2>
					<h4 className="text-sm font-normal text-time-dashboard-pale-blue">
						{timeframes !== "Daily"
							? "Last " + timeframes.replace("ly", "") + " "
							: "Yesterday "}
						- {card.timeframes[timeframes.toLowerCase()].previous}hrs
					</h4>
				</div>
			</div>
		</article>
	);
};

export default ReportCard;
