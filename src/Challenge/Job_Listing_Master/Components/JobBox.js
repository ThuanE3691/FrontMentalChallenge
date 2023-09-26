import photosnap from "../Assets/photosnap.svg";

const FiltersArea = ({ filters }) => {
	return (
		<>
			<ul className="flex flex-wrap items-center self-center w-full row-start-3 font-bold md:justify-end md:col-start-3 gap-y-4 md:gap-y-0 md:row-start-1 text-job-listing-desaturated-dark-cyan gap-x-4">
				<hr className="w-full h-[1px] row-start-3 bg-job-listing-dark-grayish-cyan md:hidden"></hr>

				{filters.map((tag) => {
					return (
						<li
							className="px-2 py-1 rounded cursor-pointer bg-job-listing-light-grayish-cyan-filter-tablets w-fit hover:text-white hover:bg-job-listing-desaturated-dark-cyan color__trans"
							key={tag}
						>
							{tag}
						</li>
					);
				})}
			</ul>
		</>
	);
};

const OthersInfosArea = ({ infos }) => {
	return (
		<ul className="flex items-center text-job-listing-dark-grayish-cyan gap-x-4">
			{infos.map((info, index) => (
				<>
					{index !== 0 && (
						<div
							key={`dot-${index}`}
							className=" rounded-full w-[4px] h-[4px] bg-job-listing-dark-grayish-cyan"
						></div>
					)}
					<li key={info}>{info}</li>
				</>
			))}
		</ul>
	);
};

const JobBox = () => {
	const filters = ["Frontend", "Senior", "HTML", "CSS", "Javascript"];
	const infos = ["1d ago", "Full time", "USA only"];

	return (
		<div className="grid w-full md:grid-cols-[auto_auto_1fr] grid-rows-[1.1rem_auto_1fr] md:grid-rows-none md:p-8 px-5 pb-6 gap-x-4 gap-y-4 md:gap-y-0 bg-white rounded-md shadow-xl border-l-job-listing-desaturated-dark-cyan border-l-[6px]">
			<img
				src={photosnap}
				alt=""
				className="w-12 h-12 row-start-1 -translate-y-6 md:translate-y-0 md:w-fit md:h-fit md:col-start-1"
			/>
			<div className="grid row-start-2 md:col-start-2 md:row-start-1 gap-y-2">
				<header className="flex font-bold gap-x-2 text-[15px] items-center">
					<h2 className="mr-3 text-lg md:mr-2 text-job-listing-desaturated-dark-cyan">
						Photosnap
					</h2>
					<div className="h-full px-3 pt-[6px] text-sm text-center text-white align-middle rounded-full w-fit bg-job-listing-desaturated-dark-cyan">
						NEW!
					</div>
					<div className="h-full px-3 pt-[6px] text-sm text-center text-white align-middle rounded-full bg-job-listing-very-dark-grayish-cyan w-fit">
						FEATURED
					</div>
				</header>
				<h1 className="text-base font-bold cursor-pointer md:text-2xl text-job-listing-very-dark-grayish-cyan hover:text-job-listing-desaturated-dark-cyan color__trans">
					Senior Frontend Developer
				</h1>
				<OthersInfosArea infos={infos}></OthersInfosArea>
			</div>
			<FiltersArea filters={filters}></FiltersArea>
		</div>
	);
};

export default JobBox;
