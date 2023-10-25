import { useState } from "react";
import { motion } from "framer-motion";

const NavButton = ({ navName }: { navName: string }) => {
	const [hover, setHover] = useState(false);
	return (
		<motion.div
			onHoverStart={() => setHover(true)}
			onHoverEnd={() => setHover(false)}
			className="py-[10px] px-[7px] cursor-pointer relative"
		>
			{navName}
			<motion.div
				className="absolute left-0 bottom-0 h-[2px] bg-white"
				animate={{
					width: hover ? "100%" : "0px",
				}}
				transition={{ duration: 0.1 }}
			/>
		</motion.div>
	);
};

export default NavButton;
