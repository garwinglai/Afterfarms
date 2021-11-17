// import { collection, addDoc, doc, getDoc, getDocs } from "firebase/firestore";
// import { db } from "../../firebase/fireConfig";

// // * GET AVAILABLE ZIP CODES
// async function getZipCode(zipCode) {
// 	const docRef = doc(db, "availableZip", zipCode);
// 	const docSnap = await getDoc(docRef);

// 	if (docSnap.exists()) {
// 		return docSnap.data().available;
// 	} else {
// 		return false;
// 	}
// }

// export { getZipCode };

// ! This is test data and functions
// async function signup(user) {
// 	const docRef = await addDoc(collection(db, "users"), {
// 		fName: user.fName,
// 		lName: user.lName,
// 		email: user.email,
// 	});
// 	console.log(docRef.id);
// }

// async function getUser(userDoc) {
// 	const docRef = doc(db, "users", userDoc);
// 	const docSnap = await getDoc(docRef);

// 	if (docSnap.exists()) {
// 		// console.log(docSnap.data());
// 		return docSnap.data();
// 	} else {
// 		console.log("no data");
// 	}
// }

// async function getAllUser() {
// 	let userArr = [];
// 	try {
// 		const querySnapshot = await getDocs(collection(db, "users"));
// 		querySnapshot.forEach((doc) => {
// 			userArr.push({ data: doc.data(), id: doc.id });
// 		});
// 		console.log(userArr);
// 	} catch (err) {
// 		console.log("error getting all users: ", err);
// 	}
// 	return userArr;
// }

// async function getAllProduce() {
// 	let produceArray = [];
// 	try {
// 		const querySnapshot = await getDocs(collection(db, "produce"));
// 		querySnapshot.forEach((doc) => {
// 			// console.log(doc.data());
// 			produceArray.push({ data: doc.data(), id: doc.id });
// 		});
// 	} catch (err) {
// 		console.log("error getting docs: ", err);
// 	}
// 	return produceArray;
// }

// async function getProduce(produce) {
// 	const docRef = doc(db, "produce", produce);

// 	const docSnap = await getDoc(docRef);

// 	if (docSnap.exists()) {
// 		// console.log(docSnap.data());
// 		return docSnap.data();
// 	} else {
// 		console.log("no data");
// 	}
// }

// async function getAllTestUsers() {
// 	let testUserArr = [];
// 	try {
// 		const querySnapshot = await getDocs(collection(db, "testData"));
// 		querySnapshot.forEach((doc) => {
// 			// console.log(doc.data());
// 			testUserArr.push({ data: doc.data(), id: doc.id });
// 		});
// 	} catch (err) {
// 		console.log("error getting docs: ", err);
// 	}
// 	// console.log(testUserArr);
// 	return testUserArr;
// }

// async function getTestUser(userId) {
// 	const docRef = doc(db, "testData", userId);
// 	const docSnap = await getDoc(docRef);
// 	const docData = docSnap.data();

// 	if (docSnap.exists()) {
// 		return docData;
// 	} else {
// 		console.log("cannot get data for userId: ", userId);
// 	}
// }
