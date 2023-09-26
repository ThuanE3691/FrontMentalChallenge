import { useState } from "react";
import SendCommentBox from "../SendCommentBox";
import TextAreaRender from "./TextAreaRender";
import ScoreBox from "./ScoreBox";
import EventsArea from "./EventsArea";

const CommentBox = ({
	comment,
	commentType,
	currentUser,
	handleEventComment,
	levelBox,
	setShowDeleteModal,
}) => {
	const [score, setScore] = useState(comment.score);
	const [eventMode, setEventMode] = useState({
		state: false,
		type: "",
		replyingTo: null,
		commentId: null,
	});

	const resetEventMode = () => {
		setEventMode({
			state: false,
			type: "",
			replyingTo: null,
			commentId: null,
		});
	};

	const handleEventMode = ({ eventType, replyingTo, commentId }) => {
		if (!eventMode.state)
			setEventMode({
				...eventMode,
				state: true,
				type: eventType,
				replyingTo: replyingTo,
				commentId: commentId,
			});
		else resetEventMode();
	};

	const handleInAndDecsScore = (sign) => {
		switch (sign) {
			case "PLUS":
				setScore(comment.score + 1);
				break;
			case "MINUS":
				if (comment.score >= 0) setScore(Math.max(comment.score - 1, 0));
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
				}  overflow-hidden grow  grid-rows-[auto_auto_auto] md:grid-cols-[auto_repeat(4,1fr)] grid-col-[auto_repeat(3,1fr)] bg-white rounded-xl px-6 py-5 gap-x-4 gap-y-4 `}
			>
				<div className="flex-row self-start col-span-1 row-start-3 px-3 py-2 md:px-3 md:py-4 md:col-span-1 md:row-span-2 md:flex-col flex__center bg-comments-page-Very-light-gray rounded-xl">
					<ScoreBox
						handleInAndDecsScore={handleInAndDecsScore}
						score={score}
						commentScore={comment.score}
					></ScoreBox>
				</div>
				<header className={`flex items-center col-span-4`}>
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
				<div
					className={`flex items-center self-center col-start-4 row-start-3 font-medium md:self-center ${
						levelBox >= 3 && currentUser.username === comment.user.username
							? "md:col-start-[-1] md:row-start-[-1]"
							: "md:col-start-[-1] md:row-start-1"
					} place-self-end `}
				>
					<EventsArea
						user={comment.user}
						currentUser={currentUser}
						handleEventMode={handleEventMode}
						commentId={comment.id}
						setShowDeleteModal={setShowDeleteModal}
					></EventsArea>
				</div>
				<TextAreaRender
					typeEvent={eventMode.type}
					comment={comment}
					commentType={commentType}
					handleEventComment={handleEventComment}
					resetEventMode={resetEventMode}
				></TextAreaRender>
			</section>
			{eventMode.type === "REPLY" && (
				<div className={` ${commentType !== "comment" && "col-start-2"}`}>
					<SendCommentBox
						currentUser={currentUser}
						typeBox={eventMode.type}
						replyingTo={eventMode.replyingTo}
						commentId={eventMode.commentId}
						handleEventComment={handleEventComment}
						resetEventMode={resetEventMode}
						levelBox={levelBox}
					></SendCommentBox>
				</div>
			)}
		</>
	);
};

export default CommentBox;
