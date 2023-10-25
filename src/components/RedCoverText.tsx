import { motion } from "framer-motion";

const RedCoverText = ({
	text,
	w = "fit",
	leading = "",
}: {
	text: string;
	w?: string;
	leading?: string;
}) => {
	return (
		<div className={`w-${w} relative overflow-hidden`}>
			<motion.div
				id="teks"
				className={`text-transparent text-center ${leading}`}
				animate={{ color: "white" }}
				transition={{ delay: 0.5 }}
			>
				<div>{text}</div>
			</motion.div>
			<motion.div
				className="absolute top-0 left-0 h-full bg-red-500"
				initial={{ width: "0px", marginLeft: "0px" }}
				animate={{
					width: "100%",
					marginLeft: "100%",
				}}
				transition={{
					width: { duration: 0.5, ease: [0.05, 0.01, 0.025, 0.95] },
					marginLeft: {
						delay: 0.8,
						duration: 0.5,
						ease: [0.25, 0.27, 0.29, 0.95],
					},
					// width: [0, 0.3, 0.7, 1],
				}}
			>
				<div></div>
			</motion.div>
		</div>
	);
};

export default RedCoverText;
