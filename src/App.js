import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AddUser from "./Components/AddUser/AddUser";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
  <Route path="user/add" element={<AddUser></AddUser>} />
      </Routes>
    </div>
  );
}

export default App;
