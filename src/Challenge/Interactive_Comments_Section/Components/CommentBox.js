import { useState } from "react";

const CommentBox = ({ comment, commentType }) => {
	const [score, setScore] = useState(comment.score);
	const handleInAndDecsScore = (sign) => {
		switch (sign) {
			case "PLUS":
				setScore((prev) => prev + 1);
				break;
			case "MINUS":
				if (score >= 1) setScore((prev) => prev - 1);
				break;
			default:
				break;
		}
	};

	return (
		<section
			className={`grid md:grid-rows-[auto_auto] overflow-hidden grid-rows-[auto_auto_auto] grid-cols-[auto_repeat(3,1fr)] bg-white rounded-xl px-6 py-5 gap-x-4 gap-y-4 ${
				commentType === "reply"
					? "col-start-2 md:w-[calc(723px-82.5px)]"
					: "md:w-[723px]"
			}`}
		>
			<div className="flex-row self-start col-span-1 row-start-3 px-3 py-2 md:px-3 md:py-4 md:col-span-1 md:row-span-2 md:flex-col flex__center bg-comments-page-Very-light-gray rounded-xl">
				<svg
					width="11"
					height="11"
					onClick={() => handleInAndDecsScore("PLUS")}
					className="md:mb-4 md:mr-0 mr-6 transition-colors duration-200 cursor-pointer fill-current text-[#C5C6EF] hover:text-comments-page-Moderate-blue"
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
					className="transition-colors duration-200 cursor-pointer fill-current text-[#C5C6EF] hover:text-comments-page-Moderate-blue"
				>
					<path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
				</svg>
			</div>
			<header className="flex items-center col-span-4 md:col-span-2">
				<img src={comment.user.image.png} alt="" className="w-8 h-8 mr-4" />
				<p className="font-medium">{comment.user.username}</p>
				<div className="ml-4 mr-auto text-comments-page-Grayish-Blue">
					{comment.createdAt}
				</div>
			</header>
			<div className="flex items-center self-center col-start-4 row-start-3 font-medium cursor-pointer md:self-start md:col-start-4 md:row-start-1 md:mt-1 place-self-end text-comments-page-Moderate-blue hover:text-comments-page-Light-grayish-blue">
				<svg width="14" height="13" className="mr-2 fill-current color__trans">
					<path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" />
				</svg>
				<p className=" color__trans">Reply</p>
			</div>
			<p className="col-span-4 col-start-1 md:col-span-3 md:col-start-2 text-comments-page-Grayish-Blue">
				{commentType === "reply" && (
					<span className="font-medium cursor-pointer text-comments-page-Moderate-blue color_trans hover:text-comments-page-Light-grayish-blue">
						@{comment.replyingTo + " "}
					</span>
				)}
				{comment.content}
			</p>
		</section>
	);
};

export default CommentBox;
