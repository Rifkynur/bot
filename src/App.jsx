import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import InputDb from "./pages/InputDb";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/inputDb" element={<InputDb />} />
      </Routes>
    </>
  );
}

export default App;
