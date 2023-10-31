import woman from "../../public/img/woman.png";

const FeedbackCard = () => {
	return (
		<div className="w-[1000px] flex-none h-[336px] flex justify-center bg-[#212121] text-white p-12 mx-auto relative">
			<div className="font-sans text-center text-7xl">
				<svg
					className="mx-auto mb-5"
					fill="#ffffff"
					width="40px"
					height="40px"
					viewBox="0 0 32 32"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					stroke="#ffffff"
				>
					<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
					<g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					></g>
					<g id="SVGRepo_iconCarrier">
						<title>quote</title>
						<path d="M9.563 8.469l-0.813-1.25c-5.625 3.781-8.75 8.375-8.75 12.156 0 3.656 2.688 5.375 4.969 5.375 2.875 0 4.906-2.438 4.906-5 0-2.156-1.375-4-3.219-4.688-0.531-0.188-1.031-0.344-1.031-1.25 0-1.156 0.844-2.875 3.938-5.344zM21.969 8.469l-0.813-1.25c-5.563 3.781-8.75 8.375-8.75 12.156 0 3.656 2.75 5.375 5.031 5.375 2.906 0 4.969-2.438 4.969-5 0-2.156-1.406-4-3.313-4.688-0.531-0.188-1-0.344-1-1.25 0-1.156 0.875-2.875 3.875-5.344z"></path>{" "}
					</g>
				</svg>
				<div className="text-[20px] text-white leading-loose">
					Far far away, behind the word mountains, far from the countries
					Vokalia and Consonantia, there live the blind texts. Separated
					they live in Bookmarksgrove right at the coast of the Semantics,
					a large language ocean. A small river named Duden flows by their
					place and supplies it with the necessary regelialia. It is a
					paradisematic country, in which roasted parts of sentences fly
					into your mouth.
				</div>
			</div>
			<div className="w-[95%] absolute -bottom-5 h-5 bg-[#D63447] mx-auto"></div>
			<img
				src={woman}
				className="absolute bottom-0 w-20 mx-auto translate-y-1/2"
				alt=""
			/>
			<div className="absolute bottom-0 text-lg translate-y-24">
				Erica Miller
			</div>
			<div className="absolute bottom-0 text-xs text-gray-500 translate-y-28">
				Product Manager @Twitter
			</div>
		</div>
	);
};

export default FeedbackCard;
