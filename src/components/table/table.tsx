import React, { useEffect } from "react";
import { useState } from "react";

import Input from "../input";

import "./table.scss";

type TableProps<T> = {
	data: T[];
	columns: any[];
};

const Table = <T,>({ data, columns }: TableProps<T>) => {
	const [search, setSearch] = useState("");

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event?.currentTarget;
		setSearch(value);
	};

	useEffect(() => {
		console.log("SEARCH:::", search, data);
	}, [search, data]);

	return (
		<div className="table-panel">
			<div className="table-panel__search">
				<Input
					name="search"
					value={search}
					onChange={handleSearch}
					placeholder="Search"
				/>
			</div>

			<table className="table">
				<thead>
					<tr>
						{columns.map(head => (
							<th key={head.label}>{head.label}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data
						.filter((item: any) =>
							columns
								.map(head => item[head.key])
								.join(" ")
								.toLowerCase()
								.includes(search.toLowerCase())
						)
						.map((item: any) => (
							<tr key={item.name}>
								<td>{item.name}</td>
								<td>{item.email}</td>
								<td>{item.username}</td>
								<td>{item.website}</td>
							</tr>
						))}
				</tbody>
			</table>
			{data.length === 0 && <h3>No Users</h3>}
		</div>
	);
};

export default Table;
