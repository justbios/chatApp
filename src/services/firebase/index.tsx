// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDH6GdvpjjXoRIAhrqxuANOSJqjHqgd0MA',
	authDomain: 'chatapp-79bb8.firebaseapp.com',
	projectId: 'chatapp-79bb8',
	storageBucket: 'chatapp-79bb8.appspot.com',
	messagingSenderId: '307380077160',
	appId: '1:307380077160:web:3f8b6a7827a6ee9d66b1dd',
	measurementId: 'G-NYRYH4PKZS',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firebaseAuth = getAuth(firebaseApp);
export { firebaseApp, firebaseAuth };
