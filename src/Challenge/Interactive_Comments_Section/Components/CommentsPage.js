import CommentBox from "./CommentBox/CommentBox";
import data from "../Data/data";
import SendCommentBox from "./SendCommentBox";
import { useState } from "react";
import DeleteModal from "./DeleteModal";

const RepliesArea = ({
	replies,
	currentUser,
	handleEventComment,
	levelBox,
	setShowDeleteModal,
}) => {
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
								setShowDeleteModal={setShowDeleteModal}
							></CommentBox>

							{reply.replies ? (
								reply.replies.length > 0 ? (
									<RepliesArea
										replies={reply.replies}
										currentUser={currentUser}
										handleEventComment={handleEventComment}
										levelBox={levelBox + 1}
										key={"replies-" + reply.id + (levelBox + 1)}
										setShowDeleteModal={setShowDeleteModal}
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

	const [showDeleteModal, setShowDeleteModal] = useState({
		show: false,
		commentId: null,
	});

	const handleEventComment = ({
		user,
		content,
		eventType,
		replyingTo,
		commentId,
	}) => {
		const eventComment = {
			eventType: eventType,
			objectEvent:
				eventType !== "EDIT"
					? {
							id: Math.floor(Math.random() * 10000),
							content: content,
							createdAt: "2 minutes ago",
							score: 0,
							user: { ...user },
							replies: [],
					  }
					: eventType !== "DELETE"
					? {
							content: content,
					  }
					: {},
		};

		const find_and_add_comment = (comments, commentId, eventComment) => {
			let result = false;
			for (let i = 0; i < comments.length; i++) {
				// First check if the comment id has the same

				if (commentId === comments[i].id) {
					switch (eventComment.eventType) {
						case "REPLY":
							comments[i].replies = [
								...comments[i].replies,
								eventComment.objectEvent,
							];
							return true;
						case "EDIT":
							comments[i].content = eventComment.objectEvent.content;
							return true;
						case "DELETE":
							comments = [...comments].filter(
								(comment) => comment.id !== commentId
							);
							return {
								result: true,
								comments: comments,
							};
						default:
							break;
					}
				} else if (comments[i].replies) {
					// If not have, we will go into replies of that comment to find
					result = find_and_add_comment(
						comments[i].replies,
						commentId,
						eventComment
					);
					if (eventComment.eventType !== "DELETE") {
						if (result) return true;
					} else if (result.result === true) {
						comments[i].replies = result.comments;
						return {
							result: true,
							comments: comments,
						};
					}
				}
			}
			return result;
		};

		if (eventType === "SEND")
			setComments([...comments, eventComment.objectEvent]);
		else {
			let temp = [...comments];
			const result = find_and_add_comment(temp, commentId, {
				...eventComment,
				objectEvent: {
					...eventComment.objectEvent,
					replyingTo: replyingTo,
				},
			});

			if (
				(eventType === "DELETE" && result.result) ||
				(eventType !== "DELETE" && result)
			) {
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
									setShowDeleteModal={setShowDeleteModal}
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
			{showDeleteModal.show && (
				<DeleteModal
					showDeleteModal={showDeleteModal}
					setShowDeleteModal={setShowDeleteModal}
					handleEventComment={handleEventComment}
				></DeleteModal>
			)}
		</div>
	);
};

export default CommentsPage;
