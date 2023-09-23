import CommentBox from "./CommentBox";

const Comments_Page = () => {
	return (
		<div className="flex justify-center w-full h-full overflow-auto font-Rubik md:h-full bg-comments-page-Very-light-gray">
			<main class="w-fit h-fit md:my-16 md:mx-0 mx-4 my-8">
				<CommentBox></CommentBox>
			</main>
		</div>
	);
};

export default Comments_Page;
