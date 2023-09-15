import { ReactNode, ButtonHTMLAttributes } from "react";

import "./button.scss";

// type ButtonProps = {
// 	children: ReactNode;
// 	disabled?: boolean;
// 	onClick?: () => void;
// } & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	className?: string;
};

const Button = ({ children, disabled, className, ...props }: ButtonProps) => {
	return (
		<button className={`button ${className}`} disabled={disabled} {...props}>
			{children}
		</button>
	);
};

export default Button;
