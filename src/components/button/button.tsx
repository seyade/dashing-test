import { ReactNode } from "react";

import "./button.scss";

type ButtonProps = {
	children: ReactNode;
	disabled?: boolean;
	onClick?: () => void;
};

const Button = ({ children, disabled, ...props }: ButtonProps) => {
	return (
		<button className="button" disabled={disabled} {...props}>
			{children}
		</button>
	);
};

export default Button;
