import { useEffect, useState } from "react";

import Table from "../../components/table";

import "./access.scss";

type User = {
	name: string;
	email: string;
	username: string;
	website: string;
};

const Access = () => {
	const [users, setUsers] = useState<User[]>([]);

	const columns = [
		{ label: "Name", key: "name" },
		{ label: "Email", key: "email" },
		{ label: "Username", key: "username" },
		{ label: "Web", key: "web" },
	];

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
			<h1 className="page-title">Your metaverse team.</h1>

			<div className="page-content">
				<Table<User> data={users} columns={columns} />
			</div>
		</div>
	);
};

export default Access;
