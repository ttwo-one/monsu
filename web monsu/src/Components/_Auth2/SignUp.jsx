import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../FirebaseAuth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/Dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-around items-center md:mx-44 mx-5 mt-8">
      <h1 className="text-center m-10">Sign up Page</h1>
      <form onSubmit={handleSubmit} className="items-center">
        <div className="">
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Your Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="flex-justify-between">
          Sign Up
        </button>
      </form>
      <p>
        Need to Sign In? <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;
