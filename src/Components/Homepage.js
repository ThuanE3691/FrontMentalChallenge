import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import QR_Screen from "../Assets/QR_Component.jpg";
import Results_Screen from "../Assets/Results_Summary.jpg";
import Notifications_Screen from "../Assets/Notifications_Page.jpg";
import NewsHomePage_Screen from "../Assets/News_Homepage.jpg";
import TimeDashBoard_Screen from "../Assets/TimeDashBoard.jpg";
import JobListing_Screen from "../Assets/Job_Listing.jpg";
import Comments_Screen from "../Assets/Comments_Page.jpg";

const ChallengeBox = ({ link_challenge, img_challenge, name_challenge }) => {
	return (
		<motion.li
			className="px-4 pt-2 pb-6 transition-all duration-200 bg-white rounded-lg shadow-xl cursor-pointer w-fit hover:opacity-60"
			whileHover={{ scale: 1.2 }}
		>
			<Link
				to={`/${link_challenge}`}
				className="grid grid-rows-[auto_256px] grid-cols-[minmax(0,256px)] gap-y-4"
			>
				<div className="font-medium ">{name_challenge}</div>
				<img
					src={img_challenge}
					alt=""
					className=" object-cover object-center w-full h-full rounded-md border-[1px] border-gray-200"
				/>
			</Link>
		</motion.li>
	);
};

const Homepage = () => {
	const challenges = [
		{
			link_challenge: "QR_Component",
			img_challenge: QR_Screen,
			name_challenge: "QR Component",
		},
		{
			link_challenge: "Results_Summary",
			img_challenge: Results_Screen,
			name_challenge: "Results Summary",
		},
		{
			link_challenge: "News_Homepage",
			img_challenge: NewsHomePage_Screen,
			name_challenge: "News Homepage",
		},
		{
			link_challenge: "Notifications_Page",
			img_challenge: Notifications_Screen,
			name_challenge: "Notifications Page",
		},
		{
			link_challenge: "Time_Tracking_Dashboard",
			img_challenge: TimeDashBoard_Screen,
			name_challenge: "Time Tracking Dashboard",
		},
		{
			link_challenge: "Interactive_Comments_Section",
			img_challenge: Comments_Screen,
			name_challenge: "Interactive Comments Section",
		},
		{
			link_challenge: "Job_Listing_Page_Master",
			img_challenge: JobListing_Screen,
			name_challenge: "Job Listings Page Master",
		},
	];

	return (
		<motion.div className="flex flex-col items-center justify-center w-full h-auto py-8 overflow-auto lg:h-full md:px-4 lg:block bg-notification-light-gray-blue-1">
			<p className="mb-8 text-3xl font-semibold lg:ml-12 font-outfit">
				Challenges
			</p>
			<ol className="grid text-xl lg:mt-8 lg:ml-12 lg:grid-cols-4 md:grid-cols-2 font-outfit gap-y-8 gap-x-4">
				<AnimatePresence>
					{challenges.map(
						({ link_challenge, img_challenge, name_challenge }) => {
							return (
								<ChallengeBox
									link_challenge={link_challenge}
									img_challenge={img_challenge}
									name_challenge={name_challenge}
									key={name_challenge}
								></ChallengeBox>
							);
						}
					)}
				</AnimatePresence>
			</ol>
		</motion.div>
	);
};

export default Homepage;
