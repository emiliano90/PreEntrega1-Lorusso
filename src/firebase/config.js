// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBylOlhMA6F699bzZ1THh-ojV-2399TLVI",
  authDomain: "proyecto-final-b0173.firebaseapp.com",
  projectId: "proyecto-final-b0173",
  storageBucket: "proyecto-final-b0173.appspot.com",
  messagingSenderId: "744350359517",
  appId: "1:744350359517:web:b9ed6b787325c01e4ae034",
  measurementId: "G-G5BV5V4C8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const initFirestore = () => {
	return app
}