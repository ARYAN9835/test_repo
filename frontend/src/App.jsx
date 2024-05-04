import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login.jsx";
import Signup from "../Pages/signup.jsx";
import Home from "../Pages/Home.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
