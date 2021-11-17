// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAsYdkVGCJfgBj8I2VmUav0_sPpQUxZtj8",
	authDomain: "afterfarms.firebaseapp.com",
	projectId: "afterfarms",
	storageBucket: "afterfarms.appspot.com",
	messagingSenderId: "182804016697",
	appId: "1:182804016697:web:1bb5263697dc06de2ca7e8",
	measurementId: "G-D2F7QD6H5Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

//Write Data Test
// async function handleWriteData() {
// 	console.log("clicked");
// 	try {
// 		const docRef = await addDoc(collection(db, "users"), {
// 			fName: "Garwing",
// 			lName: "Lai",
// 			fullName: fName + " " + lName,
// 			email: "garwinglai@gmail.com",
// 		});
// 		console.log("Document written with ID: ", docRef.id);
// 	} catch (e) {
// 		console.error("Error adding document: ", e);
// 	}
// }

//Read Data Test
// async function readData() {
// 	const querySnapshot = await getDocs(collection(db, "users"));
// 	querySnapshot.forEach((doc) => {
// 		// console.log(`${doc.id} => ${doc.data().fName}`);
// 		// return doc;
// 	});
// 	return querySnapshot;
// }

export { db };
