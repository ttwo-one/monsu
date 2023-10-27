import { Route, Routes } from "react-router-dom";
import Landing from "./Pages/Landing.jsx";
import Navbar2b from "./Components/Navbar2b.jsx";
import SignUp2 from "./Components/_Auth2/SignUp2.jsx";
import { SignInMethod } from "firebase/auth";
import Home from "./Components/_Auth2/Home_pg.jsx";
import Protected from "./Components/_Auth2/Protected.jsx";
import Login from "./Components/_Auth2/Login.jsx";
// import SignUp from "./Components/_Auth/SignUp.jsx";
// import { AuthProvider } from "./Components/_Login/Auth.jsx";
// import SignIn2 from "./Components/_Auth/SignIn.jsx";
// import { AiOutlineLogin } from "react-icons/ai";
// import AuthDetails from "./Components/_Auth/AuthDetails.jsx";
// import Login from "./Components/Login.jsx"

function App() {
  return (
    <div>
      <Navbar2b />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/SignUp" element={<SignUp2 />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Protected />}>
          <Route path="/Dashboard" index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
