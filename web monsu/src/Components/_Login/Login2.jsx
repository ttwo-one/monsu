import React, { useCallback, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth.jsx";
import database from "../FirebaseAuth.jsx";
import { useNavigate  } from "react-router-dom";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await database
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/Home");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/Home" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export const withRouter = (Login) =>{
    const Wrapper = (props) =>{
        const history = useNavigate();
        return <Login history={history} {...props}/>
    } 
    return Wrapper;
}