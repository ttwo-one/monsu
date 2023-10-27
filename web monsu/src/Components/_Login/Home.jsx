import React from "react";
import database from "./LoginConfig.jsx";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <button onClick={() => database.auth().signOut()}>Sign out</button>
    </>
  );
};

export default Home;
