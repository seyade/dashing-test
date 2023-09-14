import React from "react";

import "./text.scss";

type TextProps = {
	className?: string;
	children: React.ReactNode;
};

const Text = ({ children, className, ...props }: TextProps) => {
	return <p className={`text ${className}`}>{children}</p>;
};

export default Text;
