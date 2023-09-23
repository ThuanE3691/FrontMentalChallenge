import CommentBox from "./CommentBox";
import data from "../Data/data";
import SendCommentBox from "./SendCommentBox";

const RepliesArea = ({ replies, currentUser }) => {
	return (
		<div
			className={`grid grid-cols-[auto_auto] gap-y-4 md:gap-x-10 gap-x-4 `}
			style={{ gridTemplateRows: `repeat(${replies.length},auto)` }}
		>
			<div className=" w-[2.5px] md:h-[97%] h-full bg-comments-page-Light-gray rounded row-span-full md:ml-10"></div>
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
	);
};

const Comments_Page = () => {
	return (
		<div className="flex justify-center w-full h-auto overflow-auto font-Rubik md:h-full bg-comments-page-Very-light-gray md:px-[calc(50%-364px)]">
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
				<SendCommentBox currentUser={data.currentUser}></SendCommentBox>
			</main>
		</div>
	);
};

export default Comments_Page;
