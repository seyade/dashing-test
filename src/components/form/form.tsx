import { FormEvent, ReactNode } from "react";

import "./form.scss";

type FormProps = {
	children: ReactNode;
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export const Form = ({ onSubmit, children, ...props }: FormProps) => {
	return (
		<form className="form" aria-label="form" onSubmit={onSubmit} {...props}>
			{children}
		</form>
	);
};

export const FormContent = ({ children }: { children: ReactNode }) => {
	return <div className="form-content">{children}</div>;
};
