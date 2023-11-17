import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "./FirebaseAuth";
import { Await, useNavigate } from "react-router-dom";

const Homepg = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const [val, setVal] = useState([]);

  // useEffect (() => {
  //   const getData = async() =>{
  //     const dbVal = await getDocs (dbref)
  //     setVal(dbVal.docs.map(doc=>({...doc.data(), id:doc.id})))
  //   }
  //   getData
  // })

  return (
    <div className="w-full h-screen relative bg-[url('/src/assets/Bg-lp-fix.png')]">
      <div className="p-10 absolute top-0 w-full h-full flex flex-col justify-center text-white bg-black/30">
        <h1 className="text-xl text-lightText my-6 text-start mr-28">
          Welcome to monitoring suhu website
        </h1>
        <h2 className="text-xl text-lightText my-6 text-start ">
          {user && user.email}
        </h2>
        <button
          className="w-full py-3 mt-8 relative rounded-2xl bg-emerald-500"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Homepg;
