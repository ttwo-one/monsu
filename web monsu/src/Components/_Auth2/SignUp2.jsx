import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../FirebaseAuth";
import { addDoc, collection, getDocs } from "firebase/firestore";

const SignUp2 = () => {
  const [namaLengkap, setNamaLengkap] = useState("");
  const [noHp, setNoHp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const DataUser = collection(db, "DataUser");
    await addDoc(DataUser, {
      NamaLengkap: namaLengkap,
      NoHp: noHp,
      Email: email,
      Password: password,
    });
    alert("Data Added Successfully");

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
            type="namaLengkap"
            placeholder="Nama Lengkap"
            required
            value={namaLengkap}
            onChange={(e) => setNamaLengkap(e.target.value)}
          />
          <input
            type="noHp"
            placeholder="No Hp"
            required
            value={noHp}
            onChange={(e) => setNoHp(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
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

export default SignUp2;
