import { ChangeEvent } from "react";
import "./input.scss";

type InputProps = {
	id?: string;
	label?: string;
	name: string;
	placeholder?: string;
	value: string;
	type?: string;
	error?: any;
	errorOff?: boolean;
	floatLabel?: boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
	id,
	name,
	onChange,
	placeholder,
	value,
	label,
	error,
	errorOff,
	floatLabel = false,
	...props
}: InputProps) => {
	return (
		<div className="field">
			<input
				className={`input ${floatLabel && "input---float"}`}
				id={id}
				name={name}
				onChange={onChange}
				placeholder={placeholder}
				value={value}
				{...props}
			/>
			{label && (
				<label className="label" htmlFor={id}>
					{label}
				</label>
			)}
			{error !== undefined && error[name] && (
				<p className="input-error">{error[name]}</p>
			)}
		</div>
	);
};

export default Input;
