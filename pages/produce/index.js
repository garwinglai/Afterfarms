// import React, { useEffect, useState } from "react";
// import { getAllProduce, getAllTestUsers } from "../../actions/auth/auth";
// import Link from "next/link";

// function ShopProduce({ userArrayData }) {
// 	const [usersData, setUsersData] = useState([]);

// 	useEffect(() => {
// 		(async () => {
// 			const testUsers = await getAllTestUsers();
// 			setUsersData(testUsers);
// 		})();
// 	}, []);

// 	console.log(userArrayData);
// 	return (
// 		<div>
// 			<h1>hi</h1>

// 			{usersData.map((user, index) => {
// 				return (
// 					<Link key={index} href={`/produce/${user.id}`}>
// 						<a>{user.data.fName}</a>
// 					</Link>
// 				);
// 			})}
// 		</div>
// 	);
// }

// export default ShopProduce;

// // export async function getStaticProps() {
// // 	let userArrayData = await getAllTestUsers();

// // 	return {
// // 		props: {
// // 			userArrayData,
// // 		},
// // 		revalidate: 10,
// // 	};
// // }


// //StaticProps for produce
// //Client side render for user data

// ! Just to pass compile, test component
import React from 'react'

function Produce() {
	return (
		<div>
			hello
		</div>
	)
}

export default Produce

