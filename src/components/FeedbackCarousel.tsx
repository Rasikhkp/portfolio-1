import { useState } from "react";
import FeedbackCard from "./FeedbackCard";
import { motion } from "framer-motion";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";

const FeedbackCarousel = () => {
	const [moveX, setMoveX] = useState(0);

	const prev = (x: number) => moveX < 0 && setMoveX(moveX + x * 1040);
	const next = (x: number) => moveX > -2080 && setMoveX(moveX + x * -1040);
	return (
		<div className="absolute   w-[1349px] overflow-x-hidden pl-[180px]  h-[550px] -left-[97px] ">
			<motion.div
				className="flex gap-10"
				animate={{ x: moveX }}
				transition={{
					duration: 1,
					ease: [0.45, 0.05, 0.55, 0.95],
				}}
			>
				<FeedbackCard />
				<FeedbackCard />
				<FeedbackCard />
			</motion.div>

			<div className="absolute bottom-0 flex items-center justify-between w-[1250px] left-12 h-10">
				<button onClick={() => prev(1)}>
					<ChevronLeft w={32} h={32} />
				</button>
				<div className="flex justify-between w-10">
					<button
						onClick={() => setMoveX(0)}
						className={`w-2 h-2 ${
							moveX == 0 ? "bg-white" : "bg-slate-600"
						} rounded-full`}
					></button>
					<button
						onClick={() => setMoveX(-1040)}
						className={`w-2 h-2 ${
							moveX == -1040 ? "bg-white" : "bg-slate-600"
						} rounded-full`}
					></button>
					<button
						onClick={() => setMoveX(2 * -1040)}
						className={`w-2 h-2 ${
							moveX == 2 * -1040 ? "bg-white" : "bg-slate-600"
						} rounded-full`}
					></button>
				</div>
				<button onClick={() => next(1)}>
					<ChevronRight w={32} h={32} />
				</button>
			</div>
		</div>
	);
};

export default FeedbackCarousel;
