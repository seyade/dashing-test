import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";

import Input from "../../components/input";
import { Form, FormContent } from "../../components/form";
import Button from "../../components/button";
import Text from "../../components/text";

import "./sign-in.scss";

const SignIn = () => {
	const initialValues = { username: "", password: "" };

	const navigate = useNavigate();

	const [formValues, setFormValues] = useState(initialValues);
	const [fieldErrors, setFieldErrors] = useState<any>({});

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.currentTarget;
		setFormValues({
			...formValues,
			[name]: value,
		});
		setFieldErrors((prevState: any) => ({ ...prevState, [name]: "" }));
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setFieldErrors(validate(formValues));
		localStorage.setItem("user", JSON.stringify(formValues));
		navigate("/access");
	};

	const validate = (values: typeof formValues) => {
		const errors: any = {};

		if (!values.username) {
			errors.username = "Please enter your username";
		}

		if (!values.password) {
			errors.password = "Please enter your password";
		}

		return errors;
	};

	const isValid = formValues.username && formValues.password;

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
								error={fieldErrors}
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
								error={fieldErrors}
								floatLabel
							/>

							<Button disabled={!isValid}>Sign in</Button>

							<Text>
								Forgot your password? click <Link to="/">here.</Link>
							</Text>
						</FormContent>
					</Form>
				</div>
			</section>
			<section className="sign-in__section sign-in__section--inverse">
				<h2 className="sign-in__section__title">
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
