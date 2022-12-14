import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Navbar from "./components/Navbar"
import PrivateRoute from "./components/PrivateRoute"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import ForgotPass from "./pages/ForgotPass"
import Team from "./pages/Team"
import Contact from "./pages/Contact"
import LiveCourse from "./pages/LiveCourse"
import VideoCourse from "./pages/VideoCourse"
import Admin from "./pages/Admin"
import Cards from "./pages/Cards"

import EditTeacher from "./pages/EditTeacher"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/live-course" element={<LiveCourse />} />
          <Route path="/video-course" element={<VideoCourse />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/forgot-pass" element={<ForgotPass />} />
          <Route path="/team" element={<Team />} />
          <Route path="/edit-teacher/:teacherId" element={<EditTeacher />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login/forgot-pass" element={<ForgotPass />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cards" element={<Cards />} />
        </Routes>
        <Footer />
      </Router>

      <ToastContainer />
    </>
  )
}

export default App
