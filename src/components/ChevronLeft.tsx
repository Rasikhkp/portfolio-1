import { useState } from "react";

const ChevronLeft = ({ w, h }: { w: number; h: number }) => {
	const [chevronColor, setChevronColor] = useState("#D2E3C8");
	return (
		<svg
			onMouseEnter={() => setChevronColor("#86A789")}
			onMouseLeave={() => setChevronColor("#D2E3C8")}
			onMouseDown={() => setChevronColor("#3A4D39")}
			xmlns="http://www.w3.org/2000/svg"
			width={w}
			height={h}
			viewBox="0 0 24 24"
			fill="none"
			stroke={chevronColor}
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="arcs"
		>
			<path d="M15 18l-6-6 6-6"></path>
		</svg>
	);
};

export default ChevronLeft;
