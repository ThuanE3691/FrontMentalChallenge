import bg_header from "../Assets/bg-header-desktop.svg";
import JobBox from "./JobBox";
import data from "../Data/data.json";

const JobListingPage = () => {
	return (
		<div className="w-full min-h-screen overflow-auto md:max-w-full bg-job-listing-light-grayish-cyan-bg font-leagueSpartan">
			<img
				src={bg_header}
				alt=""
				className="w-full bg-job-listing-desaturated-dark-cyan"
			/>
			<main className="grid mx-5 my-16 md:mx-32 md:gap-y-6 gap-y-10">
				{data.map((job) => {
					return <JobBox></JobBox>;
				})}
			</main>
		</div>
	);
};

export default JobListingPage;
