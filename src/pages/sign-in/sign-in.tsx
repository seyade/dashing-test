import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";

import Input from "../../components/input";
import { Form, FormContent } from "../../components/form";
import Button from "../../components/button";
import Text from "../../components/text";

import "./sign-in.scss";

type Profile = {
	id: number | string;
	username: string;
	password: string;
	role: string;
};

const SignIn = () => {
	// set existing users
	const userProfiles: Profile[] = [
		{ id: 0, username: "Ryuseioh", password: "admin1", role: "all" },
		{ id: 1, username: "Houou", password: "admin2", role: "editor" },
		{ id: 1, username: "Kirin", password: "admin3", role: "" },
	];

	localStorage.setItem("profiles", JSON.stringify(userProfiles));

	const formInitialValues = { username: "", password: "" };

	const [formValues, setFormValues] = useState(formInitialValues);
	const [fieldErrors, setFieldErrors] = useState<any>({});

	const navigate = useNavigate();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.currentTarget;
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const validationErrors: any = {};
		const profiles = JSON.parse(localStorage.getItem("profiles") as string);

		const profile = profiles.find(
			(profile: Profile) => profile.username === formValues.username
		);

		if (formValues.username.trim() === "") {
			validationErrors.username = "Enter your username";
		} else if (!profile) {
			validationErrors.username = "This username does not exist.";
		}

		if (!formValues.password.trim()) {
			validationErrors.password = "Enter your password";
		} else if (profile && formValues.password !== profile.password) {
			validationErrors.password = "Password doesn't match the username";
		}

		if (Object.keys(validationErrors).length === 0) {
			navigate("/access", { state: formValues.username });
		} else {
			setFieldErrors(validationErrors);
		}
	};

	return (
		<main className="page sign-in">
			<section className="sign-in__section">
				<h1 className="logo">DZCHAIN</h1>
				<div className="container">
					<Form onSubmit={handleSubmit}>
						<h2 className="form-title">Sign in.</h2>
						<Text>Enjoy the Metaverse as you sign in.</Text>
						<FormContent>
							<Input
								id="username"
								label="Username"
								name="username"
								onChange={handleChange}
								placeholder="Username"
								value={formValues.username}
								errorMessage={fieldErrors.username}
								floatLabel
							/>

							<Input
								label="Password"
								type="password"
								id="password"
								name="password"
								onChange={handleChange}
								placeholder="Password"
								value={formValues.password}
								errorMessage={fieldErrors.password}
								floatLabel
							/>

							<Button disabled={false}>Sign in</Button>

							<Text>
								Forgot your password? click <Link to="/">here.</Link>
							</Text>
						</FormContent>
					</Form>
				</div>
			</section>
			<section className="sign-in__section sign-in__section--inverse">
				<h1 className="logo">DZCHAIN</h1>
				<h2 className="sign-in__section__subtitle">
					Welcome to another universe.
				</h2>
				<Text>
					You are used to an alternate life online. Now explore another
					alternate life on the blockchain.
				</Text>
				<Link className="sign-in__register" to="/">
					Register
				</Link>
			</section>
		</main>
	);
};

export default SignIn;
