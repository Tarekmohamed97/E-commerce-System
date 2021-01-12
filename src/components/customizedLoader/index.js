import React from "react";
import "./customizedLoader.scss";

export default function CustomizedLoader({ size }) {
	const className = () => {
		if (size === "small") return "CustomizedLoader__SM";
		else if (size === "large") return "CustomizedLoader__LG";
		else return null;
	};
	return <div className={className()}></div>;
}
