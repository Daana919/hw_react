import React from "react";
import { NavItem } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Section = ({ users }) => {
	return (
		// <div>
		// 	<ul>
		// 		{users.map(item => (
		// 			<li key={item.id}>
		// 				{item.name}
		// 				{item.lastName}
		// 			</li>
		// 		))}
		// 	</ul>
		// </div>

		<Table striped bordered hover>
			<thead>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Age</th>
				</tr>
			</thead>
			{users.map(item => (
				<tbody key={item.id}>
					<tr>
						<td>{item.name}</td>
						<td>{item.lastName}</td>
						<td>{item.age}</td>
					</tr>
				</tbody>
			))}
		</Table>
	);
};

export default Section;
