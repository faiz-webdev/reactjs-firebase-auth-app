import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((e) =>
      console.log(e)
    );
    console.log("Creating user");
  };

  return (
    <div className="signup-page">
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
      <button onClick={createUser}>Signup</button>
    </div>
  );
}

export default Signup;
