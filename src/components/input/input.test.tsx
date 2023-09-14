import { render, screen } from "@testing-library/react";
import Input from "./input";

describe("Input", () => {
	const props = {
		id: "username",
		label: "Username",
		name: "username",
		placeholder: "Username",
		value: "@Gosei Sentai",
		onChange: jest.fn(),
	};

	it("renders correctly", () => {
		render(<Input {...props} />);

		const input = screen.getByText("Username");
		expect(input).toBeInTheDocument();
	});
});
