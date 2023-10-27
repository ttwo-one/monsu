import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import database from "../FirebaseAuth.jsx";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await database
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/Home");
    } catch (error) {
      alert(error);
    }
  }, [history]);


  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default withRouter(SignUp);