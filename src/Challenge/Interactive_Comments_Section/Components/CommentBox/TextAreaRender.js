const EditTextRender = ({ comment, commentType, handleEventComment, resetEventMode }) => {
	const handleSubmit = (event) => {
		event.preventDefault();

		const filter_content = commentType === "reply" ? event.target.content.value.replace(`@${comment.replyingTo}`,"") : event.target.content.value

		handleEventComment({
			user: {...comment.user},
			eventType: "EDIT",
			content: filter_content,
			commentId: comment.id,
		})

		resetEventMode();
	};
	return (
		<>
			<form
				className="flex flex-col col-span-6 col-start-1 md:col-start-2"
				onSubmit={handleSubmit}
			>
				<textarea
					className="rounded-lg md:px-6 md:py-2 px-4 py-3 border-[1px] border-comments-page-Light-gray outline-comments-page-Grayish-Blue resize-none md:col-span-full md:col-start-2 text-comments-page-Dark-blue"
					rows="4"
					name="content"
				>
					{commentType === "reply" &&
						"@" + comment.replyingTo + " " + comment.content}
				</textarea>
				<button className="col-start-5 row-start-3 py-2 mt-4 font-medium text-white rounded-lg place-self-end px-7 bg-comments-page-Moderate-blue w-fit hover:bg-comments-page-Light-grayish-blue">
					UPDATE
				</button>
			</form>
		</>
	);
};

const DefaultTextRender = ({ comment, commentType }) => {
	return (
		<p className="col-span-4 col-start-1 md:col-span-6 md:col-start-2 text-comments-page-Grayish-Blue">
			{commentType === "reply" && (
				<span className="font-medium cursor-pointer text-comments-page-Moderate-blue color_trans hover:text-comments-page-Light-grayish-blue">
					@{comment.replyingTo + " "}
				</span>
			)}
			{comment.content}
		</p>
	);
};

const TextAreaRender = ({ typeEvent, comment, commentType, handleEventComment, resetEventMode }) => {
	return (
		<>
			{typeEvent === "EDIT" ? (
				<EditTextRender
					comment={comment}
					commentType={commentType}
					handleEventComment={handleEventComment}
					resetEventMode={resetEventMode}
				></EditTextRender>
			) : (
				<DefaultTextRender
					comment={comment}
					commentType={commentType}
				></DefaultTextRender>
			)}
		</>
	);
};

export default TextAreaRender;
