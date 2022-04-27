import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import AddUser from "./Components/AddUser/AddUser";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
  <Route path="/user" element={<AddUser></AddUser>} />
      </Routes>
    </div>
  );
}

export default App;
