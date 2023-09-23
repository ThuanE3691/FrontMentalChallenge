import CommentBox from "./CommentBox";
import data from "../Data/data";
import SendCommentBox from "./SendCommentBox";

const RepliesArea = ({ replies, currentUser }) => {
	return (
		<div className="flex">
			<div className=" md:w-[6px] w-[2px] md:h-[97%] h-full bg-comments-page-Light-gray rounded md:mx-10 mr-5"></div>
			<div className="grid gap-y-4">
				{replies.map((reply) => {
					return (
						<CommentBox
							comment={reply}
							key={reply.id + "-" + reply.user.username}
							commentType="reply"
							currentUser={currentUser}
						></CommentBox>
					);
				})}
			</div>
		</div>
	);
};

const CommentsPage = () => {
	return (
		<div className="flex justify-center w-full h-auto overflow-auto font-Rubik min-w-min md:h-full bg-comments-page-Very-light-gray md:px-[calc(50%-364px)]">
			<main className="grid mx-4 my-8 w-fit h-fit md:my-16 md:mx-0 gap-y-4">
				{data.comments.map((comment) => {
					return (
						<>
							<CommentBox
								comment={comment}
								key={comment.id + "-" + comment.user.username}
								commentType="comment"
								currentUser={data.currentUser}
							></CommentBox>
							{comment.replies.length > 0 && (
								<RepliesArea
									replies={comment.replies}
									currentUser={data.currentUser}
								></RepliesArea>
							)}
						</>
					);
				})}
				<SendCommentBox
					currentUser={data.currentUser}
					typeBox="SEND"
				></SendCommentBox>
			</main>
		</div>
	);
};

export default CommentsPage;
