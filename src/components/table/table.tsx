import React, { useEffect } from "react";
import { useState } from "react";

import Input from "../input";

import "./table.scss";

type TableProps<T> = {
	data: T[];
	columns: any[];
	hasAccess?: string | undefined;
};

const Table = <T,>({ data, columns, hasAccess }: TableProps<T>) => {
	const [search, setSearch] = useState("");
	const [tableData, setTableData] = useState<T[]>([]);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event?.currentTarget;

		setSearch(value);

		setTableData(
			data.filter((item: any) =>
				columns
					.map(head => item[head.key])
					.join(" ")
					.toLowerCase()
					.includes(value.toLowerCase())
			)
		);
	};

	useEffect(() => {
		setTableData(data);
	}, [data]);

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

			{tableData.length !== 0 ? (
				<table className="table">
					<thead>
						<tr>
							{columns.map(head => (
								<th key={head.label}>{head.label}</th>
							))}
							{(hasAccess === "editor" || hasAccess === "all") && (
								<th>Action</th>
							)}
						</tr>
					</thead>
					<tbody>
						{tableData.map((item: any) => {
							return (
								<tr key={item.name}>
									<td>{item.name}</td>
									<td>{item.email}</td>
									<td>{item.username}</td>
									<td>{item.website}</td>

									{(hasAccess === "editor" || hasAccess === "all") && (
										<td>
											<button>Edit</button>
										</td>
									)}
								</tr>
							);
						})}
					</tbody>
				</table>
			) : (
				<div className="table-panel__empty">
					<h3>No member was found.</h3>
				</div>
			)}
		</div>
	);
};

export default Table;
