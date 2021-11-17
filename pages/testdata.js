import React, { useState } from "react";
import { signup, getUser } from "../actions/auth/auth";

function Testdata() {
	const [user, setUser] = useState({
		fName: "",
		lName: "",
		email: "",
	});

	const [userData, setUserData] = useState({});

	const { fName, lName, email } = user;

	const cathy = "CjkaxWSgvW5AzY2i7caa";

	function handleChange(e) {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	}

	async function handleClick(e) {
		e.preventDefault();
		if (fName == "" && lName == "" && email == "") {
			return console.log("please enter info");
		} else {
			await signup(user);
		}
	}

	return (
		<div>
			<input name="fName" value={fName} onChange={handleChange} type="text" />
			<input name="lName" value={lName} onChange={handleChange} type="text" />
			<input name="email" value={email} onChange={handleChange} type="email" />
			<button onClick={handleClick}>Sign up user</button>
			<button
				onClick={async (e) => {
					e.preventDefault();
					const userData = await getUser(cathy);
					console.log(userData);
					setUser(userData);
				}}
			>
				Get User Data
			</button>
			<button
				onClick={(e) => {
					e.preventDefault();
					console.log(fName, lName, email);
				}}
			>
				Log User Data
			</button>
			<div>
				<h1>{fName}</h1>
				<h1>{lName}</h1>
				<h1>{email}</h1>
			</div>
		</div>
	);
}

export default Testdata;
