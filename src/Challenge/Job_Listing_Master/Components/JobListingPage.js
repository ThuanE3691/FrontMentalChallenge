import bg_header from "../Assets/bg-header-desktop.svg";
import JobBox from "./JobBox";
import data from "../Data/data.json";
import FilterBox from "./FilterBox";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const JobListingPage = () => {
	const [queries, setQueries] = useState([]);
	const [jobDisplay, setJobDisplay] = useState(data);

	const addToQueryList = (e) => {
		if (!queries.find((q) => q === e.target.innerText))
			setQueries([...queries, e.target.innerText]);
	};

	const removeFromQueryList = (query) => {
		setQueries([...queries].filter((q) => q !== query));
	};

	const clearQueryList = () => {
		setQueries([]);
	};

	useEffect(() => {
		if (queries.length === 0) {
			setJobDisplay(data);
		} else {
			setJobDisplay(
				[...data].filter((job) => {
					const job_filters = [
						job.role,
						job.level,
						...job.tools,
						...job.languages,
					];
					let flag = true;
					queries.every((query) => {
						if (!job_filters.find((filter) => filter === query)) {
							flag = false;
						}
						return flag;
					});
					return flag;
				})
			);
		}
	}, [queries]);

	return (
		<div className="w-full min-h-screen overflow-auto md:max-w-full bg-job-listing-light-grayish-cyan-bg font-leagueSpartan">
			<img
				src={bg_header}
				alt=""
				className="w-screen bg-job-listing-desaturated-dark-cyan"
				layout="true"
			/>
			<AnimatePresence>
				{queries.length > 0 && (
					<FilterBox
						queries={queries}
						clearQueryList={clearQueryList}
						removeFromQueryList={removeFromQueryList}
						key="filter-box"
						layout={true}
					></FilterBox>
				)}
			</AnimatePresence>
			<main
				className={`grid mx-5 md:mx-32 my-16 md:gap-y-6 gap-y-10`}
				key="job-display-area"
			>
				{jobDisplay.map((job) => {
					return (
						<JobBox
							job={job}
							key={job.company}
							addToQueryList={addToQueryList}
						></JobBox>
					);
				})}
			</main>
		</div>
	);
};

export default JobListingPage;
