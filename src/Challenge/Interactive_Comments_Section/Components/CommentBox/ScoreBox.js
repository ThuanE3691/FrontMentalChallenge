const ScoreBox = ({ handleInAndDecsScore, score, commentScore }) => {
	return (
		<>
			<svg
				width="11"
				height="11"
				onClick={() => handleInAndDecsScore("PLUS")}
				className={`md:mb-4 md:mr-0 mr-6 transition-colors duration-200 cursor-pointer fill-current text-[#C5C6EF] ${
					score < commentScore && "hover:text-comments-page-Moderate-blue"
				}`}
			>
				<path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149a.484.484 0 0 0 .148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15.48.48 0 0 0-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" />
			</svg>
			<p
				unselectable="on"
				className="flex items-center justify-center w-2 mr-6 font-medium text-center md:mb-4 md:mr-0 text-comments-page-Moderate-blue"
			>
				{score}
			</p>
			<svg
				width="11"
				height="3"
				onClick={() => handleInAndDecsScore("MINUS")}
				className={`transition-colors duration-200 cursor-pointer fill-current ${
					score > commentScore && "hover:text-comments-page-Moderate-blue"
				} text-[#C5C6EF] `}
			>
				<path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
			</svg>
		</>
	);
};

export default ScoreBox;
