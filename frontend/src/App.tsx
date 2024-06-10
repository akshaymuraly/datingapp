import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import UserLanding from "./pages/UserLanding";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/userlanding" element={<UserLanding/>}/>
      </Routes>
    </Router>
  )
}

export default App