import { LayoutGroup, motion } from "framer-motion";
import remove_icon from "../Assets/icon-remove.svg";
import { AnimatePresence } from "framer-motion";

const FilterBox = ({ queries, clearQueryList, removeFromQueryList }) => {
	return (
		<motion.div
			className="absolute flex items-center w-[83%] h-16 px-8 -translate-y-1/2 bg-white rounded-md shadow-2xl md:mx-32 "
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<ul className="flex items-center mr-auto gap-x-4">
				<AnimatePresence mode="popLayout">
					{queries.map((query) => {
						return (
							<motion.li
								className="flex items-center rounded-sm cursor-pointer text-job-listing-desaturated-dark-cyan bg-job-listing-light-grayish-cyan-filter-tablets gap-x-2"
								onClick={() => removeFromQueryList(query)}
								key={query}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<p className="pt-1 pl-2 font-semibold">{query}</p>
								<img
									src={remove_icon}
									alt=""
									className="px-2 py-2 rounded-tr-md rounded-br-md bg-job-listing-desaturated-dark-cyan hover:bg-job-listing-very-dark-grayish-cyan color__trans"
								/>
							</motion.li>
						);
					})}
				</AnimatePresence>
			</ul>
			<p
				className="font-semibold transition-all cursor-pointer hover:text-job-listing-desaturated-dark-cyan hover:underline text-job-listing-dark-grayish-cyan"
				onClick={clearQueryList}
			>
				Clear
			</p>
		</motion.div>
	);
};

export default FilterBox;
