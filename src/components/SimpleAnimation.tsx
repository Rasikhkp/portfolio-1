import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SimpleAnimation = () => {
	const [show, setShow] = useState(true);

	return (
		<div className="flex items-center justify-center w-full h-screen">
			<div>
				<motion.button
					className="px-4 py-2 rounded-lg bg-blue-300 text-white font-bold font-mono mb-5"
					onClick={() => setShow(!show)}
					layout
				>
					Show/Hide
				</motion.button>
				<AnimatePresence mode="sync">
					{show && (
						<motion.div
							initial={{
								backgroundColor: "red",
								x: 0,
							}}
							animate={{
								backgroundColor: "yellow",
								x: [0, 90, 90, 90, 0],
							}}
							exit={{
								backgroundColor: "red",
								x: [0, 90, 90, 90, 0],
							}}
							transition={{
								duration: 10,
								ease: "backInOut",
								x: [0, 0.3, 0.9, 0.95, 1],
							}}
							className="w-20 h-20"
						></motion.div>
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default SimpleAnimation;
