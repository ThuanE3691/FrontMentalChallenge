import { useState } from "react";
import SendCommentBox from "./SendCommentBox";

const EventsArea = ({ user, currentUser, handleEventMode }) => {
	return currentUser.username === user.username ? (
		<>
			<div className="flex items-center mr-3 cursor-pointer md:mr-6 w-fit text-comments-page-Soft-Red hover:text-comments-page-Pale-red color_trans">
				<svg width="12" height="14" className="mr-2 fill-current ">
					<path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" />
				</svg>
				<p>Delete</p>
			</div>
			<div
				className="flex items-center cursor-pointer w-fit text-comments-page-Moderate-blue hover:text-comments-page-Light-grayish-blue color_trans"
				onClick={() => handleEventMode("EDIT")}
			>
				<svg width="14" height="14" className="mr-2 fill-current">
					<path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333a1.75 1.75 0 0 0 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" />
				</svg>
				<p>Edit</p>
			</div>
		</>
	) : (
		<div
			className="flex items-center cursor-pointer text-comments-page-Moderate-blue hover:text-comments-page-Light-grayish-blue color_trans"
			onClick={() => handleEventMode("REPLY")}
		>
			<svg width="14" height="13" className="mr-2 cursor-pointer fill-current ">
				<path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" />
			</svg>
			<p className="cursor-pointer ">Reply</p>
		</div>
	);
};

const EditTextRender = ({ comment, commentType }) => {
	return (
		<>
			<textarea
				className=" col-span-4 col-start-1 rounded-lg md:px-6 md:py-2 px-4 py-3 border-[1px] border-comments-page-Light-gray outline-comments-page-Grayish-Blue resize-none md:col-span-3 md:col-start-2 text-comments-page-Dark-blue"
				rows="4"
			>
				{commentType === "reply" &&
					"@" + comment.replyingTo + " " + comment.content}
			</textarea>
			<button className="col-start-4 py-2 font-medium text-white rounded-lg place-self-end px-7 bg-comments-page-Moderate-blue w-fit hover:bg-comments-page-Light-grayish-blue">
				UPDATE
			</button>
		</>
	);
};

const DefaultTextRender = ({ comment, commentType }) => {
	return (
		<p className="col-span-4 col-start-1 md:col-span-3 md:col-start-2 text-comments-page-Grayish-Blue">
			{commentType === "reply" && (
				<span className="font-medium cursor-pointer text-comments-page-Moderate-blue color_trans hover:text-comments-page-Light-grayish-blue">
					@{comment.replyingTo + " "}
				</span>
			)}
			{comment.content}
		</p>
	);
};

const ScoreBox = ({ handleInAndDecsScore, score }) => {
	return (
		<>
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
		</>
	);
};

const CommentBox = ({ comment, commentType, currentUser }) => {
	const [score, setScore] = useState(comment.score);
	const [eventMode, setEventMode] = useState({
		state: false,
		type: "",
	});

	const handleEventMode = (eventType) => {
		if (!eventMode.state)
			setEventMode({
				...eventMode,
				state: true,
				type: eventType,
			});
		else {
			setEventMode({
				state: false,
				type: "",
			});
		}
	};

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
		<>
			<section
				className={`grid md:grid-rows-[auto_auto] ${
					commentType === "reply" ? "col-start-2 " : ""
				} overflow-hidden  grid-rows-[auto_auto_auto] grid-cols-[auto_repeat(3,1fr)] bg-white rounded-xl px-6 py-5 gap-x-4 gap-y-4 `}
			>
				<div className="flex-row self-start col-span-1 row-start-3 px-3 py-2 md:px-3 md:py-4 md:col-span-1 md:row-span-2 md:flex-col flex__center bg-comments-page-Very-light-gray rounded-xl">
					<ScoreBox
						handleInAndDecsScore={handleInAndDecsScore}
						score={score}
					></ScoreBox>
				</div>
				<header className="flex items-center col-span-4 md:col-span-2">
					<img src={comment.user.image.png} alt="" className="w-8 h-8 mr-4" />
					<p className="font-medium">{comment.user.username}</p>
					{currentUser.username === comment.user.username && (
						<div className="px-2 ml-2 text-sm font-medium text-white md:ml-3 bg-comments-page-Moderate-blue ">
							you
						</div>
					)}
					<div className="ml-4 mr-auto text-comments-page-Grayish-Blue">
						{comment.createdAt}
					</div>
				</header>
				<div className="flex items-center self-center col-start-4 row-start-3 font-medium md:self-start md:col-start-4 md:row-start-1 md:mt-1 place-self-end ">
					<EventsArea
						user={comment.user}
						currentUser={currentUser}
						handleEventMode={handleEventMode}
					></EventsArea>
				</div>
				{eventMode.type === "EDIT" ? (
					<EditTextRender
						comment={comment}
						commentType={commentType}
					></EditTextRender>
				) : (
					<DefaultTextRender
						comment={comment}
						commentType={commentType}
					></DefaultTextRender>
				)}
			</section>
			{eventMode.type === "REPLY" && (
				<div className={` ${commentType !== "comment" && "col-start-2"}`}>
					<SendCommentBox
						currentUser={currentUser}
						typeBox={eventMode.type}
					></SendCommentBox>
				</div>
			)}
		</>
	);
};

export default CommentBox;
