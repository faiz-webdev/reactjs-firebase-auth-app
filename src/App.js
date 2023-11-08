import { app } from "./firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import Signup from './pages/Signup';
import Signin from "./pages/Signin";

const auth = getAuth();

function App() {
  const signupUser = () => {
    createUserWithEmailAndPassword(
      auth,
      "faijuddin@tothenew.com",
      "faiz@12345"
    ).then((value) => {
      console.log(value);
    });
  };

  return (
    <div className="App">
      {/* <h2>Welcome to firebase-auth-app</h2>
      <button onClick={signupUser}>Create User</button> */}
      <Signup />
      <Signin />
    </div>
  );
}

export default App;
