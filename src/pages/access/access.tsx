import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/button";
import Table from "../../components/table";

import "./access.scss";

type UserData = {
	username: string;
	password: string;
};

type User = {
	name: string;
	email: string;
	username: string;
	website: string;
};

const Access = () => {
	const navigate = useNavigate();
	const [users, setUsers] = useState<User[]>([]);
	const [userData, setUserData] = useState<UserData | null>(null);

	const columns = [
		{ label: "Name", key: "name" },
		{ label: "Email", key: "email" },
		{ label: "Username", key: "username" },
		{ label: "Web", key: "web" },
	];

	const handleSignOut = () => {
		localStorage.clear();
		navigate("/");
	};

	useEffect(() => {
		setUserData(JSON.parse(localStorage.getItem("user") as string));
	}, []);

	useEffect(() => {
		async function getUsers() {
			try {
				const response = await fetch(
					"https://jsonplaceholder.typicode.com/users"
				);
				const data = await response.json();
				setUsers(data);
			} catch (error) {
				console.log(error);
			}
		}

		getUsers();
	}, []);

	return (
		<div className="page">
			<header className="page-header">
				<h1 className="logo">
					<Link to="/">DZCHAIN</Link>
				</h1>

				<Button className="page__sign-out" onClick={handleSignOut}>
					Sign out
				</Button>
			</header>

			<div className="page-content">
				<h1 className="page-title">
					Welcome to your metaverse team, {userData && `@${userData?.username}`}
				</h1>
				<Table<User> data={users} columns={columns} />
			</div>
		</div>
	);
};

export default Access;
