import { Route, Routes } from "react-router-dom";
import "./App.css";

import About from "./Pages/About/About";
import Appointment from "./Pages/Home/Appointment";
import Home from "./Pages/Home/Home";
import RequireAuth from "./Pages/Home/RequireAuth";

import Navbar from "./Pages/Home/Shared/Navbar";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
  import { ToastContainer} from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Myappointment from "./Pages/Dashboard/Myappointment";
import MyReview from "./Pages/Dashboard/MyReview";
import Myhistory from "./Pages/Dashboard/Myhistory";

function App() {
  return (
    <div className="max-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Myappointment></Myappointment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="myhistory" element={<Myhistory></Myhistory>}></Route>
          {/* <Route path="history" element={<MyHistory></MyHistory>}></Route> */}
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
