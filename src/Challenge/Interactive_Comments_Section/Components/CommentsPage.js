import CommentBox from "./CommentBox/CommentBox";
import data from "../Data/data";
import SendCommentBox from "./SendCommentBox";
import { useState } from "react";

const RepliesArea = ({ replies, currentUser, handleEventComment, levelBox }) => {
	return (
		<div className={`flex ${levelBox !== 1 && "my-4"} `}>
			<div
				className={` md:w-[4px] w-[3px] md:h-[97%] flex-none h-auto md:mx-10 bg-comments-page-Light-gray rounded  mr-5`}
			></div>
			<div className="flex flex-col">
				{replies.map((reply, index) => {
					return (
						<>
							<CommentBox
								comment={reply}
								key={reply.id + "-" + reply.user.username}
								commentType="reply"
								currentUser={currentUser}
								handleEventComment={handleEventComment}
								levelBox={levelBox + 1}
							></CommentBox>

							{reply.replies ? (
								reply.replies.length > 0 ? (
									<RepliesArea
										replies={reply.replies}
										currentUser={currentUser}
										handleEventComment={handleEventComment}
										levelBox={levelBox + 1}
										key={"replies-" + reply.id + (levelBox + 1)}
									></RepliesArea>
								) : (
									index !== replies.length - 1 && <div className="mt-4"></div>
								)
							) : (
								index !== replies.length - 1 && <div className="mt-4"></div>
							)}
						</>
					);
				})}
			</div>
		</div>
	);
};

const CommentsPage = () => {
	const [comments, setComments] = useState([...data.comments]);

	const handleEventComment = ({
		user,
		content,
		eventType,
		replyingTo,
		commentId,
	}) => {
		// To be easy, id will be generated randomly by use Math random

		// Content will be pass depend on what types of event mode in textarea

		// Score: When init new comment, they all have the same score is 0

		// User: We will use user pass to the function, they can be another user or this current user.

		// Because data.json only have 1 current user so in this case this is current user, you can change the current in the data.json too

		// Replies: Like the score, all the new comments will no have reply by anyone

		const eventComment = {
			eventType: eventType,
			objectEvent: eventType !== "EDIT" ? {
				id: Math.floor(Math.random() * 10000),
				content: content,
				createdAt: "2 minutes ago",
				score: 0,
				user: { ...user },
				replies: [],
			} : {
				content: content
			},
		}

		const find_and_add_comment = (comments, commentId, eventComment) => {
			let result = false;
			for (let i = 0; i < comments.length; i++) {
				// First check if the comment id has the same

				if (commentId === comments[i].id) {
					if (eventComment.eventType === "REPLY") comments[i].replies = [...comments[i].replies, eventComment.objectEvent];
					else if (eventComment.eventType === "EDIT") comments[i].content = eventComment.objectEvent.content;
					return true;
				} else if (comments[i].replies) {
					// If not have, we will go into replies of that comment to find
					result = find_and_add_comment(
						comments[i].replies,
						commentId,
						eventComment
					);
					if (result) return true;
				}
			}
			return result;
		};

		// Case 1: When we seed the comment with event mode is SEND

		if (eventType === "SEND") setComments([...comments, eventComment.objectEvent]);
		else {
			let temp = [...comments];
			const result = find_and_add_comment(temp, commentId, {
				...eventComment,
				objectEvent: {
					...eventComment.objectEvent,
					replyingTo: replyingTo
				}
			});

			if (result) {
				setComments(temp);
			}
		}
	};

	return (
		<div className="flex justify-center w-full h-auto overflow-auto font-Rubik min-w-min md:h-full bg-comments-page-Very-light-gray md:px-[calc(50%-364px)]">
			<main className="grid mx-4 my-8 w-fit h-fit md:my-16 md:mx-0 gap-y-4 ">
				{comments.map((comment) => {
					return (
						<>
							<CommentBox
								comment={comment}
								key={comment.id + "-" + comment.user.username}
								commentType="comment"
								currentUser={data.currentUser}
								handleEventComment={handleEventComment}
								levelBox={1}
							></CommentBox>
							{comment.replies.length > 0 && (
								<RepliesArea
									replies={comment.replies}
									currentUser={data.currentUser}
									handleEventComment={handleEventComment}
									levelBox={1}
									key={"replies-" + comment.id + 1}
								></RepliesArea>
							)}
						</>
					);
				})}
				<SendCommentBox
					currentUser={data.currentUser}
					typeBox="SEND"
					handleEventComment={handleEventComment}
					levelBox={1}
				></SendCommentBox>
			</main>
		</div>
	);
};

export default CommentsPage;
