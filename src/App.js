import React, { useState } from "react";

import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

const App = () => {
	let users = [
		{
			name: "Tom",
			lastName: "Lewis",
			age: 33,
			id: Date.now(),
		},
		{
			name: "John",
			lastName: "Land",
			age: 22,
			id: Date.now(),
		},
		{
			name: "Hosse",
			lastName: "Enrikovich",
			age: 60,
			id: Date.now(),
		},
	];
	// const [users, setUsers] = useState([]);

	// function addUser(userObj) {
	// 	let newUsers = [...users];
	// 	newUsers.push(userObj);
	// 	setUsers(newUsers);
	// }
	return (
		<>
			<Header />
			<Section users={users} />
			<Footer />
		</>
	);
};

export default App;
