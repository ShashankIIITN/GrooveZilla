import React from "react";
import "../../css/Button.css"

function Button({ text, icon, iconPosition, style }) {
	return (
		<>
			{iconPosition == "right" ? (
				<button type="button" className="btn" style={style}>
					{text} {icon}
				</button>
			) : (
				<button type="button" className="btn" style={style}>
					{icon}
					{text}
				</button>
			)}
		</>
	);
}

export default Button;
