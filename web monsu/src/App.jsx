import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import SignUp from "./Components/_Auth2/SignUp.jsx";
import Protected from "./Components/_Auth2/Protected.jsx";
import Login from "./Components/_Auth2/Login.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Homepg from "./Components/_Auth2/Home_pg.jsx";
import Profile from "./Pages/Profile.jsx";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Protected />}>
          <Route path="/Dashboard" index element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
