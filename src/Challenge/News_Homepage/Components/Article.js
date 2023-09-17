import articleImg from "../Assets/image-web-3-desktop.jpg";

const Article = () => {
	return (
		<article className="mr-8">
			<div
				className="h-[300px] w-full bg-cover bg-no-repeat bg-center"
				style={{
					backgroundImage: `url(${articleImg})`,
				}}
			/>
			<section className="flex mt-8 ">
				<h2 className="text-6xl font-extrabold w-[350px] mr-auto">
					The Bright Future of Web 3.0?
				</h2>
				<div className="w-[38%] mr-5">
					<p className="mb-8 text-[15px] text-[#5d5f79]">
						We dive into the next evolution of the web that claims to put the
						power of the platforms back into the hands of the people. But is it
						really fulfilling its promise?
					</p>
					<button className="px-8 py-4 bg-[#f15e50] text-white active:bg-[#00001a] font-bold space-x-4 whitespace-pre">
						R E A D &nbsp; M O R E
					</button>
				</div>
			</section>
		</article>
	);
};

export default Article;
