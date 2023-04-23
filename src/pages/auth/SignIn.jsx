import React, { useState } from "react";
import auth from "../../firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword} from "firebase/auth";

const SignIn = () => {
    const navigate =useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
        navigate('/home')
    }).catch((error) => {
        console.log(error)
    })
  };
  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>Log In to your Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input><br/>
        <button type="submit">Log in</button>
      </form>
    </div>
)
  }
export default SignIn;