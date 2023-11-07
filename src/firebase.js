import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyin0U9S_T2luXo1oJl_TCXzEY_Zq24YY",
  authDomain: "reactjs-auth-app-5c0a4.firebaseapp.com",
  projectId: "reactjs-auth-app-5c0a4",
  storageBucket: "reactjs-auth-app-5c0a4.appspot.com",
  messagingSenderId: "21147494613",
  appId: "1:21147494613:web:f48c0ce84c121006059a5c",
  databaseURL: "https://reactjs-auth-app-5c0a4-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}