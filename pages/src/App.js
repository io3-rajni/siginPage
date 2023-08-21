import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./componant/Home";
import Signin from "./componant/Signin";
import Profile from "./componant/Profile";
import Parent from "./componant/Parent";
// import Service from "./component/Service";

function App() {
  return (
    <div className="main-class">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          {/* <Route path="/service" element={<Service />}></Route> */}
        </Routes>
      </BrowserRouter>
      <Parent />
    </div>
  );
}

export default App;
