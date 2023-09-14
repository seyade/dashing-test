import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import SignIn from "./sign-in";

describe("SignIn", () => {
	it("renders correctly", () => {
		render(
			<BrowserRouter>
				<SignIn />
			</BrowserRouter>
		);
		const element = screen.getByText("Enjoy the Metaverse as you sign in.");
		expect(element).toBeInTheDocument();
	});

	it("Username field is rendered", () => {
		render(
			<BrowserRouter>
				<SignIn />
			</BrowserRouter>
		);
		const element = screen.getByText("Username");
		expect(element).toBeInTheDocument();
	});

	it("Password field is rendered", () => {
		render(
			<BrowserRouter>
				<SignIn />
			</BrowserRouter>
		);
		const element = screen.getByText("Password");
		expect(element).toBeInTheDocument();
	});

	it("Button is disabled", () => {
		render(
			<BrowserRouter>
				<SignIn />
			</BrowserRouter>
		);
		const button = screen.getByText("Sign in");
		expect(button).toBeDisabled();
	});

	describe("Sign in action", () => {
		it("Button is enabled", () => {
			render(
				<BrowserRouter>
					<SignIn />
				</BrowserRouter>
			);

			const usernameField = screen.getByText("Username");
			const passwordField = screen.getByText("Password");
			const button = screen.getByText("Sign in");

			userEvent.type(usernameField, "myUsername");
			userEvent.type(passwordField, "myPassword");

			expect(button).not.toBeDisabled();
		});
	});
});
