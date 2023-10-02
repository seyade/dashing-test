import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import SignIn from "./sign-in";

describe("SignIn Form", () => {
	it("renders correctly", () => {
		render(
			<MemoryRouter>
				<SignIn />
			</MemoryRouter>
		);
		const element = screen.getByText(/Username/i);
		expect(element).toBeInTheDocument();
	});

	describe("Validation", () => {
		it("should not submit the form when fields are empty", () => {
			render(
				<MemoryRouter>
					<SignIn />
				</MemoryRouter>
			);

			const submitButton = screen.getByRole("button");

			fireEvent.submit(submitButton);

			const usernameErrorMsg = screen.getByText("Enter your username");
			const passwordErrorMsg = screen.getByText("Enter your password");

			expect(usernameErrorMsg).toHaveTextContent("Enter your username");
			expect(passwordErrorMsg).toHaveTextContent("Enter your password");
		});

		it("should say the username does not exist", () => {
			render(
				<MemoryRouter>
					<SignIn />
				</MemoryRouter>
			);

			const usernameField = screen.getByLabelText(/Username/i);
			const submitButton = screen.getAllByText(/Sign in/i)[0];

			userEvent.type(usernameField, "FakeUser");

			fireEvent.submit(submitButton);

			const usernameErrorMsg = screen.getByText(
				"This username does not exist."
			);

			expect(usernameErrorMsg).toHaveTextContent(
				"This username does not exist."
			);
		});

		it("should say password doesn't match the username", () => {
			render(
				<MemoryRouter>
					<SignIn />
				</MemoryRouter>
			);

			const usernameField = screen.getByLabelText(/Username/i);
			const passwordField = screen.getByLabelText(/Password/i);
			const submitButton = screen.getByRole("button");

			userEvent.type(usernameField, "Ryuseioh");
			userEvent.type(passwordField, "wrongPassword");

			fireEvent.submit(submitButton);

			const passwordErrorMsg = screen.getByText(
				"Password doesn't match the username"
			);

			expect(passwordErrorMsg).toHaveTextContent(
				"Password doesn't match the username"
			);
		});
	});
});
