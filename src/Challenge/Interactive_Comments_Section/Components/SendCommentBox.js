import { useState } from "react";

const SendCommentBox = ({
	currentUser,
	typeBox,
	handleEventComment,
	replyingTo,
	commentId,
	resetEventMode,
	levelBox,
}) => {
	const [isFill, setIsFill] = useState(true);
	const handleSubmit = (e) => {
		e.preventDefault();

		if (e.target.content.value === "") {
			setIsFill(false);
			alert("Please enter a valid comment");
		} else {
			setIsFill(true);

			handleEventComment({
				user: currentUser,
				content: e.target.content.value.replace(
					replyingTo && `@${replyingTo.username} `,
					""
				),
				eventType: typeBox,
				replyingTo: replyingTo ? replyingTo.username : null,
				commentId: commentId ? commentId : null,
			});

			if (typeBox === "REPLY") resetEventMode();
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className={`grid grid-cols-[max-content_auto_auto_max-content] ${
				levelBox !== 1 && "mt-4"
			}  md:grid-rows-[90px] gap-x-4 gap-y-4 bg-white w-full grid-rows-[auto-auto] px-6 py-5 rounded-xl`}
		>
			<img
				src={currentUser.image.png}
				alt=""
				className="w-10 h-10 col-start-1 md:row-start-1"
			/>
			<textarea
				className={`px-6 py-2 border-[1px] ${
					isFill
						? "border-comments-page-Light-gray"
						: "border-comments-page-Soft-Red"
				} row-start-1 col-start-1 resize-none rounded-lg col-span-4 md:col-span-2 align-top  outline-comments-page-Grayish-Blue `}
				placeholder="Add a comment..."
				rows="4"
				name="content"
				defaultValue={replyingTo && `@${replyingTo.username} `}
			></textarea>
			<button className="col-start-4 row-start-2 py-2 font-medium text-white rounded-lg md:place-self-start place-self-end md:row-start-1 px-7 bg-comments-page-Moderate-blue w-fit hover:bg-comments-page-Light-grayish-blue">
				{typeBox}
			</button>
		</form>
	);
};

export default SendCommentBox;
