// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import {
// 	getProduce,
// 	getTestUser,
// 	getAllTestUsers,
// } from "../../actions/auth/auth";

// function Produce() {
// 	const [userData, setUserData] = useState({
// 		fName: "",
// 		lName: "",
// 	});
// 	const router = useRouter();
// 	const { produceid } = router.query;
// 	console.log(produceid);

// 	const { fName, lName } = userData;

// 	useEffect(() => {
// 		(async () => {
// 			let getTestUserData = await getTestUser(produceid);
// 			setUserData({
// 				fName: getTestUserData.fName,
// 				lName: getTestUserData.lName,
// 			});
// 		})();
// 	}, [produceid]);

// 	return (
// 		<div>
// 			<h1>Dynamic Routing Page to {fName}</h1>
// 			<h2>{lName}</h2>
// 		</div>
// 	);
// }

// export async function getStaticPaths() {
// 	let allUser = await getAllTestUsers();
// 	let paths = allUser.map((user) => {
// 		return {
// 			params: {
// 				produceid: user.id,
// 			},
// 		};
// 	});

// 	return {
// 		paths,
// 		fallback: false, // See the "fallback" section below
// 	};
// }

// export async function getStaticProps({ params }) {
// 	// params contains the post `id`.
// 	// If the route is like /posts/1, then params.id is 1
// 	const testUser = await getTestUser(params.produceid);

// 	// Pass post data to the page via props
// 	return {
// 		props: { testUser },
// 		// Re-generate the post at most once per second
// 		// if a request comes in
// 		revalidate: 1,
// 	};
// }

// export default Produce;


// ! Just to pass compile, test component

import React from 'react'

function ProduceId() {
	return (
		<div>
			hello
		</div>
	)
}

export default ProduceId

