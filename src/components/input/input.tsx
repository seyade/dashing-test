import { ComponentPropsWithoutRef, useState } from "react";
import "./input.scss";

type InputProps = ComponentPropsWithoutRef<"input"> & {
	label?: string;
	errorMessage?: string;
	errorOff?: boolean;
	floatLabel?: boolean;
	focused?: boolean;
};

const Input = ({
	id,
	onChange,
	placeholder,
	label,
	errorMessage,
	errorOff,
	floatLabel = false,
	...props
}: InputProps) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => {
		setIsFocused(true);
	};

	return (
		<div className="field">
			<input
				id={id}
				className={`input ${floatLabel && "input---float"}`}
				aria-label={label}
				onChange={onChange}
				placeholder={placeholder}
				onBlur={handleFocus}
				focused={isFocused.toString()}
				{...props}
			/>
			{label && (
				<label className="label" htmlFor={id}>
					{label}
				</label>
			)}
			{errorMessage && <span className="input-error">{errorMessage}</span>}
		</div>
	);
};

export default Input;
