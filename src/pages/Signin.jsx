import React, { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const singinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((e) => console.log(e))
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="signup-page">
      <h1>Sign in</h1>
      <label htmlFor="">Email</label>
      <input
        type="email"
        required
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="">Password</label>
      <input
        type="password"
        required
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={singinUser}>Signin</button>
    </div>
  );
}

export default Signin;
